import '@/styles/globals.scss';

import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import { type PropsWithChildren } from 'react';

// import { BackToTop } from '@/components/molecules/back-to-top/back-to-top';
// import { Footer } from '@/components/molecules/footer/footer';
// import { Main } from '@/components/molecules/main';
import { Header } from '@/components/header';
import { Main } from '@/components/main';
import { SocialLinks } from '@/components/social-links';
import { Providers } from '@/providers';
import { InterVariable, ManropeVariable } from '@/styles/fonts';
import cx from '@/utils/cx';
import { getStaticMetadata } from '@/utils/metadata';

import { Meta } from './meta';

export const metadata = {
  ...getStaticMetadata({
    title: 'Jahir Fiquitiva – Full-stack Software Engineer',
    description:
      // eslint-disable-next-line max-len
      "I'm a passionate and creative full-stack software engineer from Colombia 🇨🇴. Visit my website to learn more about me and my projects",
    keywords: [
      'jahir fiquitiva',
      'jahir',
      'fiquitiva',
      'jahirfiquitiva',
      'open-source',
      'full-stack',
      'software engineer',
      'colombia',
      'bio',
      'developer',
      'portfolio',
      'development',
      'android',
      'web',
    ],
  }),
};

const { UMAMI_WEBSITE_ID: umamiWebsiteId = '' } = process.env;
export default function RootLayout(props: PropsWithChildren) {
  return (
    <html
      lang={'en'}
      className={cx(`${InterVariable.variable} ${ManropeVariable.variable}`)}
      suppressHydrationWarning
    >
      <head>
        <Meta />
        <Script
          async
          defer
          src={'https://umami.jahir.dev/script.js'}
          data-website-id={umamiWebsiteId}
          data-domains={'jahir.dev'}
        />
      </head>
      <body>
        <Providers>
          <Header />
          <Main>{props.children}</Main>
          {/*
          <Footer />
          <BackToTop /> */}
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
