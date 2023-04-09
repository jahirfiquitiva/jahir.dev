import { useHasMounted } from '@/hooks/use-has-mounted';
import { styled, keyframes, type StitchesCSS } from '~/stitches';

const pageTransition = keyframes({
  '0%': { transform: 'scale(0.975)', opacity: 0 },
  '100%': { transform: 'scale(1)', opacity: 1 },
});

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  zIndex: 0,
  pt: 'calc($$totalToolbarHeight + $$verticalContentPadding + $space$4)',
  pb: '$$verticalContentPadding',
  gap: '$64',
  '@tablet-sm': {
    pt: 'calc($$totalToolbarHeight + $$verticalContentPadding + $space$12)',
  },

  canAnimate: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    animationName: pageTransition,
    animationDuration: '300ms',
    animationDelay: '150ms',
    animationFillMode: 'backwards',
  },
});

const invertedStyles: StitchesCSS = {
  '&, & *': {
    pointerEvents: 'none',
    userSelect: 'none',
    filter: 'saturate(30) invert(1.5)',
    '&::before': {
      zIndex: 9999,
      content: 'Please change the styling and colors to match your own style',
    },
  },
};

// eslint-disable-next-line no-useless-escape
const allowlist = ['localhost', 'jahir\.dev', 'jahirfiquitiva'];
const hostRegex = new RegExp(allowlist.join('|'));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useInvertedStyles = (): StitchesCSS | undefined => {
  const hasMounted = useHasMounted();
  if (hasMounted && !hostRegex.test(window?.location?.hostname || ''))
    return invertedStyles;
  return {};
};
