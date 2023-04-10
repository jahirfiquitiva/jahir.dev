'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { type PropsWithChildren } from 'react';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

import { ThemeProvider } from './theme';

const themes =
  process.env.IS_TEMPLATE === 'true'
    ? { light: 'light-inverted', dark: 'dark-inverted' }
    : { light: 'light', dark: 'dark' };

export function Providers(props: PropsWithChildren) {
  return (
    <NextThemeProvider
      attribute={'class'}
      defaultTheme={'system'}
      value={themes}
    >
      <ThemeProvider>
        <BalancerProvider>{props.children}</BalancerProvider>
      </ThemeProvider>
    </NextThemeProvider>
  );
}
