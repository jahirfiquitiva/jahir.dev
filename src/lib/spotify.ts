import { serialize } from './serialize';

const clientId = process.env.SPOTIFY_CLIENT_ID || '';
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET || '';
const refreshToken =
  process.env.SPOTIFY_CLIENT_REFRESH_TOKEN ||
  process.env.SPOTIFY_CLIENT_TOKEN ||
  '';

const basic = btoa(`${clientId}:${clientSecret}`);
const NOW_PLAYING_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: serialize({
      // eslint-disable-next-line camelcase
      grant_type: 'refresh_token',
      // eslint-disable-next-line camelcase
      refresh_token: refreshToken,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken();
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const forbiddenKeywords = ['netflix', 'disney', 'musical'];

export interface TopTrackData {
  title?: string;
  artist?: string;
  album?: string;
  url?: string;
  image?: {
    height?: number;
    width?: number;
    url?: string;
  };
}

export interface TrackData extends TopTrackData {
  isPlaying?: boolean;
}

export const validateTrack = (track: TopTrackData): boolean => {
  return !forbiddenKeywords.some(
    (it) =>
      track?.title?.toLowerCase().includes(it) ||
      track?.album?.toLowerCase().includes(it),
  );
};
