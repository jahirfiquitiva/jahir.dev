import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalMeta } from '@/components/molecules';
import { ThemeProvider } from '@/providers/theme';
import type { FC } from '@/types';
import { darkTheme, globalStyles } from '~/stitches';
import '@/styles/globals.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  globalStyles();
  return (
    <>
      <Head>
        <GlobalMeta />
      </Head>
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
    </>
  );
};

export default App;
