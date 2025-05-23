// // src/api/techNews.ts (Server-side API handler for Vite/Express)
// // import express from 'express';

// interface NewsApiResponse {
//   status: string;
//   totalResults: number;
//   articles: Array<{
//     source: { id: string | null; name: string };
//     author: string | null;
//     title: string;
//     description: string;
//     url: string;
//     urlToImage: string | null;
//     publishedAt: string;
//     content: string;
//   }>;
// }

// const router = Router();

// // Mock tech news data
// const mockTechNews = {
//   articles: [
//     {
//       id: '1',
//       title: 'AI Revolution: GPT-5 Announced with Breakthrough Capabilities',
//       description: 'OpenAI unveils next-generation language model with enhanced reasoning and multimodal capabilities.',
//       url: 'https://example.com/gpt5-announcement',
//       publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
//       source: { name: 'AI Times' },
//       urlToImage: 'https://via.placeholder.com/300x200/1f2937/ffffff?text=GPT-5'
//     },
//     {
//       id: '2',
//       title: 'Kubernetes 1.30 Released with Enhanced Security Features',
//       description: 'Latest Kubernetes version introduces improved pod security standards and resource management.',
//       url: 'https://example.com/k8s-1-30',
//       publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
//       source: { name: 'DevOps Weekly' },
//       urlToImage: 'https://via.placeholder.com/300x200/1f2937/ffffff?text=Kubernetes'
//     },
//     {
//       id: '3',
//       title: 'React 19 Beta Brings Concurrent Features to Production',
//       description: 'Facebook releases React 19 beta with improved concurrent rendering and Suspense capabilities.',
//       url: 'https://example.com/react-19-beta',
//       publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
//       source: { name: 'Frontend Focus' },
//       urlToImage: 'https://via.placeholder.com/300x200/1f2937/ffffff?text=React+19'
//     }
//   ]
// };

// // GET /api/tech-news
// router.get('/tech-news', async (req, res) => {
//   try {
//     // Option 1: Use real NewsAPI (requires API key)
//     const newsApiKey = process.env.NEWS_API_KEY;
    
//     if (newsApiKey) {
//       const response = await fetch(
//         `https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&apiKey=${newsApiKey}&pageSize=10`
//       );
      
//       if (response.ok) {
//         const data: NewsApiResponse = await response.json();
//         const formattedArticles = data.articles.map((article, index) => ({
//           id: `news-${index}`,
//           title: article.title,
//           description: article.description,
//           url: article.url,
//           publishedAt: article.publishedAt,
//           source: article.source,
//           urlToImage: article.urlToImage
//         }));
        
//         return res.json({ articles: formattedArticles });
//       }
//     }
    
//     // Option 2: Return mock data as fallback
//     res.json(mockTechNews);
    
//   } catch (error) {
//     console.error('Error fetching tech news:', error);
//     res.status(500).json({ 
//       error: 'Failed to fetch tech news',
//       articles: mockTechNews.articles 
//     });
//   }
// });

// export default router;