'use client';

import { LineWobble } from '@uiball/loaders';
import { cx } from 'classix';

import { useRequest } from '@/hooks/use-request';
import type { ReadableTrack } from '@/types/spotify';

import {
  MusicItem,
  MusicLink,
  PseudoScrollingText,
  RotatingImg,
  ScrollingContainer,
  ScrollingText,
} from './now-playing.styles';

interface ApiResponse {
  track?: ReadableTrack | null;
  isPlaying: boolean;
}

export const FooterNowPlaying = () => {
  const { data, loading, error } = useRequest<ApiResponse>('/api/spotify');
  const { track, isPlaying } = data || { isPlaying: false };

  if (loading) {
    return (
      <MusicItem>
        <div className={'mx-6 tablet-sm:mx-2'}>
          <LineWobble
            size={84}
            lineWeight={5}
            speed={1.75}
            color={'var(--color-accent)'}
          />
        </div>
      </MusicItem>
    );
  }

  if (error || !track) return null;

  const scrollingText = `${track.name} • ${track.artist}`;
  const animationDuration = scrollingText.length * 0.4;
  return (
    <MusicItem>
      <MusicLink
        title={`Jahir ${isPlaying ? 'is listening' : 'recently listened'} to "${
          track.name
        }" by "${track.artist}" on Spotify`}
        href={'/dashboard'}
      >
        <RotatingImg
          size={26}
          src={track.image?.url || ''}
          alt={`Image for album: "${track.album}" by "${track.artist}"`}
          className={cx(!isPlaying && 'motion-safe:animate-none')}
        />
        <ScrollingContainer
          $playing={isPlaying}
          style={{ animationDuration: `${animationDuration}s` }}
        >
          <ScrollingText $playing={isPlaying}>{scrollingText}</ScrollingText>
          <PseudoScrollingText aria-hidden={true} $playing={isPlaying}>
            {scrollingText}
          </PseudoScrollingText>
        </ScrollingContainer>
      </MusicLink>
    </MusicItem>
  );
};
