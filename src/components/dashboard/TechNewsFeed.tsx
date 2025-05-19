import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface NewsItem {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
}

export default function TechNewsFeed() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );
        const data = await response.json();
        
        setNews(
          data.articles.slice(0, 5).map((article: any) => {
            const date = new Date(article.publishedAt);
            return {
              title: article.title,
              url: article.url,
              source: article.source.name,
              publishedAt: date.toLocaleTimeString() // Changed from toRelativeTimeString
            };
          })
        );
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
    const interval = setInterval(fetchNews, 300000); // Update every 5 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="border-primary/10">
      <CardContent className="p-4">
        <h3 className="font-semibold mb-4">Tech News Feed</h3>   
        <div className="space-y-4">
          {news.map((item, index) => (
              <a>
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h4 className="font-medium group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <span>{item.source}</span>
                    <span>•</span>
                    <span>{item.publishedAt}</span>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
