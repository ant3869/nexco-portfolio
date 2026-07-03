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
import Reveal from '@/components/ui/Reveal';
import { projects, type Project } from '@/data/projects';

// Project image, or a branded placeholder when no screenshot exists yet
function ProjectImage({ project, ratio }: { project: Project; ratio: number }) {
  return (
    <AspectRatio ratio={ratio} className="bg-muted">
      {project.image ? (
        <img
          loading="lazy"
          decoding="async"
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10">
          <img
            src="/images/logo-mark.png"
            alt=""
            className="h-16 w-auto opacity-50"
            loading="lazy"
          />
          <span className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {project.title}
          </span>
        </div>
      )}
    </AspectRatio>
  );
}

// Wide card with image beside the details, used for tabs that show few items
function WideProjectCard({ project }: { project: Project }) {
  return (
    <Card className="spotlight-card overflow-hidden border border-white/10 bg-white/[0.02]">
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

          {(project.demoUrl || project.repoUrl) && (
            <CardFooter className="p-0 mt-auto pt-4 flex gap-3">
              {project.demoUrl && (
                <Button
                  asChild
                  size="sm"
                  className="rounded-full bg-white text-black hover:bg-white/90"
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {project.demoLabel ?? 'Live Demo'}
                  </a>
                </Button>
              )}
              {project.repoUrl && (
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
              )}
            </CardFooter>
          )}
        </div>

        <div className="md:order-first md:h-auto">
          <ProjectImage project={project} ratio={15 / 13} />
        </div>
      </div>
    </Card>
  );
}

// Compact card used in the grid tabs
function GridProjectCard({ project }: { project: Project }) {
  return (
    <Card className="spotlight-card overflow-hidden card-hover border border-white/10 bg-white/[0.02]">
      <ProjectImage project={project} ratio={16 / 9} />

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

      {(project.demoUrl || project.repoUrl || project.galleryUrl) && (
        <CardFooter className="flex justify-between pt-0">
          {project.demoUrl && (
            <Button asChild variant="ghost" size="sm">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Link2 className="h-4 w-4 mr-2" />
                {project.demoLabel ?? 'Video'}
              </a>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild variant="ghost" size="sm">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {project.galleryUrl && (
            <Button asChild variant="ghost" size="sm">
              <a href={project.galleryUrl} target="_blank" rel="noopener noreferrer">
                <GalleryHorizontalIcon className="h-4 w-4 mr-2" />
                Gallery
              </a>
            </Button>
          )}
        </CardFooter>
      )}
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
        <Reveal className="text-center mb-14">
          <p className="kicker mb-4">My Work</p>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on, from developer tools to
            prop replica electronics.
          </p>
        </Reveal>

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
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="min-h-[600px] focus-visible:outline-none"
              >
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
