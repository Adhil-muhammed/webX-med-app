import { Navigate, useLocation } from "react-router-dom";
import { PATHS } from "./paths";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * Authentication guard component
 * Redirects to login if user is not authenticated
 * Preserves the intended destination for post-login redirect
 */
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();

  // TODO: Replace with actual authentication logic
  // This should check your auth state (context, Redux, etc.)
  const isAuthenticated = checkAuth();

  if (!isAuthenticated) {
    // Redirect to login, saving the current location for redirect after login
    return <Navigate to={PATHS.LOGIN} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

/**
 * Helper function to check authentication status
 * Replace this with your actual auth logic
 */
const checkAuth = (): boolean => {
  // Example: Check if auth token exists in localStorage
  // return !!localStorage.getItem("authToken");
  
  // Example: Check auth context
  // const { isAuthenticated } = useAuth();
  // return isAuthenticated;
  
  // For now, return true to allow access (remove in production)
  return true;
};
