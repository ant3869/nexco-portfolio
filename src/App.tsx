import { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
// import DevTools from '@/components/sections/DevTools';
import SocialHub from '@/components/sections/SocialHub';
import Contact from '@/components/sections/Contact';
// import Dashboard from '@/components/dashboard/Dashboard';
import LoadingScreen from '@/components/ui/LoadingScreen';
// import LiveTickers from '@/components/dashboard/LiveTickers';
import TechNewsFeed from '@/components/dashboard/TechNewsFeed';
// import GitHubActivity from '@/components/dashboard/GitHubActivity';
// import SystemStatus from '@/components/dashboard/SystemStatus';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <TechNewsFeed />
        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          {/* <DevTools /> */}
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