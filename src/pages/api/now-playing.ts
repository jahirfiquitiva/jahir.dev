import { getNowPlaying, validateTrack, type TrackData } from '@/lib/spotify';
import { buildApiResponse } from '@/utils';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler() {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return buildApiResponse(200, { isPlaying: false });
  }

  const song = await response.json();
  if (song.item === null) {
    return buildApiResponse(200, { isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
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
    return buildApiResponse(200, track, {
      'cache-control': 'public, s-maxage=60, stale-while-revalidate=30',
    });
  }
  return buildApiResponse(200, { isPlaying: false });
}
