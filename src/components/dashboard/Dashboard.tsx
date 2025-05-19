import LiveTickers from './LiveTickers';
import TechNewsFeed from './TechNewsFeed';
import GitHubActivity from './GitHubActivity';
import SystemStatus from './SystemStatus';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6 space-y-6">
      <LiveTickers />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <TechNewsFeed />
          <GitHubActivity />
        </div>
        <SystemStatus />
      </div>
    </div>
  );
}