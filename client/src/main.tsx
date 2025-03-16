import { ErrorInfo, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from './ErrorFallback.tsx';

if (!import.meta.env.PROD) {
  console.info(`app is running in ${import.meta.env.MODE} mode`);
}

const logError = (error: Error, info: ErrorInfo ) => {
  console.error("Error boundary caught an error:", error, info);
};


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
