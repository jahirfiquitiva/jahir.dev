import { useRequest } from '@/old/hooks/use-request';
import type { ActivityData, LanyardResponse } from '@/old/types';
import { transformLanyardData } from '@/old/utils/format/format-lanyard';

interface UseActivity {
  data?: ActivityData | null;
  loading?: boolean;
  error?: Error | string | null;
}

const discordUserId = process.env.DISCORD_USER_ID || '';
export const useActivity = (): UseActivity => {
  const { data, loading, error } = useRequest<LanyardResponse>(
    `https://api.lanyard.rest/v1/users/${discordUserId}`,
  );
  return {
    data: data?.success ? transformLanyardData(data?.data) : undefined,
    error,
    loading,
  };
};
