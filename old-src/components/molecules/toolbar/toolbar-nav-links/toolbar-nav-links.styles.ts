import { Link } from '@/old/components/core';
import { gradientVariants } from '@/old/stitches/utils/gradient';
import { styled, type StitchesCSS } from '~/stitches';

const spanCss: StitchesCSS = {
  color: '$transparent',
  background: 'linear-gradient(to right, $$gradientStart, $$gradientEnd)',
  backgroundClip: 'text',
};

const activeCss: StitchesCSS = {
  backgroundColor: 'rgba($colors$accent-shadow / .1)',
  '& span': spanCss,
};

export const ToolbarLink = styled(Link, {
  height: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  verticalAlign: 'middle',
  useFont: 'manrope',
  fontWeight: 700,
  fontSize: '$2xs',
  color: '$text-secondary',
  borderRadius: '$space$6',
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
  '&[aria-current="page"]': activeCss,
  hocus: activeCss,

  variants: {
    home: {
      true: {
        gradient: 'brand-to-blue',
        alignSelf: 'flex-start',
        gap: 'calc($$floatingMargin / $$spaceDivider)',
        '& span': spanCss,
      },
    },
    gradient: gradientVariants(),
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
