import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { Footer } from './footer';
import { Toolbar } from './toolbar';

import { BackToTop } from '~/components/atoms/complex';
import { DynamicMetaTags } from '~/components/blocks';
import { Component, PageProps, defaultKeywords, mediaQueries } from '~/types';

const defaultSiteDescription =
  'Passionate and creative full-stack software engineer based in Colombia ' +
  '\uD83C\uDDE8\uD83C\uDDF4.\n' +
  'This website includes information about me, my skills and my projects.';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 1rem;

  ${mediaQueries.tablet.xl} {
    padding: 0;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-duration: 300ms;
    animation-delay: 150ms;
    animation-fill-mode: backwards;
  }
`;

const defaultMetaTags = {
  title: 'Jahir Fiquitiva 💎',
  description: defaultSiteDescription,
  keywords: defaultKeywords,
};

export const Page: Component<PageProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <>
      <DynamicMetaTags {...defaultMetaTags} {...otherProps} />

      <Toolbar />
      <Main>{children}</Main>
      <Footer />

      <BackToTop />
    </>
  );
};
