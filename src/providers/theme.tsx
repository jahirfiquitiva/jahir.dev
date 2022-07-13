import { useTheme as useNextTheme } from 'next-themes';
import { createContext, useContext, useState, useEffect } from 'react';

import type { FC } from '@/types';

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

export const ThemeProvider: FC = (props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useNextTheme();

  useEffect(() => setMounted(true), []);

  const themeContextValue: ThemeContextValue = {
    themeReady: mounted,
    isDark: theme === 'dark',
    toggleTheme: () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    },
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
