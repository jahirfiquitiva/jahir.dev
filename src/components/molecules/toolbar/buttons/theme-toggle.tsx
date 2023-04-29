'use client';

import { cx } from 'classix';
import { useMemo } from 'react';

import { mdiLoading, moonOutline, sunOutline } from '@/components/icons';
import { useHasMounted } from '@/hooks/use-has-mounted';
import { useTheme } from '@/providers/theme-provider';

import { ToolbarButton, ToolbarButtonIcon } from './buttons.styles';

export const ThemeToggle = () => {
  const hasMounted = useHasMounted();
  const { isDark, toggleTheme } = useTheme();

  const themeText = useMemo<string>(() => {
    if (!isDark) return 'dark';
    return 'light';
  }, [isDark]);

  const iconPath = useMemo<string>(() => {
    if (!hasMounted) return mdiLoading;
    if (!isDark) return moonOutline;
    return sunOutline;
  }, [hasMounted, isDark]);

  return (
    <ToolbarButton
      title={`Enable ${themeText} theme`}
      onClick={toggleTheme}
      disabled={!hasMounted}
    >
      <ToolbarButtonIcon
        path={iconPath}
        size={0.9}
        className={cx(!hasMounted && 'motion-safe:animate-spin')}
      />
    </ToolbarButton>
  );
};
