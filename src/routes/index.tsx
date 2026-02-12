import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { PATHS } from "./paths";
import { ProtectedRoute } from "./ProtectedRoute";
import { MainLayout } from "@/layouts/MainLayout";

/**
 * Lazy-loaded page components with code splitting
 * Each page is loaded only when needed, improving initial load time
 */
const HomePage = lazy(() =>
  import("@/pages/Home").then((module) => ({ default: module.HomePage }))
);

const SearchResultsPage = lazy(() =>
  import("@/pages/SearchResults").then((module) => ({
    default: module.SearchResultsPage,
  }))
);

const DoctorProfile = lazy(() =>
  import("@/pages/DoctorProfile").then((module) => ({
    default: module.DoctorProfile,
  }))
);

const AppointmentsPage = lazy(() =>
  import("@/components/AppointmentsPage").then((module) => ({
    default: module.AppointmentsPage,
  }))
);

const RecordsPage = lazy(() =>
  import("@/components/RecordsPage").then((module) => ({
    default: module.RecordsPage,
  }))
);

const ProfilePage = lazy(() =>
  // import("@/components/ProfilePage").then((module) => ({
  //   default: module.ProfilePage,
  // }))
  import("@/pages/DoctorProfile").then((module) => ({
    default: module.DoctorProfile,
  }))
);

/**
 * Simple 404 Not Found page
 * TODO: Create a proper error page component
 */
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background-light dark:bg-background-dark p-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-text-primary-light dark:text-text-primary-dark mb-8">
        Page Not Found
      </p>
      <a
        href={PATHS.HOME}
        className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        Go Home
      </a>
    </div>
  );
};

/**
 * Main router configuration using createBrowserRouter
 * Centralized routing with type-safe paths and code splitting
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // Public routes
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATHS.SEARCH,
        element: <SearchResultsPage />,
      },
      {
        path: PATHS.DOCTOR_PROFILE,
        element: <DoctorProfile />,
      },

      // Protected routes (require authentication)
      {
        path: PATHS.APPOINTMENTS,
        element: (
          <ProtectedRoute>
            <AppointmentsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: PATHS.RECORDS,
        element: (
          <ProtectedRoute>
            <RecordsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: PATHS.PROFILE,
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },

      // Auth routes (TODO: Create these pages)
      // {
      //   path: PATHS.LOGIN,
      //   element: <LoginPage />,
      // },
      // {
      //   path: PATHS.REGISTER,
      //   element: <RegisterPage />,
      // },

      // Error routes
      {
        path: PATHS.NOT_FOUND,
        element: <NotFoundPage />,
      },
      {
        path: "*",
        element: <Navigate to={PATHS.NOT_FOUND} replace />,
      },
    ],
  },
]);
