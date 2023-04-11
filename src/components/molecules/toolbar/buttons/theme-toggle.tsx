'use client';

import { cx } from 'classix';
import { useMemo } from 'react';

import { mdiLoading, moonOutline, sunOutline } from '@/components/icons';
import { useTheme } from '@/providers/theme';

import { ToolbarButton, ToolbarButtonIcon } from './buttons.styles';

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
    <ToolbarButton
      title={buttonText}
      onClick={toggleTheme}
      disabled={!themeReady}
    >
      <ToolbarButtonIcon
        path={themeReady ? iconPath : mdiLoading}
        size={0.9}
        className={cx(!themeReady && 'motion-safe:animate-spin')}
      />
    </ToolbarButton>
  );
};
