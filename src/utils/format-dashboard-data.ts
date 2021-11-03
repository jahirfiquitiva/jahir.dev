/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DiscordData,
  TrackData,
  TopTrackData,
  Counters,
  DashboardData,
  Status,
  Activity,
  DiscordActivity,
} from '~/types';

const transformDiscordActivityToDashboardActivity = (
  discordActivity?: DiscordActivity,
): Activity | null => {
  if (!discordActivity) return null;
  return {
    appId: discordActivity.application_id,
    startedAt: discordActivity.timestamps?.start,
    name: discordActivity.name,
    details: discordActivity.details,
    state: discordActivity.state,
    smallImage: discordActivity.assets?.small_image,
    smallImageText: discordActivity.assets?.small_text,
    largeImage: discordActivity.assets?.large_image,
    largeImageText: discordActivity.assets?.large_text,
  };
};

const CUSTOM_STATUS_ID = 'custom';
const EXCLUDE_ACTIVITIES_APPS = [CUSTOM_STATUS_ID, 'spotify'];
export const transformDataToDashboardData = (
  discordData?: DiscordData | null,
  nowPlaying?: TrackData | null,
  counters?: Counters | null,
): DashboardData => {
  const resultData: DashboardData = {};
  if (discordData) {
    resultData.user = discordData.discord_user;
    resultData.statusName = discordData.discord_status;
    if (discordData.activities) {
      const [statusActivity] = discordData.activities.filter(
        (it) => it.id === CUSTOM_STATUS_ID,
      );
      resultData.status = {
        emoji: statusActivity?.emoji?.id
          ? undefined
          : statusActivity?.emoji?.name,
        status: statusActivity?.state,
        updatedAt: statusActivity?.created_at,
      };
      resultData.activities = discordData.activities
        .filter(
          (it) =>
            !EXCLUDE_ACTIVITIES_APPS.some((exclude) =>
              it.id?.includes(exclude),
            ),
        )
        .map(transformDiscordActivityToDashboardActivity)
        .filter((it) => it) as Array<Activity>;
    }
  }
  resultData.nowPlaying = nowPlaying;
  resultData.counters = counters;
  return resultData;
};
