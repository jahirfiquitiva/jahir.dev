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
  const { isDark } = useTheme();

  const image = useMemo(() => {
    if (!hasMounted) darkCode;
    return isDark ? darkCode : lightCode;
  }, [hasMounted, isDark]);

  return (
    <ZoomableImg
      src={image}
      alt={"Preview of Jahir's VSCodium configuration"}
      className={cx(
        'filter transition-colors',
        'rounded-8 bg-[#4474BE]',
        hasMounted ? '' : 'motion-safe:animate-pulse',
        hasMounted ? 'saturate-100' : 'saturate-0',
        hasMounted ? 'opacity-100' : 'opacity-50',
      )}
      placeholder={'blur'}
      zoomable
    />
  );
};
