import en from '@/i18n/locales/en.json';
import ml from '@/i18n/locales/ml.json';

export type Locale = 'en' | 'ml';

type AuthKey = `auth.${keyof typeof en.auth & string}`;
type DevKey = `dev.${keyof typeof en.dev & string}`;
type HealthKey = `health.${keyof typeof en.health & string}`;

export type TranslationKey = AuthKey | DevKey | HealthKey;

const translations: Record<Locale, typeof en> = {
  en,
  ml,
};

const getNestedValue = (locale: Locale, key: TranslationKey): string => {
  const [namespace, field] = key.split('.') as [keyof typeof en, string];
  const section = translations[locale][namespace] as Record<string, string>;
  return section[field] ?? (translations.en[namespace] as Record<string, string>)[field] ?? key;
};

export const translate = (locale: Locale, key: TranslationKey): string =>
  getNestedValue(locale, key);

export const getDeviceLocale = (): Locale => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { getLocales } = require('expo-localization') as typeof import('expo-localization');
    const code = getLocales()[0]?.languageCode;
    return code === 'ml' ? 'ml' : 'en';
  } catch {
    return 'en';
  }
};
