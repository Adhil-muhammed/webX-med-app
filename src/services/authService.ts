/** Auth API — wire to backend via apiClient when endpoints are available */
export const AuthService = {
  sendVerificationCode: async (_email: string): Promise<void> => {
    // Placeholder for POST /auth/verify-email
  },
  verifyOtp: async (_email: string, _code: string): Promise<void> => {
    // Placeholder for POST /auth/verify-otp
  },
};
