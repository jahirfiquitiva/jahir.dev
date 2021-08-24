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
    '--hl-color': color,
  });
};

export default buildShadowColors;
