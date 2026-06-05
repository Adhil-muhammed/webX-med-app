import { useCallback } from 'react';

import { translate, type Locale, type TranslationKey } from '@/i18n/index';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleLocale } from '@/store/slices/authSlice';

export const useLocale = () => {
  const locale = useAppSelector((state) => state.auth.locale);
  const dispatch = useAppDispatch();

  const t = useCallback(
    (key: TranslationKey): string => translate(locale, key),
    [locale],
  );

  const switchLocale = useCallback((): void => {
    dispatch(toggleLocale());
  }, [dispatch]);

  return { locale: locale as Locale, t, switchLocale };
};
