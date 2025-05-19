import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Cloud, GitCommit, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TickerData {
  symbol: string;
  price: number;
  change: number;
}

export default function LiveTickers() {
  const [tickers, setTickers] = useState<TickerData[]>([]);
  const [weather, setWeather] = useState<any>(null);
  const [lastCommit, setLastCommit] = useState<string>('');
  const [uptime, setUptime] = useState<string>('');

  // Simulate ticker data
  useEffect(() => {
    const data = [
      { symbol: 'BTC', price: 42946, change: 12.4 },
      { symbol: 'ETH', price: 2347, change: -11.2 },
    ];
    setTickers(data);
    setWeather({ temp: 72, condition: 'Partly Cloudy' });
    setLastCommit('Fixed dashboard layout');
    setUptime('99.98% over 30 days');
  }, []);

  return (
    <div className="relative h-12 overflow-hidden">
      <div className="absolute inset-0 flex items-center animate-marquee">
        <div className="flex items-center space-x-8 whitespace-nowrap px-4">
          {tickers.map((ticker) => (
            <div key={ticker.symbol} className="flex items-center space-x-2">
              <span className="font-medium">{ticker.symbol}:</span>
              <span>${ticker.price.toLocaleString()}</span>
              <span
                className={cn(
                  'flex items-center space-x-1',
                  ticker.change >= 0 ? 'text-green-500' : 'text-red-500'
                )}
              >
                {ticker.change >= 0 ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                <span>{Math.abs(ticker.change)}%</span>
              </span>
            </div>
          ))}

          <div className="flex items-center space-x-2">
            <Cloud className="h-4 w-4" />
            <span>NYC: {weather?.temp}°F</span>
            <span>{weather?.condition}</span>
          </div>

          <div className="flex items-center space-x-2">
            <GitCommit className="h-4 w-4" />
            <span>Latest Commit:</span>
            <span className="text-primary">{lastCommit}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Activity className="h-4 w-4" />
            <span>Uptime:</span>
            <span className="text-primary">{uptime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}