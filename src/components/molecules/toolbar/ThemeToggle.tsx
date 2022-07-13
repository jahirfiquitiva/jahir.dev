import { useMemo } from 'react';

import { useTheme } from '@/providers/theme';
import { customIconPaths } from '@/utils/icon-paths';

import { ToolbarButton } from './ToolbarButton';

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

  return (
    <li>
      <ToolbarButton
        title={buttonText}
        iconPath={themeReady ? iconPath : ''}
        iconSize={0.9}
        onClick={toggleTheme}
        disabled={!themeReady}
      />
    </li>
  );
};
