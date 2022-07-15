import { Img, Link } from '@/components/atoms';
import useRequest from '@/hooks/useRequest';
import type { TrackData } from '@/lib/spotify';
import type { FC } from '@/types';
import { mdiSpotify } from '@mdi/js';
import Icon from '@mdi/react';
import { styled, keyframes } from '~/stitches';

const MusicItem = styled('li', {
  maxHeight: 28,
  display: 'inline-flex',
  alignItems: 'center',
  width: '100%',
});

const MusicLink = styled(Link, {
  maxWidth: 172,
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  flex: 1,
  gap: '0.4rem',
  width: 'fit-content',
  color: '$text-tertiary',
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
  animationName: rotate,
  animationDuration: '10s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  border: '1px solid rgba($colors$toolbar-glow / .12)',
});

const ScrollContainer = styled('div', {
  $$bg: '$colors$background',
  position: 'relative',
  display: 'flex',
  width: 'fit-content',
  flex: 1,
  maxWidth: '100%',
  gap: '0.8rem',
  overflowX: 'hidden',
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
});

const scroll = keyframes({
  '0%': { transform: 'translateX(0.8rem)' },
  '100%': { transform: 'translateX(-100%)' },
});

const ScrollingText = styled('span', {
  animationName: scroll,
  animationDuration: '15s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
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
        <MusicLink as={'div'}>
          <Icon path={mdiSpotify} size={0.85} />
          <NotPlayingText>Not playing…</NotPlayingText>
        </MusicLink>
      );
    } else {
      return (
        <MusicLink
          title={`Listen to "${data.title}" on Spotify`}
          href={data.url || '#'}
        >
          <RotatingImg size={24} src={data.image?.url || ''} />
          <ScrollContainer>
            <ScrollingText>
              {data.title}&nbsp;–&nbsp;{data.artist}
            </ScrollingText>
            <ScrollingText>
              {data.title}&nbsp;–&nbsp;{data.artist}
            </ScrollingText>
          </ScrollContainer>
        </MusicLink>
      );
    }
  };
  return <MusicItem>{renderComponents()}</MusicItem>;
};
