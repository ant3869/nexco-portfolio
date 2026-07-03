import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import Reveal from '@/components/ui/Reveal';

// Three highlights shown on the home page as a teaser into the Projects page.
const featured = projects.filter((p) => p.type === 'featured').slice(0, 3);

export default function FeaturedWork() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="kicker mb-4">Selected Work</p>
            <h2 className="section-heading">Things I've built</h2>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 90}>
              <Link
                to="/projects"
                className="spotlight-card card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  {project.image ? (
                    <img
                      loading="lazy"
                      decoding="async"
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10">
                      <img
                        src="/images/logo-mark.png"
                        alt=""
                        className="h-14 w-auto opacity-50"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
