'use client';
/* eslint-disable max-len */
import type { CSSProperties, ComponentProps } from 'react';

import { useHasMounted } from '@/hooks/use-has-mounted';
import cx from '@/utils/cx';

export const VerifiedIcon = (props: ComponentProps<'svg'>) => {
  const hasMounted = useHasMounted();
  if (!hasMounted || window.location.host !== 'jahir.dev') return null;
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      xmlSpace={'preserve'}
      style={
        {
          enableBackground: 'new 0 0 24 24',
        } as CSSProperties
      }
      viewBox={'0 0 24 24'}
      {...props}
      className={cx('w-6 h-6', props.className)}
    >
      <path
        d={
          'M22 12.1c0-1.4-.9-2.7-2.2-3.3.5-1.4.2-2.9-.8-3.9s-2.5-1.3-3.9-.8c-.7-1.3-1.9-2.2-3.3-2.2s-2.7.9-3.4 2.2c-1.4-.5-2.9-.2-3.9.8s-1.3 2.5-.8 3.9c-1.3.7-2.2 1.9-2.2 3.3s.9 2.7 2.2 3.3c-.5 1.4-.2 2.9.8 3.9s2.5 1.3 3.9.8c.7 1.3 1.9 2.2 3.3 2.2s2.7-.9 3.3-2.2c1.4.5 2.9.2 3.9-.8s1.3-2.5.8-3.9c1.4-.6 2.3-1.8 2.3-3.3zm-11.7 4.2-3.7-3.7L8 11.2l2.3 2.3L15 8.2l1.5 1.4-6.2 6.7z'
        }
        style={{
          fill: '#1d9bf0',
        }}
      />
      <path
        d={'m10.3 16.3-3.7-3.7L8 11.2l2.3 2.3L15 8.2l1.5 1.4-6.2 6.7z'}
        style={{
          fill: '#fff',
        }}
      />
    </svg>
  );
};
