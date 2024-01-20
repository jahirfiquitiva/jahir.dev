'use client';

import { useMemo } from 'react';

import { Icon } from '@/components/atoms/icon';
import { loading } from '@/components/icons';
import { useHasMounted } from '@/hooks/use-has-mounted';
import { useTheme } from '@/providers/theme-provider';
import cx, { tw } from '@/utils/cx';

const sun =
  // eslint-disable-next-line max-len
  'M12 6.5C8.9 6.5 6.5 9 6.5 12S9 17.5 12 17.5s5.5-2.5 5.5-5.5-2.4-5.5-5.5-5.5zm0 9c-2 0-3.5-1.6-3.5-3.5S10 8.5 12 8.5s3.5 1.6 3.5 3.5-1.5 3.5-3.5 3.5zM11 3.8V2c0-.6.4-1 1-1s1 .4 1 1v1.8c0 .6-.4 1-1 1s-1-.4-1-1zm2 16.4V22c0 .6-.4 1-1 1s-1-.4-1-1v-1.8c0-.6.4-1 1-1s1 .4 1 1zM4.2 5.6c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.3 1.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3s-.5-.1-.7-.3L4.2 5.6zm15.6 12.8c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3s-.5-.1-.7-.3l-1.3-1.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.3 1.3zM3.8 13H2c-.6 0-1-.4-1-1s.4-1 1-1h1.8c.6 0 1 .4 1 1s-.4 1-1 1zM23 12c0 .6-.4 1-1 1h-1.8c-.6 0-1-.4-1-1s.4-1 1-1H22c.6 0 1 .4 1 1zM6.9 17.1c.4.4.4 1 0 1.4l-1.3 1.3c-.2.2-.5.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4l1.3-1.3c.4-.4 1-.4 1.4 0zM17.1 6.9c-.4-.4-.4-1 0-1.4l1.3-1.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-1.3 1.3c-.2.2-.5.3-.7.3s-.5-.1-.7-.3z';

const moon =
  // eslint-disable-next-line max-len
  'M12 22h-.9c-2.7-.2-5.1-1.5-6.8-3.6-1.7-2.1-2.5-4.7-2.3-7.3.5-4.8 4.3-8.7 9.1-9.1.4 0 .8.2 1 .5.2.3.2.8-.1 1.1-1 1.3-1.3 2.9-1.1 4.5s1.1 3 2.4 3.9c2.1 1.6 5 1.6 7.1 0 .3-.2.7-.3 1.1-.1.3.2.5.6.5 1-.2 2.7-1.5 5.1-3.6 6.8-1.8 1.5-4 2.3-6.4 2.3zM9.3 4.4c-2.9 1-5 3.7-5.3 6.8-.2 2.1.4 4.2 1.8 5.9s3.3 2.7 5.4 2.9c2.1.2 4.2-.4 5.9-1.8 1.1-.9 1.9-2.1 2.4-3.4-2.5.9-5.3.5-7.5-1.1-1.7-1.3-2.8-3.1-3.2-5.3-.1-1.4 0-2.7.5-4z';

const sunMoon =
  // eslint-disable-next-line max-len
  'M16.4 11.1c-.4-.2-.8-.1-1.1.2-.7.7-1.8.7-2.5 0s-.8-1.9-.1-2.6c.3-.3.4-.7.2-1.1-.1-.4-.5-.6-.9-.6-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5c0-.4-.2-.8-.6-.9zM12 15c-1.7 0-3-1.3-3-3 0-1 .5-1.9 1.3-2.4-.1 1.1.3 2.3 1.2 3.2.8.8 1.9 1.1 3 1-.6.7-1.5 1.2-2.5 1.2zM11 4V2c0-.6.4-1 1-1s1 .4 1 1v2c0 .6-.4 1-1 1s-1-.4-1-1zm2 16v2c0 .6-.4 1-1 1s-1-.4-1-1v-2c0-.6.4-1 1-1s1 .4 1 1zM4.2 5.6c-.4-.4-.4-1 0-1.4s1-.4 1.4 0L7 5.6c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3s-.5-.1-.7-.3L4.2 5.6zm15.6 12.8c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3s-.5-.1-.7-.3L17 18.4c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.4 1.4zM4 13H2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1zm19-1c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1zM7 17c.4.4.4 1 0 1.4l-1.4 1.4c-.2.2-.5.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4L5.6 17c.4-.4 1-.4 1.4 0zM17 7c-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L18.4 7c-.2.2-.5.3-.7.3s-.5-.1-.7-.3z';

const ThemeToggleButton = tw.button`
  flex
  items-center
  justify-center
  min-h-11
  min-w-11
  p-2
  rounded-1.5
  transition
  text-accent
  hocus:bg-toolbar-highlight
  hocus:text-accent-dark
`;

export const ThemeToggle = () => {
  const hasMounted = useHasMounted();
  const { theme, isDark, toggleTheme } = useTheme();

  const { text, icon } = useMemo<{ text: string; icon: string }>(() => {
    if (!hasMounted) return { text: 'Switch theme', icon: loading };
    const themeText = theme === 'system' ? 'dark' : isDark ? 'light' : 'system';
    return {
      text: 'Enable ' + themeText + ' theme',
      icon: theme === 'system' ? moon : isDark ? sun : sunMoon,
    };
  }, [hasMounted, theme, isDark]);

  return (
    <ThemeToggleButton
      onClick={toggleTheme}
      disabled={!hasMounted}
      title={text}
      aria-label={text}
    >
      <Icon
        path={icon}
        className={cx('size-5', !hasMounted && 'animate-spin')}
      />
    </ThemeToggleButton>
  );
};
