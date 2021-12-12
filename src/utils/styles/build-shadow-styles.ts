import { CSSProperties } from 'react';

import hexToRGB from '~/utils/colors/hex-to-rgb';
import buildStyles from '~/utils/styles/build-styles';

interface Opacities {
  shadow?: number;
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
    // '--dashed-color': hexToRGB(color, 0.5),
    // '--filter-color': hexToRGB(color, 0.7),
    '--bg-color': hexToRGB(color, darkMode ? opacities?.bg || 0.1 : 0.05),
    // '--hl-color': color,
  });
};

export default buildShadowStyles;
