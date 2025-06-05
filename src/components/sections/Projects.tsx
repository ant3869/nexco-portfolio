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
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Project data
const projects = [
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
    id: 'proton-pack',
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

// Filter projects by type
const featuredProjects = projects.filter((p) => p.type === 'featured');
const propProjects = projects.filter((p) => p.type === 'prop');
const uiProjects = projects.filter((p) => p.type === 'ui');
const autoProjects = projects.filter((p) => p.type === 'auto');
const arduinoProjects = projects.filter((p) => p.type === 'arduino');
const otherProjects = projects.filter((p) => p.type === 'other');

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12">Projects</h2>

        <Tabs defaultValue="featured" className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="prop">Prop Replicas</TabsTrigger>
              <TabsTrigger value="ui">UI</TabsTrigger>
              <TabsTrigger value="auto">Automation</TabsTrigger>
              <TabsTrigger value="arduino">Arduino</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </div>

          {/* Featured Projects Tab */}
          <TabsContent value="featured" className="space-y-12">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border-primary/10 shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 md:p-8 flex flex-col">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <div className="flex flex-wrap gap-2 my-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {project.metrics && (
                      <div className="bg-primary/5 rounded-lg p-3 my-2 text-sm">
                        <strong>Impact:</strong> {project.metrics}
                      </div>
                    )}

                    <CardFooter className="p-0 mt-auto pt-4 flex gap-3">
                      <Button asChild size="sm">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                        className="rounded-l-none md:rounded-l-lg h-full w-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Prop Projects Tab */}
          <TabsContent value="prop">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {propProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden card-hover border-primary/10"
                >
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
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between pt-0">
                    <Button asChild variant="ghost" size="sm">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Link2 className="h-4 w-4 mr-2" />
                        Video
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="sm">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="sm">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GalleryHorizontalIcon className="h-4 w-4 mr-2" />
                        Gallery
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* UI Projects Tab */}
          <TabsContent value="ui" className="space-y-12">
            {uiProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border-primary/10 shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 md:p-8 flex flex-col">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <div className="flex flex-wrap gap-2 my-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {project.metrics && (
                      <div className="bg-primary/5 rounded-lg p-3 my-2 text-sm">
                        <strong>Impact:</strong> {project.metrics}
                      </div>
                    )}

                    <CardFooter className="p-0 mt-auto pt-4 flex gap-3">
                      <Button asChild size="sm">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                        className="rounded-l-none md:rounded-l-lg h-full w-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

            {/* Automation Projects Tab */}
            <TabsContent value="auto" className="space-y-12">
            {autoProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border-primary/10 shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 md:p-8 flex flex-col">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <div className="flex flex-wrap gap-2 my-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {project.metrics && (
                      <div className="bg-primary/5 rounded-lg p-3 my-2 text-sm">
                        <strong>Impact:</strong> {project.metrics}
                      </div>
                    )}

                    <CardFooter className="p-0 mt-auto pt-4 flex gap-3">
                      <Button asChild size="sm">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                        className="rounded-l-none md:rounded-l-lg h-full w-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

            {/* Arduino Projects Tab */}
            <TabsContent value="arduino" className="space-y-12">
            {arduinoProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border-primary/10 shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 md:p-8 flex flex-col">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <div className="flex flex-wrap gap-2 my-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {project.metrics && (
                      <div className="bg-primary/5 rounded-lg p-3 my-2 text-sm">
                        <strong>Impact:</strong> {project.metrics}
                      </div>
                    )}

                    <CardFooter className="p-0 mt-auto pt-4 flex gap-3">
                      <Button asChild size="sm">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                        className="rounded-l-none md:rounded-l-lg h-full w-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

            {/* Other Projects Tab */}
            <TabsContent value="other" className="space-y-12">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border-primary/10 shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 md:p-8 flex flex-col">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <div className="flex flex-wrap gap-2 my-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {project.metrics && (
                      <div className="bg-primary/5 rounded-lg p-3 my-2 text-sm">
                        <strong>Impact:</strong> {project.metrics}
                      </div>
                    )}

                    <CardFooter className="p-0 mt-auto pt-4 flex gap-3">
                      <Button asChild size="sm">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                        className="rounded-l-none md:rounded-l-lg h-full w-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
}
