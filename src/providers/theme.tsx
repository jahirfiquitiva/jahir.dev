import { createContext, useContext } from 'react';
import useDarkMode from 'use-dark-mode';

import { Component, ComponentProps } from '~/elements/fc';

export interface ThemeContextValue {
  isDark?: boolean;
  toggleTheme?: () => void;
}

export interface ThemeProps extends ThemeContextValue, ComponentProps {}

const ThemeContext = createContext<ThemeContextValue>({ isDark: false });

export const ThemeProvider: Component<ThemeProps> = (props) => {
  const { value: isDark, toggle: toggleTheme } = useDarkMode(false, {
    onChange: undefined,
  });
  const { children } = props;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
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
