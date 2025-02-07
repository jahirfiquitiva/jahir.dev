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
          title={'Bluesky'}
          href={'https://bsky.jahir.dev/'}
          iconPath={
            'M6.902 5.067c2.063 1.55 4.283 4.69 5.098 6.376.815-1.686 3.035-4.827 5.098-6.376C18.588 3.949 21 3.084 21 5.837c0 .549-.315 4.617-.5 5.277-.642 2.296-2.984 2.882-5.066 2.527 3.64.62 4.566 2.672 2.566 4.725-3.798 3.897-5.46-.978-5.885-2.228-.078-.229-.114-.336-.115-.245 0-.09-.037.016-.115.245-.426 1.25-2.087 6.125-5.885 2.228-2-2.053-1.074-4.105 2.566-4.724-2.082.354-4.424-.232-5.066-2.528-.185-.66-.5-4.728-.5-5.278 0-2.752 2.413-1.887 3.902-.77Z'
          }
          className={
            'hocus:text-[#1185FE] hocus:dark:text-[#409DFE] hocus:bg-[#e7f3ff] dark:hocus:bg-[#031b33]'
          }
        />
      </li>
      <li>
        <SocialLink
          title={'Get in Touch'}
          href={'/contact'}
          iconPath={
            'm20 8-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z'
          }
          className={
            'hocus:text-[#356AC4] hocus:dark:text-[#5591f5] hocus:bg-[#ecf3fe] dark:hocus:bg-[#142849]'
          }
        />
      </li>
    </ul>
  );
};
