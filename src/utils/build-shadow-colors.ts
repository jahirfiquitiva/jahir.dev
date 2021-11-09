import { CSSProperties } from 'react';

import buildStyles from '~/utils/build-styles';
import hexToRGB from '~/utils/hex-to-rgb';

const buildShadowColors = (
  color?: string,
  shadowOpacity?: number,
  borderOpacity?: number,
  darkMode?: boolean,
): CSSProperties => {
  if (!color) return {};
  return buildStyles({
    '--shadow-color': hexToRGB(color).replace(/rgb\(/g, '').replace(/\)/g, ''),
    '--shadow-color-full': hexToRGB(color, shadowOpacity || 0.15),
    '--border-color': hexToRGB(color, borderOpacity || 0.2),
    '--dashed-color': hexToRGB(color, 0.5),
    '--filter-color': hexToRGB(color, 0.7),
    '--bg-color': hexToRGB(color, darkMode ? 0.1 : 0.05),
    '--hl-color': color,
  });
};

export default buildShadowColors;
