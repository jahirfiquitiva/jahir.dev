import { useMemo } from 'react';
import { useLanyard } from 'use-lanyard';

import useRequest from '~/hooks/useRequest';
import {
  DashboardData,
  TopTrackData,
  GitHubStats,
  TwitterStats,
  DiscordData,
} from '~/types';
import { transformDataToDashboardData } from '~/utils/format-dashboard-data';

const DISCORD_ID = '624058364812591104';
export const useDashboardData = (): DashboardData => {
  const { data: discordData } = useLanyard(DISCORD_ID);
  const { data: nowPlayingData } = useRequest<TopTrackData>('/api/now-playing');
  const { data: githubData } = useRequest<GitHubStats>('/api/github');
  const { data: twitterData } = useRequest<TwitterStats>('/api/twitter');

  const memoizedData = useMemo(() => {
    return transformDataToDashboardData(
      { ...discordData } as DiscordData,
      nowPlayingData,
      {
        githubFollowers: githubData?.followers || 0,
        githubStars: githubData?.stars || 0,
        twitterFollowers: twitterData?.followers || 0,
      },
    );
  }, [discordData, nowPlayingData, githubData, twitterData]);

  return memoizedData;
};
