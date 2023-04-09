import { Link } from '@/old/components/core';
import { styled } from '~/stitches';

export const Figure = styled('figure', {
  display: 'flex',
  flexDirection: 'column',
  mt: '$$verticalContentPadding',
});

export const Grid = styled('div', {
  $$gap: '$space$8',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 222px))',
  gridTemplateRows:
    'repeat(2, minmax(0, calc(calc(100vw - calc($$gap * 2) - $space$14) / 3 - 5px + 0.33px)))',
  gap: '$$gap',
  '@tablet-sm': {
    $$gap: '$space$12',
    gridTemplateColumns: 'repeat(3, minmax(0, 214px))',
  },
  '@tablet-md': {
    gridTemplateRows: 'repeat(2, minmax(0, 214px))',
  },
});

export const ImgContainer = styled(Link, {
  display: 'block',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '$space$4',
  hover: {
    '& > img': { transform: 'scale(1.05)' },
    '&::after': { opacity: 0.35 },
    '& > svg': { opacity: 1 },
  },
  '&::after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '$background',
    opacity: 0,
    transition: 'all ease-in-out .35s',
    pointerEvents: 'none',
    userSelect: 'none',
  },
  '& > svg': {
    color: '$text-primary',
    fill: '$text-primary',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    opacity: 0,
    zIndex: 2,
    transition: 'all ease-in-out .35s',
    pointerEvents: 'none',
    userSelect: 'none',
  },
});

export const InstaPhoto = styled('img', {
  width: '100%',
  height: '100%',
  backgroundColor: '$toolbar',
  objectFit: 'cover',
  objectPosition: 'center',
  transition: 'all ease-in-out .35s',
});
