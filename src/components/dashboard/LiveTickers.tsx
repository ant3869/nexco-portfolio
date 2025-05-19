import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

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

  // Fetch crypto prices from CoinGecko API
  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24h_change=true'
        );
        const data = await response.json();
        
        setTickers([
          {
            symbol: 'BTC',
            price: data.bitcoin.usd,
            change: data.bitcoin.usd_24h_change
          },
          {
            symbol: 'ETH',
            price: data.ethereum.usd,
            change: data.ethereum.usd_24h_change
          }
        ]);
      } catch (error) {
        console.error('Error fetching crypto prices:', error);
      }
    };

    fetchCryptoPrices();
    const interval = setInterval(fetchCryptoPrices, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=imperial`
        );
        const data = await response.json();
        setWeather({
          temp: Math.round(data.main.temp),
          description: data.weather[0].main
        });
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 300000); // Update every 5 minutes
    return () => clearInterval(interval);
  }, []);

  // Fetch last commit and uptime
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/ant3869/portfolio/commits'
        );
        const data = await response.json();
        setLastCommit(data[0].commit.message);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    // Simulate uptime calculation
    setUptime('99.98% over 30 days');
    
    fetchGitHubData();
  }, []);

  return (
    <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-4">
      <div className="flex flex-wrap items-center gap-6 text-sm">
        {tickers.map((ticker) => (
          <div key={ticker.symbol} className="flex items-center gap-2">
            <span className="font-semibold">{ticker.symbol}:</span>
            <span>${ticker.price.toLocaleString()}</span>
            <span
              className={`flex items-center ${
                ticker.change >= 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {ticker.change >= 0 ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              {Math.abs(ticker.change).toFixed(2)}%
            </span>
          </div>
        ))}

        {weather && (
          <div className="flex items-center gap-2">
            <span>NYC:</span>
            <span>{weather.temp}°F</span>
            <span>{weather.description}</span>
          </div>
        )}

        <div className="flex items-center gap-2">
          <span>Latest Commit:</span>
          <span className="text-primary">{lastCommit}</span>
        </div>

        <div className="flex items-center gap-2">
          <span>Uptime:</span>
          <span className="text-primary">{uptime}</span>
        </div>
      </div>
    </div>
  );
}