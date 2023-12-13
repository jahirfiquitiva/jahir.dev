'use client';

import { useMemo } from 'react';

import darkCode from '@/assets/images/code/code-dark.png';
import lightCode from '@/assets/images/code/code-light.png';
import { Img } from '@/components/core/img';
import { useHasMounted } from '@/hooks/use-has-mounted';
import { useTheme } from '@/providers/theme-provider';
import cx from '@/utils/cx';

export const CodeImage = () => {
  const hasMounted = useHasMounted();
  const { isDark } = useTheme();

  const image = useMemo(() => {
    if (!hasMounted) darkCode;
    return isDark ? darkCode : lightCode;
  }, [hasMounted, isDark]);

  return (
    <Img
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
    />
  );
};
