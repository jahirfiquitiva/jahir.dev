import { CSSProperties } from 'react';

import hexToRGB from '~/utils/colors/hex-to-rgb';
import buildStyles from '~/utils/styles/build-styles';

interface Opacities {
  bg?: number;
  border?: number;
}

const buildShadowStyles = (
  color?: string | null,
  darkMode?: boolean,
  opacities?: Opacities,
): CSSProperties => {
  if (!color) return {};
  return buildStyles({
    '--shadow-color': hexToRGB(color).replace(/rgb\(/g, '').replace(/\)/g, ''),
    '--border-color': hexToRGB(color, opacities?.border || 0.2),
    '--bg-color': hexToRGB(color, darkMode ? opacities?.bg || 0.1 : 0.05),
  });
};

export default buildShadowStyles;
