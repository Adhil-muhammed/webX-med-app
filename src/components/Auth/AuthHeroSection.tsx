import { Text, View } from 'react-native';

interface AuthHeroSectionProps {
  title: string;
  subtitle: string;
}

export const AuthHeroSection = ({
  title,
  subtitle,
}: AuthHeroSectionProps): React.ReactElement => (
  <View className="mb-10 items-center">
    <Text
      className="text-center text-[32px] font-bold leading-10 text-foreground"
      accessibilityRole="header"
    >
      {title}
    </Text>
    <Text className="mt-2 text-center text-sm leading-5 text-muted">{subtitle}</Text>
  </View>
);
