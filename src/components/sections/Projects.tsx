import { ExternalLink, GalleryHorizontalIcon, Github, Link2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoUrl: string;
  repoUrl: string;
  metrics?: string;
  type: string;
}

// Project data
const projects: Project[] = [
  {
    id: 'nexta',
    title: 'Nexta-UI',
    description:
      'Nexta-UI is a modern UI component library built with React and TypeScript. It provides a set of reusable and customizable UI components designed to help developers build beautiful and responsive web applications efficiently.',
    image: 'images/nexta.png',
    tech: ['Typescript', 'React', 'Node.js', 'Tailwind', 'Theme', 'Frontend', 'Component Library'],
    demoUrl: 'https://nexta.anthon3869.workers.dev/',
    repoUrl: 'https://github.com/ant3869/Nexta-UI/tree/main',
    metrics:
      'Professional and elegant for a more modern componeent look and design.',
    type: 'featured',
  },
  {
    id: 'proton-pack',
    title: 'Proton Pack Replica',
    description:
      'It\'s a proton pack.',
    image: 'images/pack3.jpg',
    tech: ['Prop Replica', 'Arduino', 'Electronics'],
    demoUrl: 'https://example.com/analyzer',
    repoUrl: 'https://github.com/example/code-analyzer',
    metrics:
      'Full working lights, vibration motors, smoke machine, video game modes, sound tracks, overheating and overload functions.',
    type: 'featured',
  },
  {
    id: 'llm-frontend',
    title: 'LLM Manager (frontend)',
    description:
      'A custom built all-in-one for your open source LLM needs. Chat, tune, benchmark -- all in a easy to use framework.',
    image: 'images/llm1.png',
    tech: ['Typescript', 'Python', 'Vite', 'TailwindCSS', "React", "Node.Js"],
    demoUrl: 'https://example.com/build-system',
    repoUrl: 'https://github.com/example/build-system',
    metrics:
      'Ease-of-use and approachability at a higher level than any other open source solution of its kind.',
    type: 'featured',
  },
  {
    id: 'dev-dashboard',
    title: 'Technician Metrics Dashboard',
    description:
      'CSV powered analytics dashboard for monitoring developer productivity, build health, and project progress.',
    image: 'images/dashboard1.png',
    tech: ['React', 'Typescript', 'Node.js', 'Vite', 'TailwindCSS', 'Recharts'],
    demoUrl: 'https://classy-melomakarona-ddc438.netlify.app',
    repoUrl: 'https://github.com/example/dev-dashboard',
    type: 'ui',
  },
  {
    id: 'tailwind-showcase',
    title: 'Tailwind UI Showcase',
    description:
      'Popular Tailwind CSS-based UI libraries with interactive dashboard examples.',
    image: 'images/showcase1.png',
    tech: ['React', 'Typescript', 'Node.js', 'Vite', 'TailwindCSS', 'Recharts'],
    demoUrl: 'https://classy-melomakarona-ddc438.netlify.app',
    repoUrl: 'https://github.com/ant3869/tailwind-ui-showcase/tree/main',
    type: 'ui',
  },
  {
    id: 'proton-pack-2',
    title: 'Proton Pack (Ghostbusters II)',
    description:
      'Proton Pack prop replica from the movie Ghostbusters.',
    image: 'images/pack1.jpg',
    tech: ['Microcontrollers', 'Electronics', '3d Printing'],
    demoUrl: 'https://example.com/auto-docs',
    repoUrl: 'https://github.com/example/auto-docs',
    type: 'prop',
  },
  {
    id: 'pke-meter',
    title: 'PKE Meter Replica with EMF Detection',
    description:
      'P.K.E. Meter replica from the Ghostbusters movies, integrating modern electronics to simulate its behavior based on electromagnetic field (EMF) detection.',
    image: 'images/pke1.png',
    tech: ['Microcontroller', 'C++', 'Python', 'Arduino', 'Prop', '3d Printing'],
    demoUrl:
      'https://www.tiktok.com/@nexcomedia/video/7345535167726947630?is_from_webapp=1&sender_device=pc&web_id=7505664205899761198',
    repoUrl: 'https://github.com/ant3869/PKE-EMF-Meter-Teensy-4.0',
    type: 'prop',
  },
  {
    id: 'ghost-trap',
    title: 'Ghost Trap (Ghostbusters II)',
    description:
    'Ghost Trap prop replica from the movie Ghostbusters.',
    image: 'images/trap1.jpg',
    tech: ['Microcontroller', 'C++', 'Arduino', 'Prop', '3d Printing'],
    demoUrl: 'https://example.com/auto-docs',
    repoUrl: 'https://github.com/example/auto-docs',
    type: 'prop',
  },
];

// Wide card with image beside the details, used for tabs that show few items
function WideProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden border border-white/10 bg-white/[0.02]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 md:p-8 flex flex-col">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl">{project.title}</CardTitle>
            <CardDescription className="text-base mt-2">
              {project.description}
            </CardDescription>
          </CardHeader>

          <div className="flex flex-wrap gap-2 my-4">
            {project.tech.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          {project.metrics && (
            <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-4 my-2 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Impact: </span>
              {project.metrics}
            </div>
          )}

          <CardFooter className="p-0 mt-auto pt-4 flex gap-3">
            <Button
              asChild
              size="sm"
              className="rounded-full bg-white text-black hover:bg-white/90"
            >
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full border-white/15 bg-transparent hover:bg-white/10"
            >
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Source Code
              </a>
            </Button>
          </CardFooter>
        </div>

        <div className="md:order-first md:h-auto">
          <AspectRatio ratio={15 / 13} className="bg-muted">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </Card>
  );
}

// Compact card used in the grid tabs
function GridProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden card-hover border border-white/10 bg-white/[0.02]">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </AspectRatio>

      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="p-6 pt-0">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-0">
        <Button asChild variant="ghost" size="sm">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <Link2 className="h-4 w-4 mr-2" />
            Video
          </a>
        </Button>
        <Button asChild variant="ghost" size="sm">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>
        <Button asChild variant="ghost" size="sm">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <GalleryHorizontalIcon className="h-4 w-4 mr-2" />
            Gallery
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

const tabs = [
  { value: 'featured', label: 'Featured' },
  { value: 'prop', label: 'Prop Replicas' },
  { value: 'ui', label: 'UI' },
  { value: 'auto', label: 'Automation' },
  { value: 'arduino', label: 'Arduino' },
  { value: 'other', label: 'Other' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <p className="kicker mb-4">My Work</p>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on, from developer tools to
            prop replica electronics.
          </p>
        </div>

        <Tabs defaultValue="featured">
          <div className="flex justify-center mb-10">
            <TabsList className="rounded-full border border-white/10 bg-white/5 p-1.5 h-auto flex-wrap justify-center">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-full data-[state=active]:bg-white/10"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {tabs.map((tab) => {
            const tabProjects = projects.filter((p) => p.type === tab.value);
            const useGrid = tab.value === 'prop';
            return (
              <TabsContent key={tab.value} value={tab.value}>
                {tabProjects.length === 0 ? (
                  <p className="text-center text-muted-foreground py-12">
                    More coming soon.
                  </p>
                ) : useGrid ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tabProjects.map((project) => (
                      <GridProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-10">
                    {tabProjects.map((project) => (
                      <WideProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
