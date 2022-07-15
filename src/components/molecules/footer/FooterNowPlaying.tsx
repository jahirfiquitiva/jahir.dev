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
});

const baseMusicLinkStyles: StitchesCSS = {
  maxWidth: 172,
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  flex: 1,
  gap: '0.6rem',
  width: 'fit-content',
  color: '$text-tertiary',
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
  width: 24,
  height: 24,
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
  $$bg: '$colors$background',
  $$gap: '1rem',
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
  canAnimate: {
    '& > span:not(:first-of-type)': {
      visible: 'inline-block',
    },
    '&::before': {
      background: 'linear-gradient(to right, $$bg, rgba(0 0 0 / 0))',
      content: '',
      height: '100%',
      position: 'absolute',
      width: 24,
      zIndex: 1,
    },
    '&::after': {
      top: 0,
      right: 0,
      background: 'linear-gradient(to right, $$bg, rgba(0 0 0 / 0))',
      content: '',
      height: '100%',
      position: 'absolute',
      width: 24,
      zIndex: 1,
      transform: 'rotate(180deg)',
    },
  },
});

const scroll = keyframes({
  '0%': { transform: 'translateX(var(---gap, 1rem))' },
  '100%': { transform: 'translateX(-100%)' },
});

const ScrollingText = styled('span', {
  ellipsize: true,
  canAnimate: {
    ellipsize: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    animationName: scroll,
    animationDuration: '15s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  variants: {
    pseudo: {
      true: { pointerEvents: 'none !important', userSelect: 'none !important' },
    },
  },
});

const NotPlayingContainer = styled('div', {
  ...baseMusicLinkStyles,
  userSelect: 'none',
});

const NotPlayingText = styled('span', {
  maxWidth: '100%',
  ellipsize: true,
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
      return (
        <MusicLink
          title={`Listen to "${data.title}" by "${data.artist}" on Spotify`}
          href={data.url || '#'}
        >
          <RotatingImg size={24} src={data.image?.url || ''} />
          <ScrollContainer>
            <ScrollingText>
              {data.title}&nbsp;–&nbsp;{data.artist}
            </ScrollingText>
            <ScrollingText pseudo>
              {data.title}&nbsp;–&nbsp;{data.artist}
            </ScrollingText>
          </ScrollContainer>
        </MusicLink>
      );
    }
  };
  return <MusicItem>{renderComponents()}</MusicItem>;
};
