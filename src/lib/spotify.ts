import querystring from 'querystring';

const clientId = process.env.SPOTIFY_CLIENT_ID || '';
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET || '';
const refreshToken = process.env.SPOTIFY_CLIENT_TOKEN || '';

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
const TOP_TRACKS_ENDPOINT =
  'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50';
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
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  return response.json();
};

export const getTopTracks = async () => {
  const { access_token: accessToken } = await getAccessToken();

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
