// src/components/dashboard/TechNewsFeed.tsx
import React, { useState, useEffect } from 'react';

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

interface TechNewsFeedProps {
  className?: string;
}

const TechNewsFeed: React.FC<TechNewsFeedProps> = ({ className = '' }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

        const [hnRes, devtoRes, vergeRes] = await Promise.allSettled([
          hnReq,
          devtoReq,
          vergeReq,
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
      <div className={`bg-gray-900 border border-accent rounded-lg p-6 ${className}`}>
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
      <div className={`bg-gray-900 border border-accent rounded-lg p-6 ${className}`}>
        <h3 className="text-lg font-semibold text-white mb-4">Tech News</h3>
        <div className="text-red-400 text-sm">{error}</div>
      </div>
    );
  }

  return (
    <div className={`bg-gray-900 border border-accent rounded-lg p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-white mb-4">Tech News</h3>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex gap-8 animate-marquee items-center">
          {news.map((item, idx) => (
            <React.Fragment key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-white"
              >
                {item.title}
              </a>
              {idx !== news.length - 1 && <span className="mx-4">•</span>}
            </React.Fragment>
          ))}
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