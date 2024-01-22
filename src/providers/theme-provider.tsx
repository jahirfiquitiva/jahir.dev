'use client';

import { useTheme as useNextTheme } from 'next-themes';
import {
  type PropsWithChildren,
  createContext,
  useContext,
  useEffect,
} from 'react';

import { THEME_COLOR_DARK, THEME_COLOR_LIGHT } from '@/utils/color';
import { colorMetaTags } from '@/utils/metadata';

export type ThemeOption = 'system' | 'light' | 'dark';
interface ThemeContextValue {
  theme: ThemeOption;
  isDark: boolean;
  setTheme?: (theme: ThemeOption) => void;
}

const defaultContextState: ThemeContextValue = {
  theme: 'system',
  isDark: false,
};

const ThemeContext = createContext<ThemeContextValue>(defaultContextState);

export const ThemeProvider = (props: PropsWithChildren) => {
  const { theme = 'system', resolvedTheme, setTheme } = useNextTheme();

  useEffect(() => {
    colorMetaTags.forEach((tag) => {
      document.head
        .querySelectorAll(`meta[name="${tag}"]`)
        .forEach((meta) =>
          meta.setAttribute(
            'content',
            resolvedTheme === 'dark' ? THEME_COLOR_DARK : THEME_COLOR_LIGHT,
          ),
        );
    });
  }, [resolvedTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme as ThemeOption,
        isDark: resolvedTheme === 'dark',
        setTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue =>
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  useContext(ThemeContext) || defaultContextState;
