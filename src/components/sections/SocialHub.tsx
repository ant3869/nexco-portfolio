import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Github, Youtube, FileCode, Brush } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';
import Reveal from '@/components/ui/Reveal';

// TikTok's creator embed: shows the live @nexcomedia profile with latest
// videos. The embed script scans for blockquotes on load, so it's re-added
// on every mount to work with client-side routing.
function TikTokEmbed() {
  useEffect(() => {
    document.getElementById('tiktok-embed-script')?.remove();
    const script = document.createElement('script');
    script.id = 'tiktok-embed-script';
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@nexcomedia"
        data-unique-id="nexcomedia"
        data-embed-type="creator"
        style={{ maxWidth: '780px', minWidth: '288px' }}
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@nexcomedia?refer=creator_embed"
          >
            @nexcomedia on TikTok
          </a>
        </section>
      </blockquote>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Feed not loading?{' '}
        <a
          href="https://www.tiktok.com/@nexcomedia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Watch on TikTok →
        </a>
      </p>
    </div>
  );
}

// Sample data for social feeds
interface GitHubRepo {
  id: number;
  title: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
}

interface GitHubApiRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

const socialData = {
  deviantArt: [
    {
      id: 1,
      title: 'Earth Render',
      imageUrl: '/images/art-1.jpg',
      likes: 124,
    },
    {
      id: 2,
      title: 'Purple Nexco Layout',
      imageUrl: '/images/art-2.jpg',
      likes: 83,
    },
    {
      id: 3,
      title: 'Game Title',
      imageUrl: '/images/art-3.jpg',
      likes: 66,
    },
  ],
  youtube: [
    {
      id: 'tJ2tKEvZGIw',
      title: 'Ghostbusters Proton Beam After Effects',
      thumbnailUrl:
        'https://i.ytimg.com/vi/tJ2tKEvZGIw/hqdefault.jpg',
      views: '5.2K',
      published: '3 years ago',
    },
    {
      id: 'WZGYdTfGNgQ',
      title: 'Planet Vegeta (DBZ) Mockup After Effects',
      thumbnailUrl:
        'https://i.ytimg.com/vi/WZGYdTfGNgQ/hqdefault.jpg',
      views: '888',
      published: '3 years ago',
    },
    {
      id: 'OwWkHsjrHbk',
      title: 'Planet Earth (After Effects) (VideoCopilot) (Orb Plugin)',
      thumbnailUrl:
        'https://i.ytimg.com/vi/OwWkHsjrHbk/hqdefault.jpg',
      views: '126',
      published: '3 years ago',
    },
    {
      id: '-A7nD_mlL9w',
      title: 'Motion Tracked Demonic Face Test (After Effects)',
      thumbnailUrl:
        'https://i.ytimg.com/vi/-A7nD_mlL9w/hqdefault.jpg',
      views: '56',
      published: '3 years ago',
    }
  ],
};

export default function SocialHub() {
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [reposLoading, setReposLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          'https://api.github.com/users/ant3869/repos?per_page=100'
        );
        if (!res.ok) return;
        const data: GitHubApiRepo[] = await res.json();
        const repos = data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6)
          .map((repo) => ({
            id: repo.id,
            title: repo.name,
            description: repo.description ?? '',
            url: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language ?? 'N/A',
          }));
        setGithubRepos(repos);
      } catch (err: unknown) {
        console.error('Failed to fetch GitHub repositories:', err);
      } finally {
        setReposLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="social" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-14">
          <p className="kicker mb-4">Online</p>
          <h2 className="section-heading">Social Media Hub</h2>
        </Reveal>

        <Tabs defaultValue="github" className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="rounded-full border border-white/10 bg-white/5 p-1.5 h-auto flex-wrap justify-center">
              <TabsTrigger value="github" className="flex items-center rounded-full data-[state=active]:bg-white/10">
                <Github className="h-4 w-4 mr-2" /> GitHub
              </TabsTrigger>
              <TabsTrigger value="deviantArt" className="flex items-center rounded-full data-[state=active]:bg-white/10">
                <Brush className="h-4 w-4 mr-2" /> DeviantArt
              </TabsTrigger>
              <TabsTrigger value="youtube" className="flex items-center rounded-full data-[state=active]:bg-white/10">
                <Youtube className="h-4 w-4 mr-2" /> YouTube
              </TabsTrigger>
              <TabsTrigger value="tiktok" className="flex items-center rounded-full data-[state=active]:bg-white/10">
                <FaTiktok className="h-3.5 w-3.5 mr-2" /> TikTok
              </TabsTrigger>
            </TabsList>
          </div>

          {/* GitHub Tab */}
          <TabsContent value="github" className="space-y-6 min-h-[420px]">
            <p className="text-center text-muted-foreground mb-6">
              Check out my top repositories on GitHub where I share developer
              tools, automation scripts, and more.
            </p>
            {!reposLoading && githubRepos.length === 0 && (
              <p className="text-center text-sm text-muted-foreground">
                Couldn't load repositories right now — browse them directly on{' '}
                <a
                  href="https://github.com/ant3869"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  github.com/ant3869
                </a>
                .
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reposLoading &&
                githubRepos.length === 0 &&
                Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-40 rounded-xl border border-white/10 bg-white/[0.02] animate-pulse"
                  />
                ))}
              {githubRepos.map((repo) => (
                <Card key={repo.id} className="spotlight-card card-hover border-white/10 bg-white/[0.02]">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <Github className="h-5 w-5 mr-2 text-primary" />
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:underline"
                        >
                          {repo.title}
                        </a>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span className="flex items-center mr-2">
                          ⭐ {repo.stars}
                        </span>
                        <span className="flex items-center">
                          🍴 {repo.forks}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {repo.description}
                    </p>
                    <div className="flex items-center text-xs">
                      <FileCode className="h-3 w-3 mr-1" />
                      <span className="text-primary">{repo.language}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* DeviantArt Tab */}
          <TabsContent value="deviantArt" className="min-h-[420px]">
            <p className="text-center text-muted-foreground mb-6">
              Creative work and UI design concepts on DeviantArt
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialData.deviantArt.map((art) => (
                <Card
                  key={art.id}
                  className="spotlight-card overflow-hidden card-hover border-white/10 bg-white/[0.02]"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={art.imageUrl}
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs flex items-center">
                      <span className="mr-1">❤️</span>
                      <span>{art.likes}</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-medium">{art.title}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* YouTube Tab */}
          <TabsContent value="youtube" className="min-h-[420px]">
            <p className="text-center text-muted-foreground mb-6">
              Visual effects and creative render showcases on YouTube
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialData.youtube.map((video) => (
                <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  key={video.id}
                  className="spotlight-card overflow-hidden card-hover border-white/10 bg-white/[0.02]"
                >
                  <div className="aspect-video relative">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <Youtube className="h-6 w-6 text-red-500" />
                      </span>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded text-xs text-white">
                      {video.views} views
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-medium line-clamp-2">{video.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{video.published}</p>
                  </CardContent>
                </Card>
              </a>
              ))}
            </div>
          </TabsContent>

          {/* TikTok Tab */}
          <TabsContent value="tiktok" className="min-h-[420px]">
            <p className="text-center text-muted-foreground mb-6">
              Prop builds and effects in motion on TikTok
            </p>
            <TikTokEmbed />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
