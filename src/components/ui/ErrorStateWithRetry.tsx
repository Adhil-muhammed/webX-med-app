import { useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ErrorStateWithRetryProps {
  message: string;
  retryLabel: string;
  onRetry: () => void;
}

export const ErrorStateWithRetry = ({
  message,
  retryLabel,
  onRetry,
}: ErrorStateWithRetryProps): React.ReactElement => {
  const handleRetry = useCallback((): void => {
    onRetry();
  }, [onRetry]);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background px-5">
      <Text className="mb-4 text-center text-destructive">{message}</Text>
      <Pressable onPress={handleRetry} accessibilityRole="button">
        <Text className="text-primary">{retryLabel}</Text>
      </Pressable>
    </SafeAreaView>
  );
};
