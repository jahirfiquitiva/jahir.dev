import type { CSS } from '@stitches/react';

const hoverUtils = {
  hover: (styles: CSS) => ({
    '@hover': {
      '&:hover': styles,
    },
  }),
  focus: (styles: CSS) => ({
    '@hover': {
      '&:focus': styles,
    },
  }),
  hocus: (styles: CSS) => ({
    '@hover': {
      '&:hover, &:focus': styles,
    },
  }),
};

export default hoverUtils;
