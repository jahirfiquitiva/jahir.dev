import '@/styles/globals.scss';

import Script from 'next/script';
import { type PropsWithChildren } from 'react';

import { Main } from '@/components/atoms/main';
import { Footer } from '@/components/molecules/footer';
import { Header } from '@/components/molecules/header';
import { Providers } from '@/providers';
import { Inter, Manrope, MonoLisa } from '@/styles/fonts';
import cx from '@/utils/cx';
import { createMetadata } from '@/utils/metadata';

import { Meta } from './meta';

export const metadata = {
  ...createMetadata({
    title: 'Jahir Fiquitiva – Frontend Software Engineer',
    description:
      // eslint-disable-next-line @stylistic/max-len
      "I'm a passionate and creative frontend software engineer from Colombia 🇨🇴. Visit my website to learn more about me and my projects",
    keywords: [
      'jahir fiquitiva',
      'jahir',
      'fiquitiva',
      'jahirfiquitiva',
      'open-source',
      'full-stack',
      'frontend',
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

const { UMAMI_WEBSITE_ID: umamiWebsiteId = '', IS_TEMPLATE = 'true' } =
  process.env;
export default function RootLayout(props: PropsWithChildren) {
  return (
    <html
      id={'page'}
      lang={'en'}
      className={cx(
        Inter.variable,
        Manrope.variable,
        MonoLisa.variable,
        IS_TEMPLATE === 'true' ? 'template' : '',
      )}
      suppressHydrationWarning
    >
      <head>
        <Meta />
        <Script
          src={'https://umami.jahir.dev/script.js'}
          data-website-id={umamiWebsiteId}
          data-domains={'jahir.dev'}
          strategy={'lazyOnload'}
        />
      </head>
      <body>
        <Providers>
          <Header />
          <Main>{props.children}</Main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
