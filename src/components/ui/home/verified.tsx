/* eslint-disable @stylistic/max-len */
import { canRunAction as isProd } from '@/actions/utils';

export const Verified = () => {
  if (!isProd) return null;
  return (
    <svg
      viewBox={'0 0 24 24'}
      role={'presentation'}
      className={'size-6 mt-0.5 pointer-events-none select-none'}
      aria-hidden={'true'}
    >
      <path
        d={
          'M22 12.1c0-1.4-.9-2.7-2.2-3.3.5-1.4.2-2.9-.8-3.9s-2.5-1.3-3.9-.8c-.7-1.3-1.9-2.2-3.3-2.2s-2.7.9-3.4 2.2c-1.4-.5-2.9-.2-3.9.8s-1.3 2.5-.8 3.9c-1.3.7-2.2 1.9-2.2 3.3s.9 2.7 2.2 3.3c-.5 1.4-.2 2.9.8 3.9s2.5 1.3 3.9.8c.7 1.3 1.9 2.2 3.3 2.2s2.7-.9 3.3-2.2c1.4.5 2.9.2 3.9-.8s1.3-2.5.8-3.9c1.4-.6 2.3-1.8 2.3-3.3zm-11.7 4.2-3.7-3.7L8 11.2l2.3 2.3L15 8.2l1.5 1.4-6.2 6.7z'
        }
        style={{ fill: 'rgb(29, 155, 240)' }}
      ></path>
      <path
        d={'m10.3 16.3-3.7-3.7L8 11.2l2.3 2.3L15 8.2l1.5 1.4-6.2 6.7z'}
        style={{ fill: 'rgb(255, 255, 255)' }}
      ></path>
    </svg>
  );
};
