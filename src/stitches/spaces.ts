const baseRemSize = 16; // 1rem = 16px

const pixelsOptions = [
  0, 1, 2, 3, 4, 6, 8, 10, 11, 12, 14, 16, 18, 20, 24, 26, 28, 30, 32, 36, 38, 40, 48, 52,
  56,
] as const;

type PixelsOption = typeof pixelsOptions[number];
type PixelsOptionValue = `${number}rem`;

type SpacesObject = { [Key in PixelsOption]?: PixelsOptionValue };

const getSpaces = (): SpacesObject => {
  const obj: SpacesObject = {};
  pixelsOptions.forEach((pixels) => {
    obj[pixels] = `${pixels / baseRemSize}rem`;
  });
  return obj;
};

export const spaces = getSpaces();

console.error(spaces);

/*
{
  '0': '0rem',
  '1': '0.0625rem',
  '2': '0.125rem', x
  '3': '0.1875rem', x
  '4': '0.25rem', x
  '6': '0.375rem', x
  '8': '0.5rem', x
  '10': '0.625rem', x
  '11': '0.6875rem', x
  '12': '0.75rem', x
  '14': '0.875rem',
  '16': '1rem', x
  '18': '1.125rem', x
  '20': '1.25rem', x
  '24': '1.5rem', x
  '26': '1.625rem', x
  '28': '1.75rem',
  '30': '1.875rem', x
  '32': '2rem',
  '36': '2.25rem',
  '38': '2.375rem', x
  '40': '2.5rem', x
  '48': '3rem',
  '52': '3.25rem', x
  '56': '3.5rem'
}
*/

// .1rem => $2
// .2rem => $3
// .4rem => $6
// .6rem => $10
// .7rem => $11
// .8rem => $12
// 1.2rem => $20
// 1.6rem => $26
// 2.4rem => $38
// 3.2rem => $52






