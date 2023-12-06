import cx from 'classix';
import type { Route } from 'next';

import type { ReadableTrack } from '@/types/spotify/entities.d';

import {
  MusicLink,
  PseudoScrollingText,
  RotatingImg,
  ScrollingContainer,
  ScrollingText,
} from './now-playing.styles';

interface FooterNowPlayingProps {
  track?: ReadableTrack | null;
  isPlaying?: boolean;
}

export const NowPlayingTrack = (props: FooterNowPlayingProps) => {
  const { track, isPlaying = false } = props;

  if (!track || !isPlaying) return null;
  const scrollingText = `${track.name} • ${track.artist}`;
  const animationDuration = scrollingText.length * 0.325;
  return (
    <MusicLink
      title={`Listen to "${track.name}" by "${track.artist}" on Spotify`}
      href={(isPlaying ? track.url : '/now') as Route}
      data-umami-event={'Click Now Playing'}
      data-umami-event-src={'Footer'}
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
        {Boolean(isPlaying) && (
          <>
            <PseudoScrollingText aria-hidden={true} $playing={isPlaying}>
              {scrollingText}
            </PseudoScrollingText>
            <PseudoScrollingText aria-hidden={true} $playing={isPlaying}>
              {scrollingText}
            </PseudoScrollingText>
          </>
        )}
      </ScrollingContainer>
    </MusicLink>
  );
};
