import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface SystemMetrics {
  cpu: number;
  ram: number;
  disk: number;
  dbQueries: number;
  dbConnections: number;
  dbSize: string;
  tasks: number;
  pendingTasks: number;
  lastRun: string;
  events: Array<{
    type: 'success' | 'warning' | 'info';
    message: string;
    time: string;
  }>;
}

export default function SystemStatus() {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: 92,
    ram: 78,
    disk: 45,
    dbQueries: 42,
    dbConnections: 18,
    dbSize: '2.4GB',
    tasks: 5,
    pendingTasks: 2,
    lastRun: '2m ago',
    events: [
      {
        type: 'success',
        message: 'Automation job completed successfully',
        time: '2 minutes ago'
      },
      {
        type: 'warning',
        message: 'High CPU usage detected on main server',
        time: '15 minutes ago'
      },
      {
        type: 'success',
        message: 'Database backup completed',
        time: '1 hour ago'
      }
    ]
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        cpu: Math.min(100, Math.max(0, prev.cpu + (Math.random() * 10 - 5))),
        ram: Math.min(100, Math.max(0, prev.ram + (Math.random() * 6 - 3))),
        dbQueries: prev.dbQueries + Math.floor(Math.random() * 3),
        tasks: Math.max(0, prev.tasks + (Math.random() > 0.7 ? 1 : -1)),
        pendingTasks: Math.max(0, prev.pendingTasks + (Math.random() > 0.8 ? 1 : -1))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="border-primary/10">
      <CardContent className="p-4">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-4">Main Server</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>CPU Usage</span>
                  <span>{metrics.cpu.toFixed(1)}%</span>
                </div>
                <Progress value={metrics.cpu} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>RAM Usage</span>
                  <span>{metrics.ram.toFixed(1)}%</span>
                </div>
                <Progress value={metrics.ram} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Disk Usage</span>
                  <span>{metrics.disk}%</span>
                </div>
                <Progress value={metrics.disk} className="h-2" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Database</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground">Active Queries</div>
                <div className="font-medium">{metrics.dbQueries}/s</div>
              </div>
              <div>
                <div className="text-muted-foreground">Connections</div>
                <div className="font-medium">{metrics.dbConnections}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Size</div>
                <div className="font-medium">{metrics.dbSize}</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Recent Events</h3>
            <div className="space-y-3">
              {metrics.events.map((event, index) => (
                <div key={index} className="flex items-start gap-2">
                  {event.type === 'success' && (
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                  )}
                  {event.type === 'warning' && (
                    <AlertCircle className="h-4 w-4 text-yellow-500 mt-1" />
                  )}
                  {event.type === 'info' && (
                    <Clock className="h-4 w-4 text-blue-500 mt-1" />
                  )}
                  <div>
                    <div className="text-sm">{event.message}</div>
                    <div className="text-xs text-muted-foreground">
                      {event.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}