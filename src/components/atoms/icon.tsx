import type { ComponentProps } from 'react';

import cx from '@/utils/cx';

type IconProps = ComponentProps<'svg'> & { path: string };

export const Icon = ({ path, className, ...props }: IconProps) => {
  return (
    <svg
      viewBox={'0 0 24 24'}
      role={'presentation'}
      className={cx('size-6 fill-inherit', className)}
      aria-hidden={'true'}
      {...props}
    >
      <path className={'fill-current'} d={path} />
    </svg>
  );
};
