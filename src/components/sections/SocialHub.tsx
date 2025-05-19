import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Github,
  Youtube,
  FileCode,
  Brush,
  MessageCircle,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample data for social feeds
const socialData = {
  github: [
    {
      id: 1,
      title: 'developer-toolkit',
      description:
        'A comprehensive suite of developer tools that streamlines common tasks',
      url: 'https://github.com/example/developer-toolkit',
      stars: 235,
      forks: 45,
      language: 'TypeScript',
    },
    {
      id: 2,
      title: 'build-optimizer',
      description:
        'An intelligent build system for C++ projects that reduces compilation time',
      url: 'https://github.com/example/build-optimizer',
      stars: 187,
      forks: 32,
      language: 'C++',
    },
    {
      id: 3,
      title: 'code-analyzer',
      description:
        'Static analysis tool that identifies code quality issues and security vulnerabilities',
      url: 'https://github.com/example/code-analyzer',
      stars: 156,
      forks: 28,
      language: 'Python',
    },
  ],
  deviantArt: [
    {
      id: 1,
      title: 'Earth Render',
      imageUrl:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a4f4e45e-85b0-4cc4-bea3-2c7667ed9797/ddyyss0-2189da69-c02b-417a-8b1d-c5c5c86487b4.png/v1/fill/w_1192,h_670,q_70,strp/earth_render__nexco_media__by_ant3869_ddyyss0-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYTRmNGU0NWUtODViMC00Y2M0LWJlYTMtMmM3NjY3ZWQ5Nzk3XC9kZHl5c3MwLTIxODlkYTY5LWMwMmItNDE3YS04YjFkLWM1YzVjODY0ODdiNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.a5dpWoYw6fc5sJczyrX0VG6JZnRP9P7NFUkz_2sS_Wc',
      likes: 124,
    },
    {
      id: 2,
      title: 'Purple Nexco Layout',
      imageUrl:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a4f4e45e-85b0-4cc4-bea3-2c7667ed9797/ddz7e9y-fd63ea10-f7e8-4ace-9427-72e20e87a1fd.png/v1/fill/w_1192,h_670,q_70,strp/purple_nexco_layout_by_ant3869_ddz7e9y-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYTRmNGU0NWUtODViMC00Y2M0LWJlYTMtMmM3NjY3ZWQ5Nzk3XC9kZHo3ZTl5LWZkNjNlYTEwLWY3ZTgtNGFjZS05NDI3LTcyZTIwZTg3YTFmZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Pi-kJqSSEpeWUbBoVAurrGFZI2Z2Q1sYiYKQ2mQFeeU',
      likes: 83,
    },
    {
      id: 3,
      title: 'Game Title',
      imageUrl:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a4f4e45e-85b0-4cc4-bea3-2c7667ed9797/ddkzn2m-8a4ee20f-f20e-4bf5-86b0-72dab3300ab1.png/v1/fill/w_1862,h_429/game_title_by_ant3869_ddkzn2m-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E0ZjRlNDVlLTg1YjAtNGNjNC1iZWEzLTJjNzY2N2VkOTc5N1wvZGRrem4ybS04YTRlZTIwZi1mMjBlLTRiZjUtODZiMC03MmRhYjMzMDBhYjEucG5nIiwiaGVpZ2h0IjoiPD00NDMiLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9hNGY0ZTQ1ZS04NWIwLTRjYzQtYmVhMy0yYzc2NjdlZDk3OTdcL2FudDM4NjktNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.bYslgqfuSznYy8FOjCms_7SV7ZOjzHlzj3prRNdV14Y',
      likes: 66,
    },
  ],
  youtube: [
    {
      id: 'tJ2tKEvZGIw',
      title: 'Ghostbusters Proton Beam After Effects',
      thumbnailUrl:
        'https://i9.ytimg.com/vi/tJ2tKEvZGIw/maxresdefault.jpg?v=6158e911&sqp=COiJqsEG&rs=AOn4CLC2lxWLdVGj81liePUA5DsA8CpInA',
      views: '5.2K',
      published: '3 years ago',
    },
    {
      id: 'WZGYdTfGNgQ',
      title: 'Planet Vegeta (DBZ) Mockup After Effects',
      thumbnailUrl:
        'https://i9.ytimg.com/vi_webp/WZGYdTfGNgQ/maxresdefault.webp?v=616cd813&sqp=COiJqsEG&rs=AOn4CLD__rcIbkkheaivM4LrUbckJWyIqA',
      views: '888',
      published: '3 years ago',
    },
    {
      id: 'OwWkHsjrHbk',
      title: 'Planet Earth (After Effects) (VideoCopilot) (Orb Plugin)',
      thumbnailUrl:
        'https://i9.ytimg.com/vi_webp/OwWkHsjrHbk/maxresdefault.webp?v=61903bad&sqp=COiJqsEG&rs=AOn4CLDQ6s4lkmb0Hb79xojzJCCUtex38w',
      views: '126',
      published: '3 years ago',
    },
    {
      id: '-A7nD_mlL9w',
      title: 'Motion Tracked Demonic Face Test (After Effects)',
      thumbnailUrl:
        'https://i9.ytimg.com/vi_webp/-A7nD_mlL9w/maxresdefault.webp?v=615baad9&sqp=CLyHqsEG&rs=AOn4CLA_17zdiDen8dWYv8JeerNq202mwg',
      views: '56',
      published: '3 years ago',
    }
  ],
  reddit: [
    {
      id: 1,
      title: 'Created a tool that automates repetitive development tasks',
      subreddit: 'r/programming',
      upvotes: 542,
      comments: 87,
    },
    {
      id: 2,
      title: 'What are your favorite VSCode extensions for C++ development?',
      subreddit: 'r/cpp',
      upvotes: 324,
      comments: 156,
    },
    {
      id: 3,
      title:
        'I built a code quality tool that helped our team reduce bugs by 40%',
      subreddit: 'r/webdev',
      upvotes: 456,
      comments: 92,
    },
  ],
};

export default function SocialHub() {
  return (
    <section id="social" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12">Social Media Hub</h2>

        <Tabs defaultValue="github" className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="github" className="flex items-center">
                <Github className="h-4 w-4 mr-2" /> GitHub
              </TabsTrigger>
              <TabsTrigger value="deviantArt" className="flex items-center">
                <Brush className="h-4 w-4 mr-2" /> DeviantArt
              </TabsTrigger>
              <TabsTrigger value="youtube" className="flex items-center">
                <Youtube className="h-4 w-4 mr-2" /> YouTube
              </TabsTrigger>
              <TabsTrigger value="reddit" className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2" /> Reddit
              </TabsTrigger>
            </TabsList>
          </div>

          {/* GitHub Tab */}
          <TabsContent value="github" className="space-y-6">
            <p className="text-center text-muted-foreground mb-6">
              Check out my top repositories on GitHub where I share developer
              tools, automation scripts, and more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialData.github.map((repo) => (
                <Card key={repo.id} className="card-hover border-primary/10">
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
          <TabsContent value="deviantArt">
            <p className="text-center text-muted-foreground mb-6">
              Creative work and UI design concepts on DeviantArt
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialData.deviantArt.map((art) => (
                <Card
                  key={art.id}
                  className="overflow-hidden card-hover border-primary/10"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
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
          <TabsContent value="youtube">
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
                  className="overflow-hidden card-hover border-primary/10"
                >
                  <div className="aspect-video relative">
                    <img
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

          {/* Reddit Tab */}
          <TabsContent value="reddit">
            <p className="text-center text-muted-foreground mb-6">
              Random on Reddit
            </p>
            <div className="space-y-4">
              {socialData.reddit.map((post) => (
                <Card key={post.id} className="card-hover border-primary/10">
                  <CardContent className="p-4">
                    <div className="flex items-start">
                      <div className="mr-4 flex flex-col items-center">
                        <span className="font-bold text-lg text-primary">
                          {post.upvotes}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          upvotes
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium">{post.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {post.subreddit}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {post.comments} comments
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
