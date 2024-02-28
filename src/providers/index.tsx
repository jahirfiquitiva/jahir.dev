'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { type PropsWithChildren } from 'react';

import { ThemeProvider } from './theme-provider';

export function Providers(props: PropsWithChildren) {
  return (
    <NextThemeProvider
      attribute={'class'}
      defaultTheme={'system'}
      enableColorScheme
      disableTransitionOnChange
    >
      <ThemeProvider>{props.children}</ThemeProvider>
    </NextThemeProvider>
  );
}
