const baseRemSize = 16; // 1rem = 16px

const pixelsOptions = [
  2, 3, 4, 6, 8, 10, 11, 12, 14, 16, 18, 20, 24, 26, 28, 30, 32, 36, 40, 48, 52,
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
