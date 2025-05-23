// src/components/dashboard/TechNewsFeed.tsx
import React, { useState, useEffect } from 'react';
import { toRelativeTimeString } from '../../utils/dateUtils';

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

        // Using free news API (NewsAPI alternative or mock data)
        const response = await fetch('/api/tech-news');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setNews(data.articles || []);
        
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
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {news.slice(0, 10).map((item) => (
          <article 
            key={item.id} 
            className="border-b border-gray-700 pb-4 last:border-b-0 last:pb-0"
          >
            <div className="flex gap-3">
              {item.urlToImage && (
                <img 
                  src={item.urlToImage} 
                  alt=""
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              )}
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-medium text-sm leading-5 mb-1 line-clamp-2">
                  <a 
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.title}
                  </a>
                </h4>
                <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{item.source.name}</span>
                  <span>•</span>
                  <time dateTime={item.publishedAt}>
                    {toRelativeTimeString(new Date(item.publishedAt))}
                  </time>
                </div>
              </div>
            </div>
          </article>
        ))}
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