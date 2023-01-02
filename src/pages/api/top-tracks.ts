/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTopTracks, validateTrack, type TopTrackData } from '@/lib/spotify';
import { buildApiResponse } from '@/utils/response';
import { unique } from '@/utils/unique';

export const config = { runtime: 'edge' };

export default async function handler() {
  try {
    const response = await getTopTracks();

    if (!response || response.status === 204 || response.status > 400) {
      return buildApiResponse(400, { tracks: [] });
    }

    const { items } = await response.json().catch(() => ({ items: [] }));

    if (!items || !items.length) return buildApiResponse(400, { tracks: [] });

    const tracks: Array<TopTrackData> = (items || [])
      .map((track: any) => ({
        title: track.name,
        artist: track.artists
          .map((_artist: { name: string }) => _artist.name)
          .join(', '),
        album: track.album.name,
        url: track.external_urls.spotify,
        image: track.album.images.pop(),
      }))
      .filter(validateTrack);

    const uniqueArtistTracks = unique(tracks, 'artist').slice(0, 10);

    return buildApiResponse(
      200,
      { tracks: uniqueArtistTracks },
      {
        'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    );
  } catch (err) {
    return buildApiResponse(400, {
      // @ts-ignore
      error: err?.message || err?.stackTrace.toString() || 'Unexpected error',
    });
  }
}
