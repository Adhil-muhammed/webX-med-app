import type { HealthStatus } from '@/types/health';

export const HealthService = {
  checkStatus: async (): Promise<HealthStatus> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  },
};
