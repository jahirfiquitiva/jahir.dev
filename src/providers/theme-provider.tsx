'use client';

import { useTheme as useNextTheme } from 'next-themes';
import {
  type PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useEffect,
} from 'react';

import { THEME_COLOR_DARK, THEME_COLOR_LIGHT } from '@/utils/color';
import { colorMetaTags } from '@/utils/metadata';

interface ThemeContextValue {
  isDark: boolean;
  toggleTheme?: () => void;
}

const defaultContextState: ThemeContextValue = {
  isDark: false,
};

const ThemeContext = createContext<ThemeContextValue>(defaultContextState);

export const ThemeProvider = (props: PropsWithChildren) => {
  const { theme, resolvedTheme, setTheme } = useNextTheme();

  const actualTheme = useMemo(
    () => resolvedTheme || theme,
    [resolvedTheme, theme],
  );

  const themeContextValue: ThemeContextValue = {
    isDark: actualTheme === 'dark',
    toggleTheme: () => {
      setTheme(actualTheme === 'dark' ? 'light' : 'dark');
    },
  };

  useEffect(() => {
    colorMetaTags.forEach((tag) => {
      document.head
        .querySelector(`meta[name="${tag}"]`)
        ?.setAttribute(
          'content',
          actualTheme === 'dark' ? THEME_COLOR_DARK : THEME_COLOR_LIGHT,
        );
    });
  }, [actualTheme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => useContext(ThemeContext);
