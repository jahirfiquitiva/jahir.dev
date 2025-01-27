/* eslint-disable @stylistic/max-len */
import type { ComponentProps } from 'react';

import { github } from '@/components/icons';
import cx from '@/utils/cx';

import { SocialLink } from './social-link';

export const SocialLinks = (props: ComponentProps<'ul'>) => {
  return (
    <ul className={cx('flex flex-row items-center gap-1', props.className)}>
      <li>
        <SocialLink
          title={'GitHub'}
          href={'https://github.com/jahirfiquitiva'}
          iconPath={github}
          className={
            'hocus:text-[#333] hocus:dark:text-[#ebebeb] hocus:bg-[#ebebeb] dark:hocus:bg-[#333]'
          }
        />
      </li>
      <li>
        <SocialLink
          title={'LinkedIn'}
          href={'https://linkedin.com/in/jahirfiquitiva'}
          iconPath={
            'M21 21v-7.2c0-2.4-2-4.4-4.4-4.4-1.1 0-2.5.7-3.1 1.8V9.7H9.7V21h3.8v-6.7c0-1 .8-1.9 1.9-1.9 1 0 1.9.8 1.9 1.9V21H21M5.3 7.6c1.3 0 2.3-1 2.3-2.3C7.6 4 6.5 3 5.3 3 4 3 3 4 3 5.3c0 1.2 1 2.3 2.3 2.3M7.2 21V9.7H3.4V21h3.8z'
          }
          className={
            'hocus:text-[#0C66C2] hocus:dark:text-[#5494d4] hocus:bg-[#e7f0f9] dark:hocus:bg-[#031f3a]'
          }
        />
      </li>
      <li>
        <SocialLink
          title={'𝕏 (formerly Twitter)'}
          aria-label={'𝕏 (formerly Twitter)'}
          href={'https://twitter.com/jahirfiquitiva'}
          className={cx(
            'leading-none',
            'hocus:text-[#1471a9] hocus:dark:text-[#1da1f2] hocus:bg-[#e8f6fe] dark:hocus:bg-[#093049]',
          )}
        >
          <span
            className={cx(
              'font-manrope font-semibold',
              'size-5.5 select-none',
              'flex items-center justify-center',
              'leading-none text-xl text-center',
            )}
          >
            𝕏
          </span>
        </SocialLink>
      </li>
      <li>
        <SocialLink
          title={'Instagram'}
          href={'https://instagram.com/jahirfiquitiva'}
          iconPath={
            'M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z'
          }
          className={
            'hocus:text-[#ae3077] hocus:dark:text-[#d472a9] hocus:bg-[#f9ebf3] dark:hocus:bg-[#3a1028]'
          }
        />
      </li>
      <li>
        <SocialLink
          title={'Email'}
          href={'/contact'}
          iconPath={
            'm20 8-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z'
          }
          className={
            'hocus:text-[#356AC4] hocus:dark:text-[#5591f5] hocus:bg-[#ecf3fe] dark:hocus:bg-[#142849]'
          }
        />
      </li>
      <li>
        <SocialLink
          title={'Bluesky'}
          href={'https://bsky.jahir.dev/'}
          iconPath={
            'M12 10.8c-1.087 -2.114 -4.046 -6.053 -6.798 -7.995C2.566 0.944 1.561 1.266 0.902 1.565 0.139 1.908 0 3.08 0 3.768c0 0.69 0.378 5.65 0.624 6.479 0.815 2.736 3.713 3.66 6.383 3.364 0.136 -0.02 0.275 -0.039 0.415 -0.056 -0.138 0.022 -0.276 0.04 -0.415 0.056 -3.912 0.58 -7.387 2.005 -2.83 7.078 5.013 5.19 6.87 -1.113 7.823 -4.308 0.953 3.195 2.05 9.271 7.733 4.308 4.267 -4.308 1.172 -6.498 -2.74 -7.078a8.741 8.741 0 0 1 -0.415 -0.056c0.14 0.017 0.279 0.036 0.415 0.056 2.67 0.297 5.568 -0.628 6.383 -3.364 0.246 -0.828 0.624 -5.79 0.624 -6.478 0 -0.69 -0.139 -1.861 -0.902 -2.206 -0.659 -0.298 -1.664 -0.62 -4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z'
          }
          className={
            'hocus:text-[#0085ff] hocus:dark:text-[#339dff] hocus:bg-[#e6f3ff] dark:hocus:bg-[#001b33]'
          }
        />
      </li>
    </ul>
  );
};
