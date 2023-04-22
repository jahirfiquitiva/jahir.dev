/* eslint-disable max-len */
import type { ComponentProps } from 'react';

export const Logo = (props: ComponentProps<'svg'> & { fill?: string }) => {
  return (
    <svg
      className={'logo'}
      viewBox={'0 0 32 32'}
      xmlns={'http://www.w3.org/2000/svg'}
      width={24}
      height={24}
      {...props}
    >
      <path
        d={
          'M25.4 3.9C22.8 1.3 19.4 0 16 0S9.2 1.3 6.6 3.9C1.5 9 1.5 17.5 6.6 22.6L16 32l9.4-9.4c5.1-5.1 5.1-13.6 0-18.7zM10 9.1V8h5.8c-.7.5-1.3 1.3-1.4 2.2h-3.3c-.6 0-1.1-.5-1.1-1.1zM21.5 14c0 .6-.5 1.1-1.1 1.1h-2.2c-.6 0-1.1.5-1.1 1.1v1.6c0 1.8-1.5 3.3-3.3 3.3s-3.3-1.5-3.3-3.3v-2.7h1.1c.6 0 1.1.5 1.1 1.1v1.6c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1v-1.6c0-1.8 1.5-3.3 3.3-3.3h3.3zm.5-4.9c0 .6-.5 1.1-1.1 1.1h-2.7c-.6 0-1.1.5-1.1 1.1v1.1c-.9.2-1.7.7-2.2 1.4v-2.6c0-1.8 1.5-3.3 3.3-3.3H22z'
        }
        fill={props.style?.fill || props.fill || 'inherit'}
      />
    </svg>
  );
};
