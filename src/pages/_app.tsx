import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { FC } from 'react';

import { ThemeProvider } from '~/providers/theme';
import '~/styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextThemeProvider attribute={'class'} disableTransitionOnChange>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </NextThemeProvider>
  );
};

export default App;
