import styled from '@emotion/styled';
import { Footer } from '~/blocks/footer';
import { BackToTop } from '~/new-components/atoms/complex';
import { Toolbar, DynamicMetaTags } from '~/new-components/blocks';
import { Component, PageProps, mediaQueries, defaultKeywords } from '~/types';

const defaultSiteDescription =
  'Passionate and creative full-stack software engineer based in Colombia ' +
  '\uD83C\uDDE8\uD83C\uDDF4.\n' +
  'This website contains information about me, my skills and my projects.';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: calc(var(--toolbar-height) + 1.2rem);
`;

const SiteContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  max-width: 768px; /* calc(var(--max-site-width) - 0.8rem) */
  margin: 0 auto;
  padding: 0 1rem 1.6rem;

  ${mediaQueries.tablet.xl} {
    padding: 0 0 1.6rem;
  }
`;

export const Page: Component<PageProps> = (props) => {
  const {
    children,
    title = 'Jahir Fiquitiva 💎',
    description = defaultSiteDescription,
    keywords = defaultKeywords,
    image,
    exactUrl,
    siteType,
    metaImageStyle,
  } = props;

  return (
    <>
      <DynamicMetaTags
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        exactUrl={exactUrl}
        siteType={siteType}
        metaImageStyle={metaImageStyle}
      />

      <Toolbar />

      <PageContainer>
        <SiteContent>{children}</SiteContent>
        <Footer />
      </PageContainer>

      <BackToTop />
    </>
  );
};
