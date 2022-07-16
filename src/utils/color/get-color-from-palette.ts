import type { PaletteColors } from 'react-palette';

export interface ColorData {
  vibrant?: string;
  lightVibrant?: string;
}

export const getColorFromPalette = (
  palette?: PaletteColors | null,
  isDark?: boolean,
  darkColor?: string | null,
  colorVariant: 'Vibrant' | 'Muted' = 'Vibrant',
): string | null => {
  if (!palette) return null;
  if (isDark && darkColor) return darkColor;
  const color = palette[colorVariant.toLowerCase()] || null;
  return (isDark ? palette[`light${colorVariant}`] : color) || color;
};
