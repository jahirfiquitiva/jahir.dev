'use client';

import { LineWobble } from '@uiball/loaders';
import type { CSSProperties } from 'react';

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
      href={track?.url || '#'}
      style={{ '--stat-color': '30 215 96' } as CSSProperties}
    >
      {loading ? (
        <LineWobble
          size={84}
          lineWeight={5}
          speed={1.75}
          color={'rgb(var(--stat-color))'}
        />
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
