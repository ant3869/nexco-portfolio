import { ThemeProvider } from '@/components/theme-provider';
import Dashboard from '@/components/dashboard/Dashboard';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="dashboard-theme">
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;