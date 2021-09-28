import styled from '@emotion/styled';
import Head from 'next/head';

import { Footer } from '~/blocks/footer';
import { Toolbar } from '~/blocks/toolbar';
import { MetaTags } from '~/components/metatags';
import { Component } from '~/elements/base/fc';
import { PageProps, mediaQueries } from '~/types';

const defaultSiteDescription =
  'Passionate and creative full-stack software engineer from Colombia ' +
  '\uD83C\uDDE8\uD83C\uDDF4.\n' +
  'This website contains information about me, my skills and my projects.';

const fonts = [
  'inter/inter-v3-latin-regular.woff2',
  'inter/inter-v3-latin-500.woff2',
  'manrope/manrope-v4-latin-500.woff2',
  'manrope/manrope-v4-latin-600.woff2',
  'manrope/manrope-v4-latin-700.woff2',
  'fira-code/fira-code-v10-latin-regular.woff2',
  'fira-code/fira-code-v10-latin-500.woff2',
];

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const SiteContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: calc(var(--max-site-width) - 0.8rem);
  margin: 0 auto;
  padding: calc(var(--toolbar-height) + 1.6rem) 1rem 0;

  ${mediaQueries.tablet.lg} {
    padding: calc(var(--toolbar-height) + 1.6rem) 0.4rem 0;
  }

  ${mediaQueries.tablet.xl} {
    padding: calc(var(--toolbar-height) + 1.6rem) 0 0;
  }
`;

export const Page: Component<PageProps> = (props) => {
  const {
    children,
    title = 'Jahir Fiquitiva 💎',
    description = defaultSiteDescription,
    keywords = [],
    image,
    exactUrl,
    siteType,
    metaImageStyle,
  } = props;

  return (
    <>
      <MetaTags
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        exactUrl={exactUrl}
        siteType={siteType}
        metaImageStyle={metaImageStyle}
      />

      <Head>
        {fonts.map((it, i) => {
          return (
            <link
              rel={'preload'}
              href={`/static/fonts/${it}`}
              as={'font'}
              crossOrigin={'anonymous'}
              key={`font-${i}`}
            />
          );
        })}
      </Head>

      <header>
        <Toolbar />
      </header>
      <PageContainer>
        <SiteContent>{children}</SiteContent>
        <Footer />
      </PageContainer>
    </>
  );
};
