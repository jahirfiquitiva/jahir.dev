import { mdiSpotify } from '@mdi/js';
import Icon from '@mdi/react';

import { Img, Link } from '@/components/atoms';
import useRequest from '@/hooks/useRequest';
import type { TrackData } from '@/lib/spotify';
import type { FC } from '@/types';
import { styled, keyframes, type StitchesCSS } from '~/stitches';

const MusicItem = styled('li', {
  maxHeight: 28,
  display: 'inline-flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '100%',
});

const baseMusicLinkStyles: StitchesCSS = {
  minWidth: 130,
  maxWidth: 130,
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  flex: 1,
  gap: '0.4rem',
  width: 'fit-content',
  color: '$text-tertiary',
  fontSize: '$2xs',
  fontWeight: 500,
  '@mobile-md': {
    maxWidth: 160,
  },
  '@tablet-sm': {
    maxWidth: 172,
  },
};

const MusicLink = styled(Link, {
  ...baseMusicLinkStyles,
  hocus: {
    color: '$text-secondary',
    textDecoration: 'none',
    dark: {
      color: '$text-secondary',
      textDecoration: 'none',
    },
  },
  ellipsize: true,
  '& > svg': {
    minWidth: 24,
  },
});

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const RotatingImg = styled(Img, {
  position: 'relative',
  borderRadius: '50%',
  border: '1px solid rgba($colors$toolbar-glow / .12)',
  canAnimate: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    animationName: rotate,
    animationDuration: '10s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
});

const ScrollContainer = styled('div', {
  $$animState: 'running',
  $$animDuration: '15s',
  $$bg: '$colors$background',
  $$gap: '$16',
  position: 'relative',
  display: 'flex',
  width: 'fit-content',
  flex: 1,
  maxWidth: '100%',
  gap: '$$gap',
  overflowX: 'hidden',
  '& > span:not(:first-of-type)': {
    hidden: true,
  },
  hocus: {
    $$animState: 'paused',
  },
  canAnimate: {
    '& > span:not(:first-of-type)': {
      visible: 'inline-block',
    },
    '&::before': {
      background: 'linear-gradient(to right, $$bg, rgba(0 0 0 / 0))',
      content: '',
      height: '100%',
      position: 'absolute',
      width: '$space$24',
      zIndex: 1,
    },
    '&::after': {
      top: 0,
      right: 0,
      background: 'linear-gradient(to right, $$bg, rgba(0 0 0 / 0))',
      content: '',
      height: '100%',
      position: 'absolute',
      width: '$space$24',
      zIndex: 1,
      transform: 'rotate(180deg)',
    },
  },
});

const scroll = keyframes({
  '0%': { transform: 'translateX(var(---gap, $space$16))' },
  '100%': { transform: 'translateX(-100%)' },
});

const ScrollingText = styled('span', {
  fontSize: 'inherit',
  fontWeight: 'inherit',
  ellipsize: true,
  canAnimate: {
    ellipsize: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    animationName: scroll,
    animationDuration: '$$animDuration',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationPlayState: '$$animState',
  },
  variants: {
    pseudo: {
      true: { pointerEvents: 'none !important', userSelect: 'none !important' },
    },
  },
});

const NotPlayingContainer = styled('div', {
  ...baseMusicLinkStyles,
  pointerEvents: 'none',
  userSelect: 'none',
  cursor: 'not-allowed',
});

const NotPlayingText = styled('span', {
  maxWidth: '100%',
  ellipsize: true,
});

const PseudoLi = styled('li', {
  minWidth: '$space$38',
  pointerEvents: 'none',
  userSelect: 'none',
  '@mobile-md': {
    minWidth: '$space$52',
  },
});

export const FooterNowPlaying: FC = () => {
  const { data, loading } = useRequest<TrackData>('/api/now-playing');

  if (loading) return null;

  const renderComponents = () => {
    if (!data || !data.isPlaying) {
      return (
        <NotPlayingContainer>
          <Icon path={mdiSpotify} size={0.85} />
          <NotPlayingText>Not playing…</NotPlayingText>
        </NotPlayingContainer>
      );
    } else {
      const scrollingText = `${data.title} – ${data.artist}`;
      const animationDuration = scrollingText.length * 0.35;
      return (
        <MusicLink
          title={`Listen to "${data.title}" by "${data.artist}" on Spotify`}
          href={data.url || '#'}
        >
          <RotatingImg
            size={26}
            src={data.image?.url || ''}
            alt={`Album image for song "${data.title}" by "${data.artist}"`}
          />
          <ScrollContainer css={{ $$animDuration: `${animationDuration}s` }}>
            <ScrollingText>{scrollingText}</ScrollingText>
            <ScrollingText pseudo>{scrollingText}</ScrollingText>
          </ScrollContainer>
        </MusicLink>
      );
    }
  };
  return (
    <>
      <PseudoLi></PseudoLi>
      <MusicItem>{renderComponents()}</MusicItem>
    </>
  );
};
