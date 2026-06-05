import '@/styles/global.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { queryClient } from '@/config/queryClient';
import { store } from '@/store/index';

export default function RootLayout(): React.ReactElement {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Slot />
        </QueryClientProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
