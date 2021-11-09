const BASE_FONT_SIZE = 1; // rem

const multiplyFontSize = (multiplier) => {
  return `${BASE_FONT_SIZE * multiplier}rem`;
};

module.exports = {
  tiny: multiplyFontSize(0.85),
  base: multiplyFontSize(1),
  xs: multiplyFontSize(1),
  sm: multiplyFontSize(1.25),
  md: multiplyFontSize(1.5),
  lg: multiplyFontSize(1.75),
  xl: multiplyFontSize(2),
  '2xl': multiplyFontSize(2.25),
  '3xl': multiplyFontSize(2.5),
};
