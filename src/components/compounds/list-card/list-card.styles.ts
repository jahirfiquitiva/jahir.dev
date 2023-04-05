import { Link } from '@/components/core';
import { styled } from '~/stitches';

export const StyledListCard = styled(Link, {
  $$color: '$colors$accent-shadow',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  p: '$10',
  mx: '-$10',
  gap: '$12',
  borderRadius: '$space$10',
  color: '$text-secondary',
  transition: 'all .25s ease-in-out',
  overflow: 'hidden',
  outlineOffset: '0 !important',
  '@tablet-sm': {
    p: '$12',
    mx: '-$12',
    flexDirection: 'row',
  },
  '@tablet-md': {
    p: '$16',
    mx: '-$16',
    gap: '$16',
  },
  hocus: {
    transform: 'translateY(-1px)',
    backgroundColor: 'rgba($$color / .065)',
    textDecoration: 'none',
    color: '$text-primary',
    dark: { color: '$text-primary', backgroundColor: 'rgba($$color / .1)' },
    '& > div:first-of-type > span': {
      textDecoration: 'underline',
      color: 'rgba($$color / 1)',
      dark: { textDecoration: 'underline', color: 'rgba($$color / 1)' },
    },
  },
});

export const StyledContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  gap: '$4',
  py: '$1',
  flex: 1,
});

export const StyledTitle = styled('span', {
  fontSize: '$xs',
  fontWeight: 700,
  useFont: 'manrope',
  color: '$text-primary',
  transition: 'all .15s ease-in-out',
});

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
