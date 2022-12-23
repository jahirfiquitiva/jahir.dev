import type { Palette, SwatchName } from '@/hooks';

export const getColorFromPalette = (
  palette?: Palette | null,
  isDark?: boolean,
  darkColor?: string | null,
  colorVariant: 'Vibrant' | 'Muted' = 'Vibrant',
): string | null => {
  if (!palette) return null;
  if (isDark && darkColor) return darkColor;
  const color = palette[`dark${colorVariant}`] || null;
  return (
    (isDark ? palette[colorVariant.toLowerCase() as SwatchName] : color) ||
    color
  );
};
