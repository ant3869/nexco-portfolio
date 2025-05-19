import LiveTickers from './LiveTickers';
import TechNewsFeed from './TechNewsFeed';
import GitHubActivity from './GitHubActivity';
import SystemStatus from './SystemStatus';

export default function Dashboard() {
  return (
    <section className="py-8 bg-background/50 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 space-y-6">
        <LiveTickers />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <TechNewsFeed />
            <GitHubActivity />
          </div>
          <SystemStatus />
        </div>
      </div>
    </section>
  );
}