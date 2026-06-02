import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      {/* Future global providers like Auth, QueryClient, or Theme will wrap this Slot */}
      <Slot />
    </SafeAreaProvider>
  );
}
