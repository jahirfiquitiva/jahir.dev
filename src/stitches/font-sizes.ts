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
  '3xl': `${baseFontSize * 2.25}rem`, // h1
  '2xl': `${baseFontSize * 2}rem`, // h2
  xl: `${baseFontSize * 1.75}rem`, // h3
  lg: `${baseFontSize * 1.5}rem`, // h4
  md: `${baseFontSize * 1.25}rem`, // h5
  sm: `${baseFontSize * 1.125}rem`, // h6
  xs: `${baseFontSize}rem`, // body, p
  '2xs': `${baseFontSize * 0.921875}rem`, // small
  '3xs': `${baseFontSize * 0.84375}rem`, // (?)
};
