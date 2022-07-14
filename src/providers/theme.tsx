import { useTheme as useNextTheme } from 'next-themes';
import { createContext, useContext, useState, useEffect, useMemo } from 'react';

import type { FC } from '@/types';

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

export const ThemeProvider: FC = (props) => {
  const { theme, resolvedTheme, setTheme } = useNextTheme();

  const actualTheme = useMemo(
    () => resolvedTheme || theme,
    [resolvedTheme, theme],
  );

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

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
