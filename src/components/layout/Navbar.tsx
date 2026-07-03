import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/social', label: 'Social' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? 'active-nav-link' : ''}`;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-lg bg-black/70 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 font-bold text-lg tracking-tight"
          onClick={closeMenu}
        >
          <img
            src="/images/logo-mark.png"
            alt="Nexco Media logo"
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1.5 py-1.5">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Resume and Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className="hidden md:inline-flex rounded-full border-white/15 bg-transparent hover:bg-white/10"
          >
            <a href="/docs/Anthony_Clark_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-white/10 text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="/docs/Anthony_Clark_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={closeMenu}
            >
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
