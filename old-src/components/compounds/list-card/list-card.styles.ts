import { Link } from '@/old/components/core';
import { styled } from '~/stitches';

export const StyledExcerpt = styled('p', {
  display: '-webkit-box',
  fontSize: '$3xs',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': 1,
  maxLines: 1,
  '@mobile-lg': {
    fontSize: '$2xs',
    '-webkit-line-clamp': 2,
    maxLines: 2,
  },
});

export const InfoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: '$16',
  rowGap: '$6',
  mt: '$4',
  color: '$text-tertiary',
  fontSize: '$3xs',
  flexWrap: 'wrap',
  '@tablet-sm': {
    columnGap: '$20',
  },
});

export const StyledInfoSpan = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: '$6',
  lineHeight: 1,
});
