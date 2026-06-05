import { type ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface AuthScreenLayoutProps {
  header?: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}

export const AuthScreenLayout = ({
  header,
  children,
  footer,
}: AuthScreenLayoutProps): React.ReactElement => (
  <SafeAreaView className="flex-1 bg-surface" edges={['top', 'bottom']}>
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {header}
      <ScrollView
        className="flex-1"
        contentContainerClassName="grow justify-center px-5 py-8"
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-full max-w-[400px] self-center">{children}</View>
      </ScrollView>
      <View className="border-t border-border bg-surface px-5 pb-2 pt-4">{footer}</View>
    </KeyboardAvoidingView>
  </SafeAreaView>
);
