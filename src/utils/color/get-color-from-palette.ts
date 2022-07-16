import type { PaletteColors } from 'react-palette';

export interface ColorData {
  vibrant?: string;
  lightVibrant?: string;
}

export const getColorFromPalette = (
  palette?: PaletteColors | null,
  isDark?: boolean,
  darkColor?: string | null,
): string | null => {
  if (!palette) return null;
  if (isDark && darkColor) return darkColor;
  const { lightMuted: colorLight = null, muted: color = null } = palette;
  return (isDark ? colorLight : color) || color;
};
