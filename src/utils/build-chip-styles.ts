import { CSSProperties } from 'react';

import buildStyles from '~/utils/build-styles';
import hexToRGB from '~/utils/hex-to-rgb';

export const buildChipStyles = (color?: string | null): CSSProperties => {
  if (!color) return {};
  return buildStyles({
    '--bg-color': hexToRGB(color, 0.2),
    '--border-color': hexToRGB(color, 0.6),
  });
};
