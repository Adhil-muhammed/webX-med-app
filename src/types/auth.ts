export interface AuthSession {
  email: string | null;
  isAuthenticated: boolean;
}

export type SupportedLocale = 'en' | 'ml';

export interface AuthState {
  session: AuthSession;
  locale: SupportedLocale;
  pendingEmail: string | null;
}
