import dynamic from 'next/dynamic';

import { useHasMounted } from '@/hooks/useHasMounted';
import type { FC } from '@/types';
import { styled, keyframes, type StitchesCSS } from '~/stitches';

import { Toolbar } from './toolbar';

const BackToTop = dynamic(
  () => import('./BackToTop').then((component) => component.BackToTop),
  { ssr: false },
);

const Footer = dynamic(
  () => import('./footer').then((component) => component.Footer),
  { ssr: false },
);

const pageTransition = keyframes({
  '0%': { transform: 'scale(0.975)', opacity: 0 },
  '100%': { transform: 'scale(1)', opacity: 1 },
});

const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  zIndex: 0,
  pt: 'calc($$totalToolbarHeight + $$verticalContentPadding)',
  pb: '$$verticalContentPadding',
  '@tablet-sm': {
    pt: 'calc($$totalToolbarHeight + $$verticalContentPadding + 4px)',
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
const useInvertedStyles = (): StitchesCSS | undefined => {
  const hasMounted = useHasMounted();
  if (hasMounted && !hostRegex.test(window?.location?.hostname || ''))
    return invertedStyles;
  return {};
};

export const Layout: FC = (props) => {
  // TODO: Enable when ready
  const invertedStyles = {}; // useInvertedStyles();
  return (
    <>
      <Toolbar css={invertedStyles} />
      <Main css={invertedStyles}>{props.children}</Main>
      <Footer css={invertedStyles} />
      <BackToTop css={invertedStyles} />
    </>
  );
};
