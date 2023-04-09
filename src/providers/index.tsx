'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { PropsWithChildren } from 'react';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

import { ThemeProvider } from './theme';

export function Providers(props: PropsWithChildren) {
  return (
    <NextThemeProvider
      attribute={'class'}
      defaultTheme={'system'}
      value={{
        light: 'light',
        dark: 'dark',
      }}
    >
      <ThemeProvider>
        <BalancerProvider>{props.children}</BalancerProvider>
      </ThemeProvider>
    </NextThemeProvider>
  );
}
