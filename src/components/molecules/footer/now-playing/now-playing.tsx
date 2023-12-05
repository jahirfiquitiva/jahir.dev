'use client';

import { useRequest } from '@/hooks/use-request';
import type { ReadableTrack } from '@/types/spotify/entities.d';

import { NowPlayingLoading } from './now-playing.loading';
import { MusicItem } from './now-playing.styles';
import { NowPlayingTrack } from './now-playing.track';

export interface NowPlayingResponse {
  track?: ReadableTrack | null;
  isPlaying?: boolean;
}

export const FooterNowPlaying = () => {
  const { data, loading } = useRequest<NowPlayingResponse>('/api/spotify');
  const { track, isPlaying } = data || { isPlaying: false };

  return (
    <MusicItem aria-hidden={!isPlaying}>
      {loading ? (
        <NowPlayingLoading />
      ) : (
        <NowPlayingTrack track={track} isPlaying={isPlaying} />
      )}
    </MusicItem>
  );
};
