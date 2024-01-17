import { unstable_noStore as noStore } from 'next/cache';

import { getNowPlaying, getRecentlyPlayed } from '@/lib/spotify';
import type { Track, ReadableTrack } from '@/types/spotify/entities.d';

// export const runtime = 'edge';
// export const fetchCache = 'force-no-store';
// export const dynamic = 'force-dynamic';

const mapTrackData = (track?: Track | null): ReadableTrack | null => {
  if (!track) return null;
  try {
    const preAlbumImage = track.album.images.pop();
    const albumImage = track.album.images.pop() || preAlbumImage;
    return {
      name: track.name,
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      album: track.album.name,
      previewUrl: track.preview_url,
      url: track.external_urls.spotify,
      image: albumImage
        ? {
            url: albumImage.url || '',
            height: Math.min(albumImage.height || 78, 78),
            width: Math.min(albumImage.width || 78, 78),
          }
        : undefined,
      hdImage: albumImage,
      duration: track.duration_ms || 0,
    };
  } catch (e) {
    return null;
  }
};

export const getMusicData = async () => {
  noStore();
  const nowPlaying = await getNowPlaying();
  let isPlaying = false;
  let nowPlayingTrack: Track | null = null;
  if (!('error' in nowPlaying)) {
    nowPlayingTrack = nowPlaying.item;
    isPlaying = nowPlaying.is_playing || false;
  }

  // If found a defined track from the now playing api
  if (nowPlayingTrack) {
    return {
      track: mapTrackData(nowPlayingTrack),
      isPlaying,
    };
  }

  // Otherwise, get the most recently played track
  const recentlyPlayed = await getRecentlyPlayed();
  let lastPlayed: Track | null = null;
  if (!('error' in recentlyPlayed)) lastPlayed = recentlyPlayed.items[0]?.track;
  return {
    track: mapTrackData(lastPlayed),
    isPlaying: false,
  };
};
