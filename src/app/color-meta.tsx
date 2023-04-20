'use client';

import { useMemo } from 'react';

import { useTheme } from '@/providers/theme-provider';

export const ColorMeta = () => {
  const { isDark, themeReady } = useTheme();

  const siteColor = useMemo<string>(() => {
    if (!themeReady || !isDark) return '#ebf0fb';
    return '#080f1e';
  }, [themeReady, isDark]);

  return (
    <>
      <meta name={'theme-color'} content={siteColor} />
      <meta name={'msapplication-TileColor'} content={siteColor} />
      <meta name={'msapplication-navbutton-color'} content={siteColor} />
      <meta
        name={'apple-mobile-web-app-status-bar-style'}
        content={siteColor}
      />
    </>
  );
};
