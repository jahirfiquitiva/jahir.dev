import { StyledExcerpt } from '@/old/components/compounds/list-card/list-card.styles';
import { Img } from '@/old/components/core';
import { styled } from '~/stitches';

export const BlogCardHero = styled(Img, {
  aspectRatio: '2 / 1',
  height: 'auto',
  borderRadius: '$space$4',
  '@tablet-sm': {
    mt: '$4',
    minHeight: '100%',
    aspectRatio: '5 / 3',
    maxWidth: 160,
  },
});

export const Published = styled(StyledExcerpt, {
  color: '$text-tertiary',
  '& > span': {
    textDecoration: 'underline',
  },
});
