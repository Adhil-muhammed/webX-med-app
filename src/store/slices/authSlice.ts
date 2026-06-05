import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { getDeviceLocale, type Locale } from '@/i18n/index';
import type { AuthSession, AuthState } from '@/types/auth';

const initialState: AuthState = {
  session: {
    email: null,
    isAuthenticated: false,
  },
  locale: getDeviceLocale(),
  pendingEmail: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<Locale>) => {
      state.locale = action.payload;
    },
    toggleLocale: (state) => {
      state.locale = state.locale === 'en' ? 'ml' : 'en';
    },
    setPendingEmail: (state, action: PayloadAction<string | null>) => {
      state.pendingEmail = action.payload;
    },
    setSession: (state, action: PayloadAction<AuthSession>) => {
      state.session = action.payload;
    },
    clearSession: (state) => {
      state.session = { email: null, isAuthenticated: false };
      state.pendingEmail = null;
    },
  },
});

export const { setLocale, toggleLocale, setPendingEmail, setSession, clearSession } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
