import { PaletteColors } from 'react-palette';

export interface ColorData {
  vibrant?: string;
  lightVibrant?: string;
}

const getColorFromPalette = (
  palette?: PaletteColors | null,
  isDark?: boolean,
  darkColor?: string | null,
): string | null => {
  if (!palette) return null;
  if (isDark && darkColor) return darkColor;
  const { lightVibrant: colorLight = null, vibrant: color = null } = palette;
  return (isDark ? colorLight : color) || color;
};

export default getColorFromPalette;
