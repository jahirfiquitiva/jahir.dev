import { useMemo } from 'react';
import { useLanyard } from 'use-lanyard';

import useRequest from '~/hooks/useRequest';
import { DashboardData, TopTrackData, DiscordData } from '~/types';
import { transformDataToDashboardData } from '~/utils/format/format-dashboard-data';

const DISCORD_ID = '624058364812591104';
export const useDashboardData = (): DashboardData => {
  const { data: discordData } = useLanyard(DISCORD_ID);
  const { data: nowPlayingData } = useRequest<TopTrackData>('/api/now-playing');

  const memoizedData = useMemo(() => {
    return transformDataToDashboardData(
      { ...discordData } as DiscordData,
      nowPlayingData,
    );
  }, [discordData, nowPlayingData]);

  return memoizedData;
};
