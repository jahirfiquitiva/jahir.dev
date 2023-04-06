import { Button } from '@/components/core';
import { styled } from '~/stitches';

export const Fab = styled(Button, {
  zIndex: 2,
  position: 'fixed',
  right: 0,
  bottom: 0,
  mr: '$16',
  mb: '$16',
  p: '$12',
  borderRadius: '50%',
  minHeight: 50,
  maxWidth: 50,
  gap: 0,
  visibility: 'hidden',
  pointerEvents: 'none',
  userSelect: 'none',
  opacity: 0,
  transform: 'translateY(72px)',
  backgroundColor: '$accent',
  textTransform: 'uppercase',
  letterSpacing: '0.0625rem',
  fontSize: '$3xs',
  border: '1px solid rgba($colors$accent-shadow / .12)',
  boxShadow:
    '0 0 1px 1px $colors$divider, 0 0 6px 1px rgba($colors$accent-shadow / .24)',

  hocus: {
    backgroundColor: '$accent-dark',
    border: '1px solid rgba($colors$accent-shadow / .24)',
    boxShadow:
      '0 0 1px 1px $colors$divider, 0 0 8px 2px rgba($colors$accent-shadow / .32)',
  },
  dark: {
    backgroundColor: '$accent',
    hocus: {
      backgroundColor: '$accent-dark',
    },
  },

  '& span': {
    hidden: true,
  },

  '@tablet-sm': {
    mr: '$24',
    mb: '$24',
  },

  '@desktop': {
    maxWidth: 'unset',
    mr: '$32',
    mb: '$32',
    p: '$14 $20',
    borderRadius: 9999,
    '& span': {
      visible: 'block',
    },
    '& svg': {
      hidden: true,
    },
  },

  variants: {
    shown: {
      true: {
        visible: 'flex',
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  },
});
