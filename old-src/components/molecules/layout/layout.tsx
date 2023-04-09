import dynamic from 'next/dynamic';

import type { FC } from '@/old/types';

import { Toolbar } from './../toolbar';
import { Main } from './layout.styles';

const BackToTop = dynamic(
  () => import('./../back-to-top').then((component) => component.BackToTop),
  { ssr: false },
);

const Footer = dynamic(
  () => import('./../footer').then((component) => component.Footer),
  { ssr: false },
);

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
