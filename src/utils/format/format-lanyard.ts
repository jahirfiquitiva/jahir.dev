import type {
  Spotify,
  Data as LanyardData,
  Activity as DiscordActivity,
} from 'use-lanyard';

import { TrackData } from '@/lib/spotify';
import type { Activity, ActivityData, DiscordStatus } from '@/types';

const ASSET_URL_BASE = 'raw.githubusercontent.com';
const getAssetUrl = (assetId?: string): string | null => {
  if (!assetId || !assetId.includes(ASSET_URL_BASE)) return null;
  const url = assetId?.substring(assetId?.indexOf(ASSET_URL_BASE));
  return `https://${url}`;
};

const buildAssetLink = (appId?: string, assetId?: string): string | null => {
  if (!appId || !assetId) return null;
  const assetUrl = getAssetUrl(assetId);
  if (assetUrl) return assetUrl;
  return `https://cdn.discordapp.com/app-assets/${appId}/${assetId}.webp`;
};

const transformDiscordActivityToActivity = (
  discordActivity?: DiscordActivity,
): Activity | null => {
  if (!discordActivity) return null;
  return {
    appId: discordActivity.application_id,
    startedAt: discordActivity.timestamps?.start,
    name: discordActivity.name,
    details: discordActivity.details,
    state: discordActivity.state,
    smallImage: buildAssetLink(
      discordActivity.application_id,
      discordActivity.assets?.small_image,
    ),
    smallImageText: discordActivity.assets?.small_text,
    largeImage: buildAssetLink(
      discordActivity.application_id,
      discordActivity.assets?.large_image,
    ),
    largeImageText: discordActivity.assets?.large_text,
  };
};

const transformSpotifyActivity = (
  spotify?: Spotify | null,
): TrackData | null => {
  if (!spotify) return null;
  return {
    title: spotify?.song,
    artist: spotify?.artist,
    album: spotify?.album,
    url: `https://open.spotify.com/track/${spotify?.track_id}`,
    image: {
      url: spotify?.album_art_url,
    },
    isPlaying: true,
  };
};

const CUSTOM_STATUS_ID = 'custom';
const SPOTIFY_ACTIVITY_ID = 'spotify';
const EXCLUDE_ACTIVITIES_APPS = [CUSTOM_STATUS_ID, SPOTIFY_ACTIVITY_ID];

export const transformLanyardData = (
  lanyardData?: LanyardData,
): ActivityData => {
  if (!lanyardData) return { status: 'offline', activities: [] };
  return {
    status: lanyardData?.discord_status as DiscordStatus,
    spotify: transformSpotifyActivity(lanyardData?.spotify),
    activities: (lanyardData?.activities || [])
      .filter(
        (it) =>
          !EXCLUDE_ACTIVITIES_APPS.some((exclude) => it.id?.includes(exclude)),
      )
      .map(transformDiscordActivityToActivity)
      .filter((it) => it) as Array<Activity>,
  };
};
