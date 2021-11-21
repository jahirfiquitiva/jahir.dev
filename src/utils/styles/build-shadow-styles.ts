import { CSSProperties } from 'react';

import hexToRGB from '~/utils/colors/hex-to-rgb';
import buildStyles from '~/utils/styles/build-styles';

const buildShadowStyles = (
  color?: string | null,
  shadowOpacity?: number,
  borderOpacity?: number,
  darkMode?: boolean,
  bgOpacity?: number,
): CSSProperties => {
  if (!color) return {};
  return buildStyles({
    '--shadow-color': hexToRGB(color).replace(/rgb\(/g, '').replace(/\)/g, ''),
    '--border-color': hexToRGB(color, borderOpacity || 0.2),
    '--dashed-color': hexToRGB(color, 0.5),
    '--filter-color': hexToRGB(color, 0.7),
    '--bg-color': hexToRGB(color, darkMode ? bgOpacity || 0.1 : 0.05),
    '--hl-color': color,
  });
};

export default buildShadowStyles;
