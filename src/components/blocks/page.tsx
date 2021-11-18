import dynamic from 'next/dynamic';
import tw from 'twin.macro';

import { FadeIn } from './fade-in';

import { Toolbar, DynamicMetaTags } from '~/components/blocks';
import { Component, PageProps, defaultKeywords } from '~/types';

const DynamicFooter = dynamic<unknown>(
  () => import('~/components/blocks/footer').then((mod) => mod.Footer),
  { ssr: false },
);
const DynamicBackToTop = dynamic<unknown>(
  () =>
    import('~/components/atoms/complex/back-to-top').then(
      (mod) => mod.BackToTop,
    ),
  { ssr: false },
);

const defaultSiteDescription =
  'Passionate and creative full-stack software engineer based in Colombia ' +
  '\uD83C\uDDE8\uD83C\uDDF4.\n' +
  'This website includes information about me, my skills and my projects.';

const SiteContent = tw.main`
  flex flex-col flex-1
  w-full max-w-3xl
  mx-auto my-0
  px-10 py-0
  xl:(px-0)
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
      <SiteContent>
        <FadeIn>{children}</FadeIn>
      </SiteContent>
      <DynamicFooter />

      <DynamicBackToTop />
    </>
  );
};
