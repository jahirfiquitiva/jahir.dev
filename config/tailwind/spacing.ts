const baseRemSize = 16; // 1rem = 16px

const pixelsOptions = [
  1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64,
];

const getSpaces = () => {
  const obj: Record<string, string> = {};
  pixelsOptions.forEach((pixels) => {
    obj[pixels] = `${pixels / baseRemSize}rem`;
  });
  return obj;
};

export const spaces = getSpaces();
