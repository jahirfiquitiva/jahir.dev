'use client';

import { useMemo } from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';
import { useTheme } from '@/providers/theme-provider';
import { tw } from '@/utils/cx';

import { loading, moon, sun } from '../icons';

const ThemeToggleButton = tw.button`
  flex
  items-center
  justify-center
  min-h-11
  min-w-11
  p-2
  rounded-1.5
  transition
  hocus:bg-toolbar-highlight
`;

export const ThemeToggle = () => {
  const hasMounted = useHasMounted();
  const { isDark, toggleTheme } = useTheme();

  const buttonText = useMemo<string>(() => {
    const theme = isDark ? 'light' : 'dark';
    return 'Enable ' + theme + ' theme';
  }, [isDark]);

  const iconPath = useMemo<string>(() => {
    if (!hasMounted) return loading;
    if (!isDark) return moon;
    return sun;
  }, [hasMounted, isDark]);

  return (
    <ThemeToggleButton
      onClick={toggleTheme}
      disabled={!hasMounted}
      title={buttonText}
    >
      <svg
        viewBox={'0 0 24 24'}
        role={'presentation'}
        className={'size-6 text-accent fill-accent'}
        aria-hidden={'true'}
      >
        <path className={'fill-current'} d={iconPath}></path>
      </svg>
    </ThemeToggleButton>
  );
};
