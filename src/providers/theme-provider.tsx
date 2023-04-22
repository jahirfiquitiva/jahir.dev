'use client';

import { useTheme as useNextTheme } from 'next-themes';
import {
  type PropsWithChildren,
  createContext,
  useContext,
  useMemo,
} from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';

export interface ThemeContextValue {
  isDark: boolean;
  themeReady: boolean;
  toggleTheme?: () => void;
  setTheme?: (theme: 'light' | 'dark') => void;
}

const defaultContextState: ThemeContextValue = {
  isDark: false,
  themeReady: false,
};

const ThemeContext = createContext<ThemeContextValue>(defaultContextState);

export const ThemeProvider = (props: PropsWithChildren) => {
  const mounted = useHasMounted();
  const { theme, resolvedTheme, setTheme } = useNextTheme();

  const actualTheme = useMemo(
    () => resolvedTheme || theme,
    [resolvedTheme, theme],
  );

  const themeContextValue: ThemeContextValue = {
    themeReady: mounted,
    isDark: actualTheme === 'dark',
    toggleTheme: () => {
      setTheme(actualTheme === 'dark' ? 'light' : 'dark');
    },
    setTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  return useContext(ThemeContext) || defaultContextState;
};
