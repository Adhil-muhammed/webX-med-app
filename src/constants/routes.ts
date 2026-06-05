export const ROUTES = {
  HOME: '/',
  AUTH_WELCOME: '/auth/welcome',
  AUTH_OTP: '/auth/otp',
  DEV_HEALTH: '/dev/health',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
