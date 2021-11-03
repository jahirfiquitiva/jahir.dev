/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DiscordData,
  TrackData,
  TopTrackData,
  Counters,
  DashboardData,
  Status,
  Activity,
} from '~/types';

const CUSTOM_STATUS_ID = 'custom';
export const transformDataToDashboardData = (
  discordData?: DiscordData,
  nowPlaying?: TrackData,
  topSongs?: Array<TopTrackData>,
  counters?: Counters,
): DashboardData => {
  const resultData: DashboardData = {};
  if (discordData) {
    resultData.user = discordData.discord_user;
    resultData.statusName = discordData.discord_status;
    if (discordData.activities) {
      const statusActivity = discordData.activities.filter(
        (it) => it.id === CUSTOM_STATUS_ID,
      );
      resultData.status = { ...statusActivity } as Status;
      resultData.activities = discordData.activities
        .filter((it) => it.id !== CUSTOM_STATUS_ID)
        .map((it) => ({ ...it } as Activity));
    }
  }
  resultData.nowPlaying = nowPlaying;
  resultData.topSongs = topSongs;
  resultData.counters = counters;
  return resultData;
};
