import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import SocialHub from '@/components/sections/SocialHub';
import Contact from '@/components/sections/Contact';
import TechNewsFeed from '@/components/dashboard/TechNewsFeed';
import SpotlightEffect from '@/components/ui/SpotlightEffect';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Clears the fixed navbar on pages that don't start with a full-screen hero
function Page({ children }: { children: React.ReactNode }) {
  return <div className="pt-16">{children}</div>;
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="kicker mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 text-muted-foreground">
        That page doesn't exist — but the rest of the site does.
      </p>
      <Button
        asChild
        className="mt-8 rounded-full bg-white text-black hover:bg-white/90"
      >
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-background font-sans antialiased">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
          >
            Skip to content
          </a>
          <SpotlightEffect />
          <Navbar />
          <TechNewsFeed />
          <main id="main" className="relative">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route
                path="/about"
                element={
                  <Page>
                    <About />
                    <Skills />
                  </Page>
                }
              />
              <Route
                path="/projects"
                element={
                  <Page>
                    <Projects />
                  </Page>
                }
              />
              <Route
                path="/social"
                element={
                  <Page>
                    <SocialHub />
                  </Page>
                }
              />
              <Route
                path="/contact"
                element={
                  <Page>
                    <Contact />
                  </Page>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
