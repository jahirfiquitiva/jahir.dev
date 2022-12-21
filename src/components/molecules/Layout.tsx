import dynamic from 'next/dynamic';

import type { FC } from '@/types';
import { styled, keyframes } from '~/stitches';

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

export const Layout: FC = (props) => {
  return (
    <>
      <Toolbar />
      <Main>{props.children}</Main>
      <Footer />
      <BackToTop />
    </>
  );
};
