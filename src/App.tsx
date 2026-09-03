import { AppProviders } from '@/presentation/app/providers/AppProviders';
import { AppRouter } from '@/presentation/app/router/AppRouter';

function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}

export default App;
