/* eslint-disable max-len */
import type { ComponentProps } from 'react';

import cx from '@/utils/cx';

interface LogoProps extends ComponentProps<'svg'> {
  bgClassName?: string;
  fgClassName?: string;
}

export const Logo = ({ bgClassName, fgClassName, ...props }: LogoProps) => {
  return (
    <svg
      viewBox={'0 0 32 32'}
      role={'presentation'}
      aria-hidden={'true'}
      {...props}
      className={cx('size-6', props.className)}
    >
      <path
        className={cx('fill-accent', bgClassName)}
        fill={props.style?.fill || props.fill || 'inherit'}
        d={
          'M25.4,3.9C22.8,1.3,19.4,0,16,0S9.2,1.3,6.6,3.9C1.5,9,1.5,17.5,6.6,22.6L16,32l9.4-9.4C30.5,17.5,30.5,9,25.4,3.9z'
        }
      ></path>
      <path
        className={cx('fill-on-accent', fgClassName)}
        d={
          'M10,9.1V8h5.8c-0.7,0.5-1.3,1.3-1.4,2.2h-3.3C10.5,10.2,10,9.7,10,9.1z M21.5,14c0,0.6-0.5,1.1-1.1,1.1h-2.2c-0.6,0-1.1,0.5-1.1,1.1v1.6c0,1.8-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3v-2.7h1.1c0.6,0,1.1,0.5,1.1,1.1v1.6c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1v-1.6c0-1.8,1.5-3.3,3.3-3.3h3.3L21.5,14z M22,9.1c0,0.6-0.5,1.1-1.1,1.1h-2.7c-0.6,0-1.1,0.5-1.1,1.1v1.1c-0.9,0.2-1.7,0.7-2.2,1.4v-2.6c0-1.8,1.5-3.3,3.3-3.3H22L22,9.1z'
        }
      ></path>
    </svg>
  );
};
