import type { PropertyValue } from '@stitches/react';

const visiblityUtils = {
  hidden: () => ({
    display: 'none',
    visibility: 'hidden',
    pointerEvents: 'none',
    userSelect: 'none',
  }),
  visible: (display: PropertyValue<'display'>) => ({
    display,
    visibility: 'visible',
    pointerEvents: 'auto',
    userSelect: 'auto',
  }),
  hocus: (styles: unknown) => ({
    '&:hover, &:focus': styles,
  }),
};

export default visiblityUtils;
