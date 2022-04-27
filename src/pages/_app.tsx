import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { FC } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { ThemeProvider } from '~/providers/theme';
import '~/styles/globals.css';

const cache = createCache({ key: 'jf' });

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CacheProvider value={cache}>
      <NextThemeProvider attribute={'class'} disableTransitionOnChange>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </NextThemeProvider>
    </CacheProvider>
  );
};

export default App;
