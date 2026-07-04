import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const roles = [
  'Software Developer',
  'Internal Tools Builder',
  'Applied GenAI Automation',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: number;

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeout = window.setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
      } else {
        setIsTyping(false);
        timeout = window.setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = window.setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        }, 50);
      } else {
        setIsTyping(true);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Aurora blobs + dot grid behind the headline */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="aurora-blob"
          style={{
            top: '8%',
            left: '18%',
            width: '34rem',
            height: '22rem',
            background: 'radial-gradient(circle, rgba(59,130,246,0.5), transparent 70%)',
          }}
        />
        <div
          className="aurora-blob"
          style={{
            top: '30%',
            right: '12%',
            width: '30rem',
            height: '20rem',
            background: 'radial-gradient(circle, rgba(168,85,247,0.4), transparent 70%)',
            animationDelay: '-6s',
            animationDuration: '22s',
          }}
        />
        <div
          className="aurora-blob"
          style={{
            bottom: '6%',
            left: '38%',
            width: '26rem',
            height: '18rem',
            background: 'radial-gradient(circle, rgba(244,114,182,0.25), transparent 70%)',
            animationDelay: '-12s',
            animationDuration: '26s',
          }}
        />
      </div>
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-screen flex flex-col items-center justify-center text-center py-28">
          <div className="space-y-6 max-w-4xl">
            {/* Centerpiece: emblem with orbit rings and sparkles */}
            <div className="flex justify-center">
              <div className="relative flex h-48 w-48 md:h-60 md:w-60 items-center justify-center">
                {/* Orbit rings (desktop and up) */}
                <div className="hidden md:block" aria-hidden="true">
                  <div className="orbit-ring h-44 w-44" />
                  <div className="orbit-ring h-60 w-60" />
                  <div
                    className="orbit-dot bg-blue-400"
                    style={{ '--orbit-radius': '88px', '--orbit-duration': '14s' } as React.CSSProperties}
                  />
                  <div
                    className="orbit-dot orbit-reverse bg-purple-400"
                    style={{ '--orbit-radius': '120px', '--orbit-duration': '22s', '--orbit-start': '140deg' } as React.CSSProperties}
                  />
                  <div
                    className="orbit-dot bg-pink-400"
                    style={{ '--orbit-radius': '120px', '--orbit-duration': '30s', '--orbit-start': '290deg', height: '6px', width: '6px' } as React.CSSProperties}
                  />
                </div>

                {/* Sparkles */}
                <div aria-hidden="true">
                  <span className="sparkle" style={{ top: '12%', left: '20%', '--twinkle-delay': '0s' } as React.CSSProperties} />
                  <span className="sparkle" style={{ top: '30%', right: '8%', '--twinkle-delay': '0.8s' } as React.CSSProperties} />
                  <span className="sparkle" style={{ bottom: '18%', left: '10%', '--twinkle-delay': '1.6s' } as React.CSSProperties} />
                  <span className="sparkle" style={{ bottom: '8%', right: '22%', '--twinkle-delay': '2.4s' } as React.CSSProperties} />
                  <span className="sparkle" style={{ top: '4%', right: '38%', '--twinkle-delay': '3s' } as React.CSSProperties} />
                </div>

                <img
                  src="/images/logo-mark.png"
                  alt="Nexco Media"
                  className="float-slow relative h-24 md:h-28 w-auto drop-shadow-[0_0_35px_rgba(96,165,250,0.35)]"
                />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.05]">
              Anthony
              <br />
              Clark
            </h1>

            <div className="h-8">
              <h2 className="mono text-xl md:text-2xl text-blue-400">
                <span className="inline-flex items-center">
                  {displayText}
                  <span
                    className={`ml-1 h-6 w-0.5 bg-blue-400 ${
                      isTyping ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-200`}
                  ></span>
                </span>
              </h2>
            </div>

            <p className="mx-auto max-w-2xl text-xl md:text-2xl text-muted-foreground leading-relaxed">
              I build scripts, apps, and tools that make workflows{' '}
              <span className="gradient-accent font-medium">
                faster, cleaner, and less frustrating
              </span>
              .
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto rounded-full bg-white text-black hover:bg-white/90"
              >
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full border-white/15 bg-transparent hover:bg-white/10"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full border-white/15 bg-transparent hover:bg-white/10"
              >
                <a
                  href="https://github.com/ant3869"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
