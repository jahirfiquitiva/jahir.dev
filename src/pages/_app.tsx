// import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import { ThemeProvider } from '@/providers/theme';
import { SpotlightProvider } from '@/providers/spotlight';
import type { FC } from '@/types';
import { darkTheme, globalStyles } from '~/stitches';
import '@/styles/globals.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  globalStyles();
  return (
    <NextThemeProvider
      attribute={'class'}
      defaultTheme={'system'}
      value={{
        light: 'light',
        dark: darkTheme.className,
      }}
      disableTransitionOnChange
    >
      <ThemeProvider>
        <SpotlightProvider>
          <Component {...pageProps} />
        </SpotlightProvider>
      </ThemeProvider>
    </NextThemeProvider>
  );
};

export default App;
