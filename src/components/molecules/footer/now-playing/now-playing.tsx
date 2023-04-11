import { cx } from 'classix';

import type { FC } from '@/types';
import type { ReadableTrack } from '@/types/spotify';

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

export const FooterNowPlaying: FC<FooterNowPlayingProps> = (props) => {
  const { track, isPlaying = false } = props;

  if (!track) return null;
  const scrollingText = `${track.name} • ${track.artist}`;
  const animationDuration = scrollingText.length * 0.375;
  return (
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
  );
};
