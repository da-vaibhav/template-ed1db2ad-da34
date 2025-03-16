import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { BrowserRouter } from "react-router";
import { TestPage } from './test';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <TestPage />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;
