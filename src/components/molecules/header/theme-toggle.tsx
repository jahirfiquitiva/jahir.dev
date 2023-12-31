'use client';

import { useMemo } from 'react';

import { Icon } from '@/components/atoms/icon';
import { loading, moon, sun } from '@/components/icons';
import { useHasMounted } from '@/hooks/use-has-mounted';
import { useTheme } from '@/providers/theme-provider';
import cx, { tw } from '@/utils/cx';

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
      <Icon
        path={iconPath}
        className={cx(
          'size-5 text-accent fill-accent',
          !hasMounted && 'motion-safe:animate-spin',
        )}
      />
    </ThemeToggleButton>
  );
};
