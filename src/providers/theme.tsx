import { useTheme as useNextTheme } from 'next-themes';
import { createContext, useContext } from 'react';

import useHasMounted from '~/hooks/useHasMounted';
import { Component } from '~/types';

export interface ThemeContextValue {
  isDark: boolean;
  themeReady: boolean;
  toggleTheme?: () => void;
}

const defaultContextState: ThemeContextValue = {
  isDark: false,
  themeReady: false,
};

const ThemeContext = createContext<ThemeContextValue>(defaultContextState);

export const ThemeProvider: Component = (props) => {
  const mounted = useHasMounted();
  const { theme, resolvedTheme, setTheme } = useNextTheme();

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
  return useContext(ThemeContext) || defaultContextState;
};
