import NextLink from 'next/link';

import { styled } from '~/stitches';

export const StyledLink = styled(NextLink, {
  display: 'inline-block',
  fontWeight: 500,
  color: '$accent',
  hocus: {
    color: '$accent-dark',
    dark: {
      color: '$accent-dark',
    },
  },
  variants: {
    underline: {
      true: {
        hocus: {
          textDecoration: 'underline',
          textDecorationThickness: '2px',
          textUnderlineOffset: '2px',
        },
      },
    },
  },
});