import type { CSS } from '@stitches/react';

import { rainbowColorsArray } from '@/stitches/colors';
import type { RainbowColors } from '@/stitches/colors';

type ShadowVariantsCss = { [Key in RainbowColors]?: CSS };

export const shadowVariants = (): ShadowVariantsCss => {
  const shadowVariants: ShadowVariantsCss = {};
  rainbowColorsArray.forEach((key) => {
    shadowVariants[key] = {
      shadow: key,
    };
  });
  return shadowVariants;
};

const shadowUtils = {
  shadow: (option: RainbowColors) => ({
    $$textShadowColor: `$colors$shadow-${option}`,
  }),
};

export default shadowUtils;
