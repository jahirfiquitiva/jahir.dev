import '@/styles/globals.scss';

import { Analytics } from '@vercel/analytics/react';
import { Inter, Manrope } from 'next/font/google';
import { type PropsWithChildren } from 'react';

import { BackToTop } from '@/components/molecules/back-to-top/back-to-top';
import { Footer } from '@/components/molecules/footer/footer';
import { Main } from '@/components/molecules/main';
import { Toolbar } from '@/components/molecules/toolbar/toolbar';
import { Providers } from '@/providers';
import { getStaticMetadata } from '@/utils/metadata';

import { Meta } from './meta';

const inter = Inter({
  subsets: ['latin'],
  preload: true,
  variable: '--font-inter',
  display: 'fallback',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'fallback',
});

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

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html
      lang={'en'}
      className={`${inter.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Meta />
      </head>
      <body className={'tablet-sm:overflow-y-auto'}>
        <Providers>
          <Toolbar />
          <Main>{props.children}</Main>
          <Footer />
          <BackToTop />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
