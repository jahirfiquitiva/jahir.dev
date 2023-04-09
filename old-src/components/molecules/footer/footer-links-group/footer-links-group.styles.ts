import { gradientEnabledCss, Link } from '@/old/components/core';
import { gradientVariants } from '@/old/stitches/utils/gradient';
import { styled } from '~/stitches';

export const List = styled('ul', {
  minWidth: '130px',
  maxWidth: '100%',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '$12',
  marginInline: 0,
  marginBlock: 0,
  paddingInline: 0,
  '@mobile-md': {
    minWidth: '164px',
  },
  '@tablet-sm': {
    minWidth: '172px',
  },
  variants: {
    meta: {
      true: {
        flexDirection: 'row',
        marginTop: '$space$12',
        '@tablet-sm': {
          flexDirection: 'column',
          marginTop: 0,
        },
      },
    },
  },
});

export const FooterLink = styled(Link, {
  display: 'inline-flex',
  alignItems: 'center',
  alignSelf: 'flex-start',
  color: '$text-tertiary',

  hocus: {
    '& > span': gradientEnabledCss,
    textDecorationColor: '$$gradientStart !important',
  },

  variants: {
    gradient: gradientVariants(),
    forceGradient: {
      true: {
        '& > span': gradientEnabledCss,
      },
    },
  },
});
