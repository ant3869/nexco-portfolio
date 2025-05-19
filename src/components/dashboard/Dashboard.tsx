import LiveTickers from './LiveTickers';
import TechNewsFeed from './TechNewsFeed';
import GitHubActivity from './GitHubActivity';
import SystemStatus from './SystemStatus';

export default function Dashboard() {
  return (
    <section className="py-4 bg-background/95">
      <div className="container mx-auto px-4 space-y-4">
        {/* Live Tickers */}
        <div className="bg-card/50 backdrop-blur-sm border-b border-primary/10">
          <div className="container mx-auto overflow-hidden">
            <LiveTickers />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Tech News Feed */}
          <div className="lg:col-span-2">
            <TechNewsFeed />
          </div>
          
         {/* Right Column
          <div className="space-y-4">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">

            </div>
            <SystemStatus />
          </div>
        </div>
  */}
        {/* GitHub Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <GitHubActivity />
        </div>
      </div>
  );
}