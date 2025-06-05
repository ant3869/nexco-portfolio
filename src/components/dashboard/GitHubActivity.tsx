import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface GitHubStats {
  repositories: number;
  contributions: number;
  stars: number;
  streak: number;
  recentContributions: number[];
}

export default function GitHubActivity() {
  const [stats, setStats] = useState<GitHubStats>({
    repositories: 42,
    contributions: 1234,
    stars: 87,
    streak: 7,
    recentContributions: Array(30).fill(0)
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch repositories
        const reposResponse = await fetch(
          'https://api.github.com/users/ant3869/repos'
        );
        const repos = await reposResponse.json();

        // Fetch contribution stats (Note: GitHub API doesn't provide this directly)
        // This would typically require a GraphQL query or scraping
        
        setStats(prev => ({
          ...prev,
          repositories: repos.length,
          stars: repos.reduce(
            (acc: number, repo: { stargazers_count: number }) =>
              acc + repo.stargazers_count,
            0
          ),
          recentContributions: Array(30)
            .fill(0)
            .map(() => Math.floor(Math.random() * 10)) // Simulated for demo
        }));
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }
    };

    fetchGitHubStats();
  }, []);

  return (
    <Card className="border-primary/10">
      <CardContent className="p-4">
        <h3 className="font-semibold mb-6">GitHub Activity</h3>
        
        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div>
            <div className="text-2xl font-bold">{stats.repositories}</div>
            <div className="text-sm text-muted-foreground">Repositories</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{stats.contributions}</div>
            <div className="text-sm text-muted-foreground">Contributions</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{stats.stars}</div>
            <div className="text-sm text-muted-foreground">Stars</div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Current Streak</span>
            <span className="text-primary">{stats.streak} days</span>
          </div>
          <Progress value={(stats.streak / 30) * 100} className="h-2" />
          <div className="text-xs text-muted-foreground mt-1">
            {stats.streak} days and counting
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Contribution Activity</h4>
          <div className="grid grid-cols-15 gap-1">
            {stats.recentContributions.map((count, index) => (
              <div
                key={index}
                className={`h-4 rounded-sm ${
                  count === 0
                    ? 'bg-muted'
                    : count < 3
                    ? 'bg-primary/30'
                    : count < 6
                    ? 'bg-primary/60'
                    : 'bg-primary'
                }`}
                title={`${count} contributions`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}