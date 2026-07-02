// Cloudflare Pages Function: GET /api/reddit?feed=user|technology
// Proxies Reddit's JSON API server-side. Reddit blocks anonymous browser
// requests (no CORS + bot detection), so the site can't call it directly.
//
// Works best with Reddit OAuth app credentials (script app from
// https://www.reddit.com/prefs/apps) set in the Pages project:
//   REDDIT_CLIENT_ID
//   REDDIT_CLIENT_SECRET
// Without them it falls back to an anonymous request, which Reddit may block.

interface Env {
  REDDIT_CLIENT_ID?: string;
  REDDIT_CLIENT_SECRET?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
  waitUntil: (promise: Promise<unknown>) => void;
}

// Only these feeds may be proxied — never an open proxy.
const FEEDS: Record<string, { path: string; query: string }> = {
  user: { path: 'user/SuperHands3869/submitted', query: 'limit=10&raw_json=1' },
  technology: { path: 'r/technology/top', query: 'limit=5&t=day&raw_json=1' },
};

const USER_AGENT = 'web:nexcomedia.com:v1.0 (by /u/SuperHands3869)';
const CACHE_SECONDS = 600;

async function getAppToken(env: Env): Promise<string | null> {
  if (!env.REDDIT_CLIENT_ID || !env.REDDIT_CLIENT_SECRET) return null;
  const res = await fetch('https://www.reddit.com/api/v1/access_token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${env.REDDIT_CLIENT_ID}:${env.REDDIT_CLIENT_SECRET}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': USER_AGENT,
    },
    body: 'grant_type=client_credentials',
  });
  if (!res.ok) {
    console.error('Reddit token error:', res.status, await res.text());
    return null;
  }
  const data = (await res.json()) as { access_token?: string };
  return data.access_token ?? null;
}

export const onRequestGet = async (context: PagesContext): Promise<Response> => {
  const { request, env, waitUntil } = context;
  const url = new URL(request.url);
  const feed = FEEDS[url.searchParams.get('feed') ?? 'user'];
  if (!feed) {
    return new Response(JSON.stringify({ error: 'Unknown feed.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Serve from the edge cache when possible
  const cache = caches.default;
  const cacheKey = new Request(url.toString());
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  let upstream: Response | null = null;

  const token = await getAppToken(env);
  if (token) {
    upstream = await fetch(`https://oauth.reddit.com/${feed.path}?${feed.query}`, {
      headers: { Authorization: `Bearer ${token}`, 'User-Agent': USER_AGENT },
    });
  }

  // Anonymous fallback — may be blocked by Reddit, but costs nothing to try
  if (!upstream || !upstream.ok) {
    upstream = await fetch(`https://www.reddit.com/${feed.path}.json?${feed.query}`, {
      headers: { 'User-Agent': USER_AGENT },
    });
  }

  if (!upstream.ok) {
    return new Response(
      JSON.stringify({ error: `Reddit responded ${upstream.status}.` }),
      { status: 502, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const body = await upstream.text();
  const response = new Response(body, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': `public, max-age=${CACHE_SECONDS}`,
    },
  });
  waitUntil(cache.put(cacheKey, response.clone()));
  return response;
};
