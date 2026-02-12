/**
 * Centralized path constants for type-safe routing
 * Use these constants throughout the app instead of hardcoded strings
 */

export const PATHS = {
  // Public routes
  HOME: "/",
  SEARCH: "/search",
  DOCTOR_PROFILE: "/doctor/:id",
  
  // Protected routes (require authentication)
  APPOINTMENTS: "/appointments",
  RECORDS: "/records",
  PROFILE: "/profile",
  
  // Auth routes
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  
  // Error routes
  NOT_FOUND: "/404",
  UNAUTHORIZED: "/401",
} as const;

/**
 * Helper function to generate dynamic paths
 */
export const generatePath = {
  doctorProfile: (id: string | number) => `/doctor/${id}`,
} as const;

/**
 * Type for all valid paths
 */
export type AppPath = (typeof PATHS)[keyof typeof PATHS];
