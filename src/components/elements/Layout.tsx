import { Toolbar, Footer } from '@/components/molecules';
import type { FC } from '@/types';
import { styled, keyframes } from '~/stitches';

const pageTransition = keyframes({
  '0%': { transform: 'scale(0.975)', opacity: 0 },
  '100%': { transform: 'scale(1)', opacity: 1 },
});

const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  pt: '64px',
  '@tablet-sm': {
    pt: '72px',
  },
  '@media (prefers-reduced-motion: no-preference)': {
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
    </>
  );
};
