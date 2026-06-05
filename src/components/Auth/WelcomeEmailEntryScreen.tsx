import { Link } from 'expo-router';
import { Text } from 'react-native';

import { AuthHeroSection } from '@/components/Auth/AuthHeroSection';
import { AuthLegalFooter } from '@/components/Auth/AuthLegalFooter';
import { LanguageToggleButton } from '@/components/Auth/LanguageToggleButton';
import { AuthScreenLayout } from '@/components/ui/AuthScreenLayout';
import { LabeledTextInput } from '@/components/ui/LabeledTextInput';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { ROUTES } from '@/constants/routes';
import { useLocale } from '@/hooks/useLocale';
import { useWelcomeEmailForm } from '@/hooks/useWelcomeEmailForm';

export const WelcomeEmailEntryScreen = (): React.ReactElement => {
  const { t, switchLocale } = useLocale();
  const { email, setEmail, handleContinue, isValid } = useWelcomeEmailForm();

  return (
    <AuthScreenLayout
      header={
        <LanguageToggleButton
          label={t('auth.languageToggle')}
          accessibilityLabel={t('auth.changeLanguage')}
          onPress={switchLocale}
        />
      }
      footer={
        <>
          <PrimaryButton
            label={t('auth.sendVerificationCode')}
            onPress={handleContinue}
            disabled={!isValid}
            accessibilityLabel={t('auth.sendVerificationCode')}
          />
          <AuthLegalFooter
            prefix={t('auth.legalPrefix')}
            termsLabel={t('auth.termsOfService')}
            andLabel={t('auth.legalAnd')}
            privacyLabel={t('auth.privacyPolicy')}
          />
        </>
      }
    >
      <AuthHeroSection
        title={t('auth.heroTitle')}
        subtitle={t('auth.heroSubtitle')}
      />
      <LabeledTextInput
        label={t('auth.emailLabel')}
        value={email}
        onChangeText={setEmail}
        placeholder={t('auth.emailPlaceholder')}
        keyboardType="email-address"
        autoComplete="email"
        textContentType="emailAddress"
        leadingIcon="✉"
      />
    </AuthScreenLayout>
  );
};
