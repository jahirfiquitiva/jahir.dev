import type {
  PlayHistoryObject,
  SpotifyResponse,
  ErrorResponse,
  NowPlayingResponse,
} from '@/types/spotify';

const serialize = (obj: Record<string | number, string | number | boolean>) => {
  const str = [];
  for (const p in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, p)) {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
    }
  }
  return str.join('&');
};

const buildSpotifyRequest = async <T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body?: Record<string, unknown>,
): Promise<T | ErrorResponse> => {
  const { access_token: accessToken } = await getAccessToken();
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    method,
    body: body && method !== 'GET' ? JSON.stringify(body) : undefined,
  });
  try {
    const json = await response.json();
    if (response.ok) return json as T;
    return json as ErrorResponse;
  } catch (e) {
    return {
      error: {
        message: response.statusText || 'Server error',
        status: response.status || 500,
      },
    };
  }
};

const clientId = process.env.SPOTIFY_CLIENT_ID || '';
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET || '';
const refreshToken = process.env.SPOTIFY_CLIENT_REFRESH_TOKEN || '';

const basic = btoa(`${clientId}:${clientSecret}`);
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: serialize({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  return response.json();
};

const NOW_PLAYING_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing';
export const getNowPlaying = async () =>
  buildSpotifyRequest<NowPlayingResponse>(NOW_PLAYING_ENDPOINT);

const RECENTLY_PLAYED_ENDPOINT =
  'https://api.spotify.com/v1/me/player/recently-played?limit=1';
export const getRecentlyPlayed = async () =>
  buildSpotifyRequest<SpotifyResponse<PlayHistoryObject>>(
    RECENTLY_PLAYED_ENDPOINT,
  );
