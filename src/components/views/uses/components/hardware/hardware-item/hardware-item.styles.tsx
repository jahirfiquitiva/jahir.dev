import { Img, Link } from '@/components/core';
import { styled } from '~/stitches';

export const HardwareItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  border: '1px solid $divider',
  borderRadius: '$space$10',
  gap: '$space$6',
  pt: '$4',
  py: '$1',
  backgroundColor: 'rgba(9 17 34 / 0.006)',
  dark: { backgroundColor: 'rgba(235 240 251 / 0.008)' },
  overflow: 'hidden',
  transition: 'all ease-in-out .25s',
  '@tablet-sm': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 0,
  },
  hocus:{
    transform: 'scale(1.025)',
    borderColor: 'rgba($accent-shadow / 0.56)',
  }
});

export const HardwareImage = styled(Img, {
  maxWidth: 72,
  height: 'auto',
  aspectRatio: '1 / 1',
  border: 'none !important',
  overflow: 'hidden',
  objectFit: 'contain',
  p: '$8',
  filter: 'drop-shadow(0 0 4px $colors$img-drop-shadow)',
  '@mobile-md': {
    maxWidth: 84,
  },
  '@mobile-lg': {
    maxWidth: 96,
  },
  '@tablet-sm': {
    aspectRatio: '4 / 3',
    maxWidth: '100%',
    p: '$8',
    transform: 'scale(1.025)',
  },
  '@tablet-md': {
    p: '$12',
    transform: 'scale(1.075)',
  },
});

export const TextsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '$space$4',
  p: '$12 $16',
  pl: 0,
  justifyContent: 'center',
  '@tablet-sm': {
    p: '0 $14 $12',
  },
  '@tablet-md': {
    p: '0 $12 $10',
  },
});

export const HardwareName = styled(Link, {
  fontWeight: 600,
  fontSize: '$xs',
  useFont: 'manrope',
  color: '$text-primary',
  m: '0 !important',
  alignSelf: 'flex-start',
});

export const HardwareDescription = styled('p', {
  color: '$text-secondary',
  fontSize: '$3xs',
  m: '0 !important',
});
