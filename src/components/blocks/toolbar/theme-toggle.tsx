import { useMemo } from 'react';

import { ToolbarButton } from './toolbar-button';

import { useTheme } from '~/providers/theme';
import { customIconPaths } from '~/types';

export const ThemeToggle = () => {
  const { isDark, themeReady, toggleTheme } = useTheme();

  const themeText = useMemo<string>(() => {
    if (!themeReady || !isDark) return 'dark';
    return 'light';
  }, [themeReady, isDark]);

  const buttonText = useMemo<string>(() => {
    return ['Enable', themeText, 'theme'].join(' ');
  }, [themeText]);

  const iconPath = useMemo<string>(() => {
    if (!themeReady || !isDark) return customIconPaths.moonOutline;
    return customIconPaths.sunOutline;
  }, [themeReady, isDark]);

  if (!themeReady) return null;

  return (
    <li>
      <ToolbarButton
        title={buttonText}
        onClick={toggleTheme}
        icon={iconPath}
        iconSize={1}
      />
    </li>
  );
};
