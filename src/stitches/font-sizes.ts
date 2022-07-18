type FontSizeName =
  | '3xl'
  | '2xl'
  | 'xl'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs'
  | '2xs'
  | '3xs';
type FontSizeValue = `${number}rem`;
type FontSizesObject = { [Key in FontSizeName]?: FontSizeValue };

const baseFontSize = 1;

export const fontSizes: FontSizesObject = {
  '3xl': `${baseFontSize * 2.25}rem`,
  '2xl': `${baseFontSize * 2}rem`,
  xl: `${baseFontSize * 1.75}rem`,
  lg: `${baseFontSize * 1.5}rem`,
  md: `${baseFontSize * 1.25}rem`,
  sm: `${baseFontSize * 1.125}rem`,
  xs: `${baseFontSize}rem`,
  '2xs': `${baseFontSize * 0.921875}rem`,
  '3xs': `${baseFontSize * 0.84375}rem`,
};
