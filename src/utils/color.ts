import { colord } from 'colord';

export const hexToRgb = (
  hex?: string | null,
  alpha?: number,
  numbersOnly?: boolean,
): string | null => {
  if (!hex) return null;
  let color = colord(hex);
  if (!numbersOnly) color = color.alpha(alpha === 0 ? 0 : alpha || 1);
  const { r, g, b, a } = color.toRgb();
  if (numbersOnly) return `${r} ${g} ${b}`;
  if (alpha) {
    return `rgba(${r} ${g} ${b} / ${a})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};
