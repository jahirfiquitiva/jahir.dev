/* eslint-disable @stylistic/max-len */
import type { ComponentProps } from 'react';

import { github } from '@/components/icons';
import cx from '@/utils/cx';

import { SocialLink } from './social-link';

export const SocialLinks = ({
  extended,
  ...props
}: ComponentProps<'ul'> & { extended?: boolean }) => {
  return (
    <ul
      className={cx(
        'flex gap-1.5',
        extended
          ? 'flex-col items-start w-full [&_>_li]:w-full divide-y divide-divider gap-0 hocus:divide-transparent'
          : 'flex-row items-center',
        props.className,
      )}
    >
      <li>
        <SocialLink
          title={'GitHub'}
          username={'@jahirfiquitiva'}
          href={'https://github.com/jahirfiquitiva'}
          iconPath={github}
          className={
            'hocus:text-[#333] hocus:dark:text-[#ebebeb] hocus:bg-[#ebebeb] dark:hocus:bg-[#333]'
          }
          extended={extended}
        />
      </li>
      <li>
        <SocialLink
          title={'LinkedIn'}
          username={'/in/jahirfiquitiva'}
          href={'https://linkedin.com/in/jahirfiquitiva'}
          iconPath={
            'M21 21v-7.2c0-2.4-2-4.4-4.4-4.4-1.1 0-2.5.7-3.1 1.8V9.7H9.7V21h3.8v-6.7c0-1 .8-1.9 1.9-1.9 1 0 1.9.8 1.9 1.9V21H21M5.3 7.6c1.3 0 2.3-1 2.3-2.3C7.6 4 6.5 3 5.3 3 4 3 3 4 3 5.3c0 1.2 1 2.3 2.3 2.3M7.2 21V9.7H3.4V21h3.8z'
          }
          className={
            'hocus:text-[#0C66C2] hocus:dark:text-[#5494d4] hocus:bg-[#e7f0f9] dark:hocus:bg-[#031f3a]'
          }
          extended={extended}
        />
      </li>
      <li>
        <SocialLink
          title={'𝕏 (formerly Twitter)'}
          aria-label={'𝕏 (formerly Twitter)'}
          extendedLabel={'Twitter'}
          username={'@jahirfiquitiva'}
          href={'https://twitter.com/jahirfiquitiva'}
          className={cx(
            'leading-none',
            'hocus:text-[#1471a9] hocus:dark:text-[#1da1f2] hocus:bg-[#e8f6fe] dark:hocus:bg-[#093049]',
          )}
          extended={extended}
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
          username={'@jahirfiquitiva'}
          href={'https://instagram.com/jahirfiquitiva'}
          iconPath={
            'M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z'
          }
          className={
            'hocus:text-[#ae3077] hocus:dark:text-[#d472a9] hocus:bg-[#f9ebf3] dark:hocus:bg-[#3a1028]'
          }
          extended={extended}
        />
      </li>
      <li>
        <SocialLink
          title={'Bluesky'}
          username={'@jahir.dev'}
          href={'https://bsky.jahir.dev/'}
          iconPath={
            'M6.902 5.067c2.063 1.55 4.283 4.69 5.098 6.376.815-1.686 3.035-4.827 5.098-6.376C18.588 3.949 21 3.084 21 5.837c0 .549-.315 4.617-.5 5.277-.642 2.296-2.984 2.882-5.066 2.527 3.64.62 4.566 2.672 2.566 4.725-3.798 3.897-5.46-.978-5.885-2.228-.078-.229-.114-.336-.115-.245 0-.09-.037.016-.115.245-.426 1.25-2.087 6.125-5.885 2.228-2-2.053-1.074-4.105 2.566-4.724-2.082.354-4.424-.232-5.066-2.528-.185-.66-.5-4.728-.5-5.278 0-2.752 2.413-1.887 3.902-.77Z'
          }
          className={
            'hocus:text-[#1185FE] hocus:dark:text-[#409DFE] hocus:bg-[#e7f3ff] dark:hocus:bg-[#031b33]'
          }
          extended={extended}
        />
      </li>
      <li>
        <SocialLink
          title={'Send Jahir an Email'}
          extendedLabel={'Email'}
          username={'hola@jahir.dev'}
          href={'mailto:hola@jahir.dev?subject=Hi%20Jahir!'}
          iconPath={
            'M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z'
          }
          className={
            'hocus:text-[#356AC4] hocus:dark:text-[#5591f5] hocus:bg-[#ecf3fe] dark:hocus:bg-[#142849]'
          }
          extended={extended}
        />
      </li>
    </ul>
  );
};
