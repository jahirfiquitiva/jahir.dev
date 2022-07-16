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
  mt: '.4rem',
  mb: '1.6rem',
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
  mt: '2.4rem',
  mb: '.8rem',
  boxSizing: 'border-box',
  '@tablet-lg': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    mt: '2rem',
    mb: 0,
  },
});

export const ArticleImg = styled(Img, {
  width: '100%',
  height: 'auto',
  objectFit: 'contain',
  borderRadius: '.5rem',
  border: '1px solid $divider',
  my: '$$verticalContentPadding',
});

export const MdxReactions = styled(Reactions, {
  order: 1,
  '@tablet-lg': {
    order: 2,
  },
});
