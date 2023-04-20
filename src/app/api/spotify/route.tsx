import { NextResponse } from 'next/server';

import { getNowPlaying, getRecentlyPlayed } from '@/lib/spotify';
import type { Track, ReadableTrack } from '@/types/spotify';

export const runtime = 'edge';

const trackToReadableTrack = (track?: Track | null): ReadableTrack | null => {
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
      image: albumImage,
    };
  } catch (e) {
    return null;
  }
};

export async function GET() {
  const nowPlaying = await getNowPlaying().catch(null);
  let isPlaying = false;
  let nowPlayingTrack: Track | null = null;
  if (!('error' in nowPlaying)) {
    nowPlayingTrack = nowPlaying.item;
    isPlaying = nowPlaying.is_playing || false;
  }

  // If found a defined track from the now playing api
  if (nowPlayingTrack) {
    return NextResponse.json({
      track: trackToReadableTrack(nowPlayingTrack),
      isPlaying,
    });
  }

  // Otherwise, get the most recently played track
  const recentlyPlayed = await getRecentlyPlayed().catch(null);
  let lastPlayed: Track | null = null;
  if (!('error' in recentlyPlayed))
    lastPlayed = recentlyPlayed.items?.[0]?.track;
  return NextResponse.json({
    track: trackToReadableTrack(lastPlayed),
    isPlaying: false,
  });
}
