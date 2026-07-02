import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
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

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background font-sans antialiased">
        <SpotlightEffect />
        <Navbar />
        <TechNewsFeed />
        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <SocialHub />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;