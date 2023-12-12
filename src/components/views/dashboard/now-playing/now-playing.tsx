'use client';

import cx from 'classix';
import type { Route } from 'next';
import type { CSSProperties } from 'react';

import { Ring } from '@/components/core/loaders/ring/ring';
import type { NowPlayingResponse } from '@/components/molecules/footer/now-playing/now-playing';
import { useRequest } from '@/hooks/use-request';

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

export const NowPlaying = () => {
  const { data, loading } = useRequest<NowPlayingResponse>('/api/spotify');
  const { track, isPlaying } = data || { isPlaying: false };

  return (
    <NowPlayingCard
      title={`Listen to "${track?.name}" by "${track?.artist}" on Spotify`}
      href={(track?.url || '#') as Route}
      style={{ '--stat-color': '30 215 96' } as CSSProperties}
      data-umami-event={'Click Now Playing'}
      data-umami-event-src={'Now Page'}
    >
      {loading ? (
        <div
          className={cx(
            'flex flex-row',
            'items-center self-center justify-center',
            'h-full mx-12 my-28',
          )}
        >
          <Ring
            size={48}
            lineWeight={6}
            speed={2}
            color={'rgb(var(--stat-color))'}
          />
        </div>
      ) : (
        <>
          <BackgroundImage
            src={track?.image?.url || ''}
            width={track?.image?.width || 128}
            height={track?.image?.height || 128}
            alt={`Image for album: "${track?.album}" by "${track?.artist}"`}
            className={cx(isPlaying ? 'motion-safe:animate-spin' : '')}
          />
          <NowPlayingContent>
            <AlbumImg
              src={track?.image?.url || ''}
              size={track?.image?.height || 72}
              alt={`Image for album: "${track?.album}" by "${track?.artist}"`}
            />
            <NowPlayingTexts>
              <NowPlayingHeader>
                <span>{isPlaying ? 'Now Playing' : 'Last Played'}</span>
                {isPlaying ? (
                  <NowPlayingBarsGroup>
                    <NowPlayingBar />
                    <NowPlayingBar className={'[animation-delay:-2.2s]'} />
                    <NowPlayingBar className={'[animation-delay:-3.7s]'} />
                  </NowPlayingBarsGroup>
                ) : null}
              </NowPlayingHeader>
              <div className={'flex flex-col gap-2'}>
                <TrackName>{track?.name}</TrackName>
                <TrackArtist>{track?.artist}</TrackArtist>
              </div>
            </NowPlayingTexts>
          </NowPlayingContent>
        </>
      )}
    </NowPlayingCard>
  );
};
