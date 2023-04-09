import { LinkButton } from '@/old/components/core';
import { styled } from '~/stitches';

export const BlogsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$12',
  '@tablet-md': {
    gap: '$16',
  },
});

export const BlogHeader = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$16',
  '@tablet-sm': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const BlogButtons = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: '$16',
  '@tablet-sm': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export const RssLink = styled(LinkButton, {
  backgroundColor: '#f26522',
  dark: { backgroundColor: '#f37438' },
  hocus: {
    backgroundColor: '#da5b1f',
    dark: { backgroundColor: '#f26522' },
  },
});
