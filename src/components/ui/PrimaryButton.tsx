import { Pressable, Text } from 'react-native';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  accessibilityLabel?: string;
  disabled?: boolean;
}

export const PrimaryButton = ({
  label,
  onPress,
  accessibilityLabel,
  disabled = false,
}: PrimaryButtonProps): React.ReactElement => (
  <Pressable
    className={`h-touch items-center justify-center rounded-lg bg-primary active:opacity-90 ${disabled ? 'opacity-50' : ''}`}
    onPress={onPress}
    disabled={disabled}
    accessibilityRole="button"
    accessibilityLabel={accessibilityLabel ?? label}
  >
    <Text className="text-sm font-semibold text-primary-foreground">{label}</Text>
  </Pressable>
);
