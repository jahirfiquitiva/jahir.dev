import { styled } from '~/stitches';

import { FooterLink } from './footer-links-group';

export const StyledFooter = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  py: '$$verticalContentPadding',
  px: '$14',
  gap: '$$verticalContentPadding',
  borderTop: '1px solid $divider',
  '@tablet-md': {
    px: 0,
  },
});

export const InnerFooter = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$16',
  '@tablet-sm': {
    justifyContent: 'space-between',
  },
});

export const BrandLink = styled(FooterLink, {
  display: 'inline-flex',
  alignSelf: 'flex-start',
  gap: '$6',
  minHeight: '30px',
  minWidth: '130px',
  '@mobile-md': {
    minWidth: '154px',
  },
  '& > svg': {
    width: '24px',
    height: '24px',
  },
});

export const LinksContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'calc($$verticalContentPadding / 2)',
  justifyContent: 'space-between',
  '@mobile-md': {
    justifyContent: 'unset',
  },
  '@tablet-sm': {
    justifyContent: 'space-between',
  },
});
