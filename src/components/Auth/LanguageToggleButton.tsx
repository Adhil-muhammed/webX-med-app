import { Pressable, Text, View } from 'react-native';

interface LanguageToggleButtonProps {
  label: string;
  accessibilityLabel: string;
  onPress: () => void;
}

export const LanguageToggleButton = ({
  label,
  accessibilityLabel,
  onPress,
}: LanguageToggleButtonProps): React.ReactElement => (
  <View className="h-touch flex-row items-center justify-end border-b border-border px-5">
    <Pressable
      className="flex-row items-center gap-2 rounded-full border border-border px-3 py-1.5 active:opacity-80"
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      <Text className="text-base text-muted">🌐</Text>
      <Text className="text-xs font-medium text-on-surface-variant">{label}</Text>
    </Pressable>
  </View>
);
