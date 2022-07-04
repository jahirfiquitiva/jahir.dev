import { styled } from '~/stitches';

export const ToolbarLink = styled('a', {
  $$gradientStart: '$colors$gradient-brand',
  $$gradientEnd: '$colors$gradient-blue',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  verticalAlign: 'middle',
  fontFamily: '$manrope',
  fontWeight: '600',
  fontSize: '$xs',
  color: '$text-secondary',
  borderRadius: '6px',
  p: 'calc($$floatingMargin / 2) $$floatingMargin',
  transition: 'background-color ease-in-out .15s',
  '& span': {
    color: 'inherit',
  },
  '&:hover': {
    backgroundColor: 'rgba($$glowColor / 0.08)',
    '& span': {
      color: '$transparent',
      background: 'linear-gradient(to right, $$gradientStart, $$gradientEnd)',
      backgroundClip: 'text',
    },
  },

  variants: {
    home: {
      true: {
        gap: 'calc($$floatingMargin / 2)',
        '& span': {
          color: '$transparent',
          background: 'linear-gradient(to right, $$gradientStart, $$gradientEnd)',
          backgroundClip: 'text',
        },
      },
    },
    index: {
      0: {
        $$gradientStart: '$colors$gradient-blue',
        $$gradientEnd: '$colors$gradient-green',
      },
      1: {
        $$gradientStart: '$colors$gradient-yellow',
        $$gradientEnd: '$colors$gradient-orange',
      },
      2: {
        $$gradientStart: '$colors$gradient-red',
        $$gradientEnd: '$colors$gradient-purple',
      },
      3: {
        $$gradientStart: '$colors$gradient-brand',
        $$gradientEnd: '$colors$gradient-blue',
      },
    },
  },
});

export const ToolbarLinksContainer = styled('ul', {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: 'calc($$floatingMargin / 2)',
  marginInline: 0,
  paddingInline: 0,
  listStyle: 'none',

  '& li': {
    height: '100%',
  },
});
