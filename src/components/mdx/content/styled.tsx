import { Heading, Img } from '@/components/atoms';
import { styled } from '~/stitches';

import { Reactions } from './Reactions';

export const Title = styled(Heading, {
  $$textShadowColor: '$colors$text-primary',
  dark: { $$textShadowColor: '$colors$text-primary' },
  mt: '$6',
  '@tablet-sm': {
    mt: '$12',
  },
  '@tablet-lg': {
    mt: '$16',
  },
});

export const Intro = styled('p', {
  fontSize: '$xs',
  color: '$text-tertiary',
  mt: '$6 !important',
  mb: '$26 !important',
});

export const ShareAndEdit = styled('div', {
  display: 'flex',
  gap: '$12',
  fontSize: '$2xs',
  color: '$text-tertiary',
  order: 2,
  '@tablet-md': {
    order: 1,
  },
});

export const ArticleFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$$verticalContentPadding',
  mt: '$$verticalContentPadding',
  mb: 0,
  boxSizing: 'border-box',
  '@tablet-md': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    mb: 0,
  },
});

export const ArticleHero = styled(Img, {
  overflow: 'hidden',
  variants: {
    cropHero: {
      true: {
        aspectRatio: '2 / 1',
        height: 'auto',
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
