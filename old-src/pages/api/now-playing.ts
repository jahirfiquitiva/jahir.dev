import {
  getNowPlaying,
  validateTrack,
  type TrackData,
} from '@/old/lib/spotify';
import type { LanyardResponse } from '@/old/types';
import { transformSpotifyActivity } from '@/old/utils/format/format-lanyard';
import { buildApiResponse } from '@/old/utils/response';

const discordUserId = process.env.DISCORD_USER_ID || '';

export const config = { runtime: 'edge' };

const requestNowPlayingFromLanyard = async () => {
  try {
    const req = await fetch(
      `https://api.lanyard.rest/v1/users/${discordUserId}`,
    );
    const { data, success } = (await req.json()) as LanyardResponse;
    if (!success) return buildApiResponse(200, { isPlaying: false });

    const { spotify } = data || {};
    const track = transformSpotifyActivity(spotify);
    if (!track) return buildApiResponse(200, { isPlaying: false });

    if (validateTrack(track)) {
      return buildApiResponse(
        200,
        { ...track },
        {
          'cache-control': 'public, s-maxage=60, stale-while-revalidate=30',
        },
      );
    }
    return buildApiResponse(200, { isPlaying: false });
  } catch (e) {
    return buildApiResponse(200, { isPlaying: false });
  }
};

export default async function handler() {
  try {
    const response = await getNowPlaying();
    if (response.status === 204 || response.status > 400) {
      return requestNowPlayingFromLanyard();
    }

    const song = await response.json();
    if (song.item === null) {
      return requestNowPlayingFromLanyard();
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((_artist: any) => _artist.name)
      .join(', ');
    const album = song.item.album.name;
    const preAlbumImage = song.item.album.images.pop();
    const albumImage = song.item.album.images.pop() || preAlbumImage;
    const url = song.item.external_urls.spotify;

    const track: TrackData = {
      title,
      artist,
      album,
      url,
      image: albumImage,
      isPlaying,
    };

    if (validateTrack(track)) {
      return buildApiResponse(
        200,
        { ...track },
        {
          'cache-control': 'public, s-maxage=60, stale-while-revalidate=30',
        },
      );
    }
    return buildApiResponse(200, { isPlaying: false });
  } catch (e) {
    return requestNowPlayingFromLanyard();
  }
}
