import { Text, TextInput, View } from 'react-native';

import { colors } from '@/styles/tokens';

interface LabeledTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  accessibilityLabel?: string;
  keyboardType?: 'default' | 'email-address';
  autoComplete?: 'email' | 'off';
  textContentType?: 'emailAddress' | 'none';
  leadingIcon?: string;
}

export const LabeledTextInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  accessibilityLabel,
  keyboardType = 'default',
  autoComplete = 'off',
  textContentType = 'none',
  leadingIcon,
}: LabeledTextInputProps): React.ReactElement => (
  <View className="mb-6">
    <Text className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted">
      {label}
    </Text>
    <View className="relative">
      {leadingIcon ? (
        <Text className="absolute left-3 top-[14px] z-10 text-muted">{leadingIcon}</Text>
      ) : null}
      <TextInput
        className={`h-touch rounded-lg border border-border bg-surface pr-4 text-base text-foreground ${leadingIcon ? 'pl-10' : 'pl-4'}`}
        placeholder={placeholder}
        placeholderTextColor={colors.mutedVariant}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize="none"
        autoComplete={autoComplete}
        textContentType={textContentType}
        accessibilityLabel={accessibilityLabel ?? label}
      />
    </View>
  </View>
);
