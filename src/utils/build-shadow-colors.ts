import { CSSProperties } from 'react';

import buildStyles from '~/utils/build-styles';
import hexToRGB from '~/utils/hex-to-rgb';

const buildShadowColors = (
  color?: string,
  shadowOpacity?: number,
  borderOpacity?: number,
): CSSProperties => {
  if (!color) return {};
  return buildStyles({
    '--shadow-color': hexToRGB(color, shadowOpacity || 0.15),
    '--border-color': hexToRGB(color, borderOpacity || 0.2),
    '--dashed-color': hexToRGB(color, 0.75),
    '--bg-color': hexToRGB(color, 0.1),
    '--hl-color': color,
  });
};

export default buildShadowColors;
