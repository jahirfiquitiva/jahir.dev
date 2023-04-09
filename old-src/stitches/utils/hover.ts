import type { CSS } from '@stitches/react';

const hoverUtils = {
  canHover: (styles: CSS) => ({
    '@hover': styles,
  }),
  hover: (styles: CSS) => ({
    canHover: {
      '&:hover': styles,
    },
  }),
  focus: (styles: CSS) => ({
    canHover: {
      '&:focus': styles,
    },
  }),
  hocus: (styles: CSS) => ({
    canHover: {
      '&:hover, &:focus': styles,
    },
  }),
};

export default hoverUtils;
