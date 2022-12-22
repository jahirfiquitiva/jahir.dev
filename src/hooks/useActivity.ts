import { useRequest } from '@/hooks';
import type { ActivityData, LanyardResponse } from '@/types';
import { transformLanyardData } from '@/utils';

interface UseActivity {
  data?: ActivityData | null;
  loading?: boolean;
  error?: Error | string | null;
}

export const DISCORD_ID = '624058364812591104';
export const useActivity = (): UseActivity => {
  const { data, loading, error } = useRequest<LanyardResponse>(
    `https://api.lanyard.rest/v1/users/${DISCORD_ID}`,
  );
  return {
    data: data?.success ? transformLanyardData(data?.data) : undefined,
    error,
    loading,
  };
};
