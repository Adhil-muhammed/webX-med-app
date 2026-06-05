import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import { HealthService } from '@/services/healthService';
import type { HealthStatus } from '@/types/health';

export const useHealthCheck = (): UseQueryResult<HealthStatus> => {
  return useQuery({
    queryKey: ['health', 'status'],
    queryFn: HealthService.checkStatus,
  });
};
