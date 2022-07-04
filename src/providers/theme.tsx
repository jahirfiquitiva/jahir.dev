import { useTheme as useNextTheme } from 'next-themes';
import { createContext, useContext, useState, useEffect } from 'react';

import { FC } from '@/types';

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
  const { theme, resolvedTheme, setTheme } = useNextTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const themeContextValue: ThemeContextValue = {
    themeReady: mounted,
    isDark: (resolvedTheme || theme) === 'dark',
    toggleTheme: () => {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    },
  };

  return <ThemeContext.Provider value={themeContextValue}>{props.children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
  return useContext(ThemeContext) || defaultContextState;
};
