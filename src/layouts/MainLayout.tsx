import { Suspense } from "react";
import { Outlet } from "react-router-dom";

/**
 * Main layout component with Suspense boundary
 * Wraps all routes and provides loading fallback for lazy-loaded components
 */
export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Suspense fallback={<LoadingFallback />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

/**
 * Loading fallback component shown while lazy components are loading
 * Customize this to match your design system
 */
const LoadingFallback = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        
        {/* Loading text */}
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
};
