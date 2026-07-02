import { Github, Instagram, Linkedin } from 'lucide-react';
import { FaReddit } from 'react-icons/fa';

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const socials = [
  {
    href: 'https://github.com/ant3869',
    label: 'GitHub',
    icon: <Github size={18} />,
  },
  {
    href: 'https://www.reddit.com/user/SuperHands3869/',
    label: 'Reddit',
    icon: <FaReddit size={18} />,
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: <Linkedin size={18} />,
  },
  {
    href: 'https://www.instagram.com/nexcomedia/',
    label: 'Instagram',
    icon: <Instagram size={18} />,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 py-14 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Anthony "Ant" Clark</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Software developer. Tools & automation builder. Bentonville, AR.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-white/25 hover:text-foreground"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-5">
              Built with React, TypeScript, and TailwindCSS
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Anthony Clark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
