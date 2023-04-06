import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { Inter, Manrope } from 'next/font/google';
import Head from 'next/head';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useEffect } from 'react';

import { ThemeProvider } from '@/providers/theme';
import type { FC } from '@/types';
import { darkTheme, globalStyles } from '~/stitches';
import '@/styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  preload: true,
  variable: '--fonts-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  preload: true,
  variable: '--fonts-manrope',
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    globalStyles();
  }, []);
  
  return (
    <>
      <Head>
        <meta charSet={'UTF-8'} />
        <meta   
          name={'viewport'}
          content={'width=device-width, initial-scale=1.0'}
        />
        <meta httpEquiv={'x-ua-compatible'} content={'ie=edge'} />
      </Head>
      {/* eslint-disable-next-line */}
      <style jsx global>{`
        :root {
          --fonts-inter: ${inter.style.fontFamily}, var(--fonts-system);
          --fonts-manrope: ${manrope.style.fontFamily}, var(--fonts-inter);
        }
      `}</style>
      <NextThemeProvider
        attribute={'class'}
        defaultTheme={'system'}
        value={{
          light: 'light',
          dark: darkTheme.className,
        }}
      >
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </NextThemeProvider>
      <Analytics />
    </>
  );
};

export default App;
