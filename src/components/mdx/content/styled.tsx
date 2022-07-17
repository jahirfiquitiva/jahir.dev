import { Heading, Img } from '@/components/atoms';
import { styled } from '~/stitches';

import { Reactions } from './Reactions';

export const Title = styled(Heading, {
  $$textShadowColor: '$colors$text-primary',
  dark: { $$textShadowColor: '$colors$text-primary' },
  mt: '.4rem',
  '@tablet-sm': {
    mt: '.8rem',
  },
  '@tablet-lg': {
    mt: '1rem',
  },
});

export const Intro = styled('p', {
  fontSize: '$xs',
  color: '$text-tertiary',
  mt: '.4rem !important',
  mb: '1.6rem !important',
});

export const ShareAndEdit = styled('div', {
  display: 'flex',
  gap: '.8rem',
  fontSize: '$2xs',
  color: '$text-tertiary',
  order: 2,
  '@tablet-lg': {
    order: 1,
  },
});

export const ArticleFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  mt: '$$verticalContentPadding',
  mb: 0,
  boxSizing: 'border-box',
  '@tablet-md': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    mt: '2rem',
    mb: 0,
  },
});

export const ArticleHero = styled(Img, {
  objectFit: 'cover !important',
  variants: {
    cropHero: {
      true: {
        maxHeight: 180,
        '@mobile-md': { maxHeight: 211 },
        '@mobile-lg': { maxHeight: 239 },
        '@tablet-sm': { maxHeight: 298 },
        '@tablet-lg': { maxHeight: 384 },
      },
    },
  },
});

export const MdxReactions = styled(Reactions, {
  order: 1,
  '@tablet-lg': {
    order: 2,
  },
});
