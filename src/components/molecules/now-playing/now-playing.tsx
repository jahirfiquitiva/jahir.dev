'use client';

import type { Route } from 'next';
import type { CSSProperties } from 'react';

import { useRequest } from '@/hooks/use-request';
import type { ReadableTrack } from '@/types/spotify/entities';
import cx from '@/utils/cx';

import {
  AlbumImg,
  BackgroundImage,
  NowPlayingBar,
  NowPlayingBarsGroup,
  NowPlayingCard,
  NowPlayingContent,
  NowPlayingHeader,
  NowPlayingTexts,
  TrackArtist,
  TrackName,
} from './now-playing.styles';

export interface NowPlayingResponse {
  track?: ReadableTrack | null;
  isPlaying?: boolean;
}

export const NowPlaying = () => {
  const { data, loading } = useRequest<NowPlayingResponse>('/api/spotify');
  const { track, isPlaying } = data || { isPlaying: false };

  return (
    <NowPlayingCard
      title={`Listen to "${track?.name}" by "${track?.artist}" on Spotify`}
      href={(track?.url || '#') as Route}
      style={{ '--stat-color': '30 215 96' } as CSSProperties}
      data-umami-event={'Now Playing'}
      className={cx(
        'flex items-center justify-center',
        loading ? 'select-none pointer-events-none' : '',
      )}
      aria-disabled={loading}
    >
      <BackgroundImage
        src={track?.image?.url || ''}
        width={track?.image?.width || 128}
        height={track?.image?.height || 128}
        alt={`Image for album: "${track?.album}" by "${track?.artist}"`}
        className={cx(
          isPlaying
            ? 'motion-safe:animate-spin'
            : loading
              ? 'hidden invisible'
              : '',
        )}
      />
      <NowPlayingContent
        className={loading ? 'motion-safe:animate-pulse' : undefined}
      >
        <AlbumImg
          src={track?.image?.url || ''}
          size={track?.image?.height || 72}
          alt={`Image for album: "${track?.album}" by "${track?.artist}"`}
          className={cx(
            'bg-divider',
            'min-w-[7.5rem] tablet-sm:min-w-[4.875rem]',
          )}
        />
        <NowPlayingTexts>
          <NowPlayingHeader>
            <span>
              {loading ? 'Loading' : isPlaying ? 'Now Playing' : 'Last Played'}
            </span>
            {isPlaying ? (
              <NowPlayingBarsGroup>
                <NowPlayingBar />
                <NowPlayingBar className={'[animation-delay:-2.2s]'} />
                <NowPlayingBar className={'[animation-delay:-3.7s]'} />
              </NowPlayingBarsGroup>
            ) : null}
          </NowPlayingHeader>
          <div className={'flex flex-col gap-2'}>
            <TrackName className={loading ? 'bg-divider' : undefined}>
              {track?.name}
            </TrackName>
            <TrackArtist className={loading ? 'bg-divider' : undefined}>
              {track?.artist}
            </TrackArtist>
          </div>
        </NowPlayingTexts>
      </NowPlayingContent>
    </NowPlayingCard>
  );
};
