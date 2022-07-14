import { useMemo } from 'react';

import { useTheme } from '@/providers/theme';
import { icons } from '@/utils';

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
    if (!themeReady || !isDark) return icons.moonOutline;
    return icons.sunOutline;
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
