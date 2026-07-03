import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const roles = [
  'Software Developer',
  'Tools & Automation Specialist',
  'Frontend Engineer',
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
      {/* Subtle radial glow + dot grid behind the headline */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 40%, rgba(59, 130, 246, 0.08), transparent 70%)',
        }}
      />
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-screen flex flex-col items-center justify-center text-center py-28">
          <div className="space-y-6 max-w-4xl">
            {/* Brand mark as the focal anchor */}
            <div className="flex justify-center">
              <img
                src="/images/logo-mark.png"
                alt="Nexco Media"
                className="h-24 md:h-28 w-auto drop-shadow-[0_0_35px_rgba(96,165,250,0.3)]"
              />
            </div>

            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground">
                <span className="pulse-dot" />
                Available for opportunities
              </span>
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
