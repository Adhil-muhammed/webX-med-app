import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/styles/tokens';

interface LoadingStateProps {
  message: string;
}

export const LoadingState = ({ message }: LoadingStateProps): React.ReactElement => (
  <SafeAreaView className="flex-1 items-center justify-center bg-background">
    <ActivityIndicator size="large" color={colors.primary} />
    <Text className="mt-4 text-muted">{message}</Text>
  </SafeAreaView>
);
