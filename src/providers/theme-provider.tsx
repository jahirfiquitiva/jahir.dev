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

type ThemeOption = 'system' | 'light' | 'dark';
interface ThemeContextValue {
  theme: ThemeOption;
  isDark: boolean;
  toggleTheme?: () => void;
}

const defaultContextState: ThemeContextValue = {
  theme: 'system',
  isDark: false,
};

const ThemeContext = createContext<ThemeContextValue>(defaultContextState);

export const ThemeProvider = (props: PropsWithChildren) => {
  const { theme = 'system', resolvedTheme, setTheme } = useNextTheme();

  const actualTheme = useMemo(
    () => resolvedTheme || theme,
    [resolvedTheme, theme],
  );

  const themeContextValue: ThemeContextValue = {
    theme: theme as ThemeOption,
    isDark: actualTheme === 'dark',
    toggleTheme: () => {
      setTheme(
        theme === 'system' ? 'dark' : theme === 'dark' ? 'light' : 'system',
      );
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

export const useTheme = (): ThemeContextValue =>
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  useContext(ThemeContext) || defaultContextState;
