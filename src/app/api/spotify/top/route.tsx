import { NextResponse } from 'next/server';

import { getTopTracks } from '@/lib/spotify';
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

const spotifyResponse = (data: unknown) =>
  NextResponse.json(data, {
    headers: {
      'cache-control': 'public, s-maxage=60, stale-while-revalidate=30',
    },
  });

export async function GET() {
  const topTracksRequest = await getTopTracks().catch(null);
  if ('error' in topTracksRequest) {
    return spotifyResponse({ tracks: [] });
  }

  return spotifyResponse({
    tracks: topTracksRequest.items.map(trackToReadableTrack),
  });
}
