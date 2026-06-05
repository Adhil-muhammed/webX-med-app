import { Text } from 'react-native';

interface AuthLegalFooterProps {
  prefix: string;
  termsLabel: string;
  andLabel: string;
  privacyLabel: string;
}

export const AuthLegalFooter = ({
  prefix,
  termsLabel,
  andLabel,
  privacyLabel,
}: AuthLegalFooterProps): React.ReactElement => (
  <Text className="mt-4 text-center text-xs leading-4 text-muted">
    {prefix}{' '}
    <Text className="underline text-muted">{termsLabel}</Text> {andLabel}{' '}
    <Text className="underline text-muted">{privacyLabel}</Text>.
  </Text>
);
