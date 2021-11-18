import { useMemo } from 'react';

import { ToolbarButton } from './toolbar-button';

import { useTheme } from '~/providers/theme';

export const ThemeToggle = () => {
  const { isDark, themeReady, toggleTheme } = useTheme();

  const themeText = useMemo<string>(() => {
    if (!themeReady || !isDark) return 'dark';
    return 'light';
  }, [themeReady, isDark]);

  const buttonText = useMemo<string>(() => {
    return ['Button to enable', themeText, 'theme'].join(' ');
  }, [themeText]);

  const themeEmoji = useMemo<string>(() => {
    if (!themeReady || !isDark) return '🌚';
    return '🌞';
  }, [themeReady, isDark]);

  if (!themeReady) return null;

  return (
    <li>
      <ToolbarButton title={buttonText} onClick={toggleTheme}>
        {themeEmoji}
      </ToolbarButton>
    </li>
  );
};
