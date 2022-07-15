import type { NextPage } from 'next';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

import { Layout } from '@/components/elements';
import { ThemeProvider } from '@/providers/theme';
import type { FC } from '@/types';
import { darkTheme, globalStyles } from '~/stitches';
import '@/styles/globals.scss';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  globalStyles();

  return (
    <NextThemeProvider
      attribute={'class'}
      defaultTheme={'system'}
      value={{
        light: 'light',
        dark: darkTheme.className,
      }}
    >
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </NextThemeProvider>
  );
};

export default App;
