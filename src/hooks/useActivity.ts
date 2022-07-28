import { useMemo } from 'react';
import { useLanyard } from 'use-lanyard';

import type { ActivityData } from '@/types';
import { transformLanyardData } from '@/utils';

interface UseActivity {
  data?: ActivityData | null;
  loading?: boolean;
  error?: Error | string | null;
}

const DISCORD_ID = '624058364812591104';
export const useActivity = (): UseActivity => {
  const { data, error } = useLanyard(DISCORD_ID);

  const activityData = useMemo(() => {
    return transformLanyardData(data);
  }, [data]);

  return {
    data: activityData,
    error,
    loading: !data && !error,
  };
};
