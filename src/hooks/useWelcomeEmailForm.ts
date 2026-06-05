import { useCallback, useState } from 'react';

import { useAppDispatch } from '@/store/hooks';
import { setPendingEmail } from '@/store/slices/authSlice';

export const useWelcomeEmailForm = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');

  const handleContinue = useCallback((): void => {
    const trimmed = email.trim();
    if (!trimmed) {
      return;
    }
    dispatch(setPendingEmail(trimmed));
    // Wire to AuthService.sendVerificationCode in a follow-up
  }, [dispatch, email]);

  return {
    email,
    setEmail,
    handleContinue,
    isValid: email.trim().length > 0,
  };
};
