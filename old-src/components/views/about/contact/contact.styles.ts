import { LinkButton } from '@/components/core';
import { styled } from '~/stitches';

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: 'calc($$verticalContentPadding * 2)',
  mt: 'calc($$verticalContentPadding / 1.5)',
  mb: 'calc($$verticalContentPadding / 2)',
  '& > img': {
    gridRow: 2,
  },
  '@tablet-sm': {
    gap: '$$verticalContentPadding',
    mt: 'calc($$verticalContentPadding / 2)',
    gridTemplateColumns: 'minmax(auto, 192px) minmax(0, 1fr)',
    alignItems: 'center',
    '& > img': {
      gridRow: 1,
    },
  },
  '& > div:first-of-type': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$10',
  },
});

export const ContactOptions = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '$16',
  maxWidth: '100%',
});

export const ContactLink = styled(LinkButton, {
  $$linkColor: '$colors$accent-shadow',
  hocus: {
    borderColor: 'rgba($$linkColor / 1) !important',
    backgroundColor: 'rgba($$linkColor / 0.08) !important',
    dark: {
      borderColor: 'rgba($$linkColor / 1) !important',
      backgroundColor: 'rgba($$linkColor / 0.16) !important',
    },
  },
});
