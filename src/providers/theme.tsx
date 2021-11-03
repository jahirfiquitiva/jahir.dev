import { useTheme as useNextTheme } from 'next-themes';
import { createContext, useContext, useState, useEffect } from 'react';

import { Component, ComponentProps } from '~/elements/base/fc';

export interface ThemeContextValue {
  isDark?: boolean;
  toggleTheme?: () => void;
}

export interface ThemeProps extends ThemeContextValue, ComponentProps {}

const ThemeContext = createContext<ThemeContextValue>({ isDark: false });

export const ThemeProvider: Component<ThemeProps> = (props) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useNextTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const { children } = props;

  const themeContextValue: ThemeContextValue = {
    isDark: resolvedTheme === 'dark',
    toggleTheme: () => {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    },
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const themeState = useContext(ThemeContext);

  if (themeState === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return {
    isDark: themeState.isDark || false,
    toggleTheme: themeState.toggleTheme,
  };
};
