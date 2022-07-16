export const hexToRGB = (hex?: string | null, alpha?: number): string => {
  if (!hex) return 'rgba(0 0 0 / 0)';
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r} ${g} ${b} / ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};
