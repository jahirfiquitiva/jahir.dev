import { CSSProperties } from 'react';

import hexToRGB from '~/utils/colors/hex-to-rgb';
import buildStyles from '~/utils/styles/build-styles';

export const buildChipStyles = (color?: string | null): CSSProperties => {
  if (!color) return {};
  return buildStyles({
    '--bg-color': hexToRGB(color, 0.12),
    '--border-color': hexToRGB(color, 0.5),
  });
};
