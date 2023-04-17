'use client';

import { cx } from 'classix';
import { useMemo } from 'react';

import darkCode from '@/assets/images/code/code-dark.png';
import lightCode from '@/assets/images/code/code-light.png';
import { useHasMounted } from '@/hooks/use-has-mounted';
import { useTheme } from '@/providers/theme-provider';

import { ZoomableImg } from '../../mdx/components/zoomable-img';

export const CodeImage = () => {
  const hasMounted = useHasMounted();
  const { themeReady, isDark } = useTheme();

  const image = useMemo(() => {
    if (!themeReady || !hasMounted) darkCode;
    return isDark ? darkCode : lightCode;
  }, [themeReady, hasMounted, isDark]);

  return (
    <ZoomableImg
      src={image}
      alt={"Preview of Jahir's VSCodium configuration"}
      className={cx(
        'filter transition-colors',
        'rounded-8',
        themeReady ? '' : 'motion-safe:animate-pulse',
        themeReady ? 'saturate-100' : 'saturate-0',
        themeReady ? 'opacity-100' : 'opacity-50',
      )}
      zoomable
    />
  );
};
