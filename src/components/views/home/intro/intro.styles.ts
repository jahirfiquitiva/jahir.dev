import { Img, Section } from '@/components/core';
import { styled, keyframes } from '~/stitches';

export const IntroSection = styled(Section, {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  rowGap: '$16',
  '@tablet-sm': {
    gridTemplateColumns: 'minmax(0, 1fr) auto',
    gridTemplateRows: 'minmax(0, 1fr)',
    columnGap: '$26',
  },
});

export const TextsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gridRow: 2,
  '@tablet-sm': {
    gridRow: 1,
  },
});

export const IntroParagraph = styled('p', {
  mt: '$12',
  mb: '$20',
  maxWidth: '325px',
  '@mobile-lg': {
    maxWidth: '410px',
  },
});

export const PhotoContainer = styled('div', {
  borderRadius: '50%',
  backgroundColor: '#223e80',
  width: 168,
  height: 168,
});

export const Photo = styled(Img, {
  borderRadius: '50%',
  backgroundColor: '$accent-dark',
  // border: '1px solid rgba($accent-shadow / 0.12)',
  objectFit: 'cover',
  objectPosition: 'center',
  canHover: {
    filter: 'grayscale(100%) contrast(.75) brightness(150%)',
    transition: 'all .35s ease-in-out',
    mixBlendMode: 'hard-light',
    opacity: 0.75,
  },
  hocus: {
    cursor: 'grab',
    filter: 'unset',
    mixBlendMode: 'normal',
    opacity: 1,
  },
});

const wave = keyframes({
  'from, 50%, to': { transform: 'rotate(0deg)' },
  '10%, 30%': { transform: 'rotate(-10deg)' },
  '20%': { transform: 'rotate(12deg)' },
  '40%': { transform: 'rotate(9deg)' },
});

export const WaveSpan = styled('span', {
  display: 'inline-block',
  canAnimate: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    animationName: wave,
    animationDuration: '2.5s',
    animationIterationCount: 'infinite',
    transformOrigin: '70% 70%',
  },
});
