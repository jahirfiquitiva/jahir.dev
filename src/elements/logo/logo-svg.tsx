/* eslint-disable max-len */
import { Component } from '~/elements/fc';

export const LogoSvg: Component = (props) => {
  return (
    <svg viewBox={'0 0 24 24'} xmlns={'http://www.w3.org/2000/svg'} {...props}>
      <path
        d={
          'M19 2.9C17.1 1 14.6 0 12 0S6.9 1 5 2.9C1.1 6.8 1.1 13.1 5 17l7 7 7-7c3.9-3.9 3.9-10.2 0-14.1zM7.5 6.8V6h4.4c-.5.4-1 1-1.1 1.6H8.3c-.4 0-.8-.3-.8-.8zm8.6 3.7c0 .5-.4.8-.8.8h-1.7c-.5 0-.8.4-.8.8v1.2c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-2h.8c.5 0 .8.4.8.8v1.2c0 .5.4.8.8.8.5 0 .8-.4.8-.8v-1.2c0-1.4 1.1-2.5 2.5-2.5H16zm.4-3.7c0 .5-.4.8-.8.8h-2c-.5 0-.8.4-.8.8v.8c-.7.1-1.3.5-1.6 1V8.4c0-1.4 1.1-2.5 2.5-2.5h2.8z'
        }
        fill={'var(--fill-color, var(--accent, #3867d6)'}
      />
    </svg>
  );
};
