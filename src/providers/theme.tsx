import { useTheme as useNextTheme } from 'next-themes';
import { createContext, useContext, useState, useEffect } from 'react';

import { Component, ComponentProps } from '~/types';

export interface ThemeContextValue {
  isDark: boolean;
  themeReady: boolean;
  toggleTheme?: () => void;
}

export interface ThemeProps extends ThemeContextValue, ComponentProps {}

const ThemeContext = createContext<ThemeContextValue>({
  isDark: false,
  themeReady: false,
});

export const ThemeProvider: Component<ThemeProps> = (props) => {
  const { theme, resolvedTheme, setTheme } = useNextTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { children } = props;

  const themeContextValue: ThemeContextValue = {
    themeReady: mounted,
    isDark: (resolvedTheme || theme) === 'dark',
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
  return themeState;
};
