// import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import { ThemeProvider } from '@/providers/theme';
import { FC } from '@/types';
import { darkTheme } from '~/stitches';
import '@/styles/globals.scss';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextThemeProvider
      attribute={'class'}
      defaultTheme={'system'}
      value={{
        light: 'light',
        dark: darkTheme.className,
      }}
      disableTransitionOnChange>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </NextThemeProvider>
  );
};

export default App;
