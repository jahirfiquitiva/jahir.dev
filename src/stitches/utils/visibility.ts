import type { CSS, PropertyValue } from '@stitches/react';

const visiblityUtils = {
  hidden: (value?: boolean) =>
    value
      ? {
          display: 'none',
          visibility: 'hidden',
          pointerEvents: 'none',
          userSelect: 'none',
        }
      : {},
  visible: (display: PropertyValue<'display'>) => ({
    display,
    visibility: 'visible',
    pointerEvents: 'auto',
    userSelect: 'auto',
  }),
  dark: (styles: CSS) => ({
    '.dark &': styles,
  }),
};

export default visiblityUtils;
