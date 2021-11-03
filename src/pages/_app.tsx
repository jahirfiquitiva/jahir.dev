/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AppProps } from 'next/app';
import { FC } from 'react';

import { ThemeProvider } from '~/providers/theme';
import '~/styles/global.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
