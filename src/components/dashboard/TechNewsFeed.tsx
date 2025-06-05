// src/components/dashboard/TechNewsFeed.tsx
import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: {
    name: string;
  };
  urlToImage?: string;
}

interface HackerNewsHit {
  objectID: string;
  title?: string;
  story_title?: string;
  story_text?: string;
  comment_text?: string;
  url?: string;
  created_at: string;
  author: string;
}

interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  user: { name: string };
  social_image: string;
}

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
}

interface RedditChild {
  data: {
    id: string;
    title: string;
    selftext?: string;
    permalink: string;
    created_utc: number;
    thumbnail?: string;
  };
}

interface SpaceArticle {
  id?: number;
  title: string;
  summary?: string;
  url: string;
  publishedAt?: string;
  published_at?: string;
  newsSite?: string;
  imageUrl?: string;
}

interface TechNewsFeedProps {
  className?: string;
}

const TechNewsFeed: React.FC<TechNewsFeedProps> = ({ className = '' }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [speed, setSpeed] = useState(30); // seconds

  useEffect(() => {
    const fetchTechNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const hnReq = fetch(
          'https://hn.algolia.com/api/v1/search_by_date?tags=story&query=technology'
        );
        const devtoReq = fetch(
          'https://dev.to/api/articles?per_page=5&tag=technology'
        );
        const vergeReq = fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://www.theverge.com/rss/index.xml'
        );
        const redditReq = fetch(
          'https://www.reddit.com/r/technology/top.json?limit=5&t=day'
        );
        const spaceReq = fetch(
          'https://api.spaceflightnewsapi.net/v4/articles?limit=5'
        );

        const [hnRes, devtoRes, vergeRes, redditRes, spaceRes] = await Promise.allSettled([
          hnReq,
          devtoReq,
          vergeReq,
          redditReq,
          spaceReq,
        ]);

        const articles: NewsItem[] = [];

        if (hnRes.status === 'fulfilled' && hnRes.value.ok) {
          const data = await hnRes.value.json();
          articles.push(
            ...(data.hits || []).map((hit: HackerNewsHit) => ({
              id: hit.objectID,
              title: hit.title || hit.story_title || 'Untitled',
              description: hit.story_text || hit.comment_text || '',
              url: hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`,
              publishedAt: hit.created_at,
              source: { name: hit.author || 'Hacker News' },
            }))
          );
        }

        if (devtoRes.status === 'fulfilled' && devtoRes.value.ok) {
          const data = await devtoRes.value.json();
          articles.push(
            ...(data as DevToArticle[]).map((item) => ({
              id: String(item.id),
              title: item.title,
              description: item.description,
              url: item.url,
              publishedAt: item.published_at,
              source: { name: item.user.name },
              urlToImage: item.social_image,
            }))
          );
        }

        if (vergeRes.status === 'fulfilled' && vergeRes.value.ok) {
          const data = await vergeRes.value.json();
          articles.push(
            ...(data.items || []).map((item: RssItem, index: number) => ({
              id: `verge-${index}`,
              title: item.title,
              description: '',
              url: item.link,
              publishedAt: item.pubDate,
              source: { name: 'The Verge' },
              urlToImage: item.thumbnail,
            }))
          );
        }

        if (redditRes.status === 'fulfilled' && redditRes.value.ok) {
          const data = (await redditRes.value.json()) as { data: { children: RedditChild[] } };
          articles.push(
            ...(data.data?.children || []).map((child: RedditChild) => ({
              id: `reddit-${child.data.id}`,
              title: child.data.title,
              description: child.data.selftext || '',
              url: `https://www.reddit.com${child.data.permalink}`,
              publishedAt: new Date(child.data.created_utc * 1000).toISOString(),
              source: { name: 'Reddit' },
              urlToImage:
                child.data.thumbnail && child.data.thumbnail.startsWith('http')
                  ? child.data.thumbnail
                  : undefined,
            }))
          );
        }

        if (spaceRes.status === 'fulfilled' && spaceRes.value.ok) {
          const data = await spaceRes.value.json();
          const results: SpaceArticle[] = data.results || data;
          articles.push(
              ...(results || []).map((item: SpaceArticle, index: number) => ({
                id: `space-${item.id ?? index}`,
                title: item.title,
                description: item.summary || '',
                url: item.url,
                publishedAt:
                  item.publishedAt ||
                  item.published_at ||
                  new Date().toISOString(),
                source: { name: item.newsSite || 'SpaceFlightNews' },
                urlToImage: item.imageUrl,
              }))
          );
        }

        articles.sort(
          (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );

        setNews(articles);
        
      } catch (err) {
        console.error('Failed to fetch tech news:', err);
        setError('Failed to load tech news');
        
        // Fallback to mock data for development
        setNews([
          {
            id: '1',
            title: 'Latest AI Breakthrough in Machine Learning',
            description: 'Researchers have discovered new methods for improving neural network efficiency.',
            url: '#',
            publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
            source: { name: 'Tech Daily' },
            urlToImage: '/api/placeholder/300/200'
          },
          {
            id: '2',
            title: 'Cloud Computing Trends for 2025',
            description: 'Industry experts predict major shifts in cloud infrastructure and services.',
            url: '#',
            publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
            source: { name: 'Cloud Weekly' },
            urlToImage: '/api/placeholder/300/200'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTechNews();
  }, []);

  if (loading) {
    return (
      <div className={`bg-gray-900 border border-gray-700 rounded-lg p-6 ${className}`}>
        <h3 className="text-lg font-semibold text-white mb-4">Tech News</h3>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-800 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-gray-900 border border-gray-700 rounded-lg p-6 ${className}`}>
        <h3 className="text-lg font-semibold text-white mb-4">Tech News</h3>
        <div className="text-red-400 text-sm">{error}</div>
      </div>
    );
  }

  return (
    <div className={`bg-gray-900 border border-gray-700 rounded-lg p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-white mb-4">Tech News</h3>
      <div className="overflow-hidden whitespace-nowrap relative group">
        <div
          className="flex gap-8 animate-marquee items-center"
          style={{ animationDuration: `${speed}s` }}
        >
          {news.map((item, idx) => (
            <React.Fragment key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-white"
              >
                {item.title}
              </a>
              {idx !== news.length - 1 && <span className="mx-4">•</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setSpeed((s) => Math.min(60, s + 5))}
            className="p-1 rounded bg-gray-800/60 hover:bg-gray-800"
            aria-label="Slow down ticker"
          >
            <Minus className="h-3 w-3" />
          </button>
          <button
            onClick={() => setSpeed((s) => Math.max(5, s - 5))}
            className="p-1 rounded bg-gray-800/60 hover:bg-gray-800"
            aria-label="Speed up ticker"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>
      {news.length === 0 && (
        <div className="text-gray-400 text-sm text-center py-8">
          No tech news available
        </div>
      )}
    </div>
  );
};

export default TechNewsFeed;
