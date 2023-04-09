import { useMemo } from 'react';

import { moonOutline, sunOutline } from '@/old/components/icons';
import { useTheme } from '@/old/providers/theme';

import { ToolbarButton } from './toolbar-buttons.styles';

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
    if (!themeReady || !isDark) return moonOutline;
    return sunOutline;
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
