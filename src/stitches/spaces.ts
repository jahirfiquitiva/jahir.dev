const baseRemSize = 16; // $16 = 16px

const pixelsOptions = [
  0, 1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 26, 28, 30, 32, 36, 40, 48, 52,
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

// .1rem => $2
// .2rem => $3
// .4rem => $6
// .6rem => $10
// .8rem => $12
// 1.2rem => $20
// 1.6rem => $26
// 3.2rem => $52