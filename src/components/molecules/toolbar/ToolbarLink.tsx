import { Link } from '@/components/atoms';
import { styled } from '~/stitches';

export const ToolbarLink = styled(Link, {
  $$gradientStart: '$colors$gradient-brand',
  $$gradientEnd: '$colors$gradient-blue',
  height: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  verticalAlign: 'middle',
  fontFamily: '$manrope',
  fontWeight: 600,
  fontSize: '$2xs',
  color: '$text-secondary',
  borderRadius: '6px',
  p: 'calc($$floatingMargin / $$spaceDivider) $$floatingMargin',
  transition: 'background-color ease-in-out .15s',
  maxHeight: '42px',
  gridRow: 1,
  gridColumn: 1,
  '@mobile-md': {
    fontSize: '$xs',
  },
  '& span': {
    color: 'inherit',
  },
  hocus: {
    backgroundColor: 'rgba($colors$toolbar-glow / .1)',
    '& span': {
      color: '$transparent',
      background: 'linear-gradient(to right, $$gradientStart, $$gradientEnd)',
      backgroundClip: 'text',
    },
  },

  variants: {
    home: {
      true: {
        alignSelf: 'flex-start',
        gap: 'calc($$floatingMargin / $$spaceDivider)',
        '& span': {
          color: '$transparent',
          background:
            'linear-gradient(to right, $$gradientStart, $$gradientEnd)',
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
  minHeight: '42px',
  maxHeight: '42px',
  visible: 'flex',
  alignItems: 'center',
  marginInline: 0,
  paddingInline: 0,
  listStyle: 'none',
  justifyContent: 'flex-end',
  gap: 'calc($$floatingMargin / $$spaceDivider)',
  gridRow: 1,
  gridColumn: 2,

  '@tablet-sm': {
    gap: 0,
    justifyContent: 'flex-start',
    gridColumn: '3 / 4',
  },

  '& li': {
    height: '100%',
    maxHeight: '42px',
  },

  variants: {
    links: {
      true: {
        maxHeight: 0,
        opacity: 0,
        gridRow: 2,
        gridColumn: '1 / 3',
        userSelect: 'none',
        visibility: 'hidden',
        pointerEvents: 'none',
        justifyContent: 'flex-start',
        transition: 'all ease-in-out .2s',
        '@tablet-sm': {
          maxHeight: 'unset',
          opacity: 1,
          gridRow: 1,
          gridColumn: '2 / 3',
          visible: 'flex',
          justifyContent: 'flex-end',
          gap: 'calc($$floatingMargin / $$spaceDivider)',
          transitionDelay: 0,
        },
      },
    },
    expanded: {
      true: {},
    },
  },

  compoundVariants: [
    {
      links: true,
      expanded: true,
      css: {
        visible: 'flex',
        maxHeight: 'unset',
        opacity: 1,
        gap: 'calc($$floatingMargin / $$spaceDivider)',
        transitionDelay: '.1s',
      },
    },
  ],
});
