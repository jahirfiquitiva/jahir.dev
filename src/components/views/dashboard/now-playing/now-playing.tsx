'use client';

import type { Route } from 'next';
import type { CSSProperties } from 'react';

import { Ring } from '@/components/core/loaders';
import type { NowPlayingResponse } from '@/components/molecules/footer/now-playing';
import { useRequest } from '@/hooks/use-request';

import {
  BackgroundImage,
  NowPlayingCard,
  NowPlayingContent,
  NowPlayingHeader,
  NowPlayingTexts,
  TrackName,
  TrackArtist,
  AlbumImg,
} from './now-playing.styles';

export const NowPlaying = () => {
  const { data, loading } = useRequest<NowPlayingResponse>('/api/spotify');
  const { track, isPlaying } = data || { isPlaying: false };

  return (
    <NowPlayingCard
      title={`Listen to "${track?.name}" by "${track?.artist}" on Spotify`}
      href={(track?.url || '#') as Route}
      style={{ '--stat-color': '30 215 96' } as CSSProperties}
    >
      {loading ? (
        <div
          className={
            'flex flex-row items-center self-center justify-center h-full w-full'
          }
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
          />
          <NowPlayingContent>
            <NowPlayingTexts>
              <NowPlayingHeader>
                {isPlaying ? 'Now Playing' : 'Last Played'}
              </NowPlayingHeader>
              <div className={'flex flex-col'}>
                <TrackName>{track?.name}</TrackName>
                <TrackArtist>{track?.artist}</TrackArtist>
              </div>
            </NowPlayingTexts>
            <AlbumImg
              src={track?.image?.url || ''}
              size={track?.image?.height || 72}
              alt={`Image for album: "${track?.album}" by "${track?.artist}"`}
            />
          </NowPlayingContent>
        </>
      )}
    </NowPlayingCard>
  );
};
