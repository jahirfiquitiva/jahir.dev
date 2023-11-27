import { NextResponse } from 'next/server';

import { getTopTracks, mapTrackData } from '@/lib/spotify';

export const runtime = 'edge';

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
    tracks: topTracksRequest.items.map(mapTrackData),
  });
}
