import { createStitches } from '@stitches/react';
import type { CSS } from '@stitches/react';

import { fontSizes, utils, colors, darkThemeColors, breakpoints } from '@/stitches';

const systemFont =
  // eslint-disable-next-line max-len
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export const { config, createTheme, css, getCssText, globalCss, styled, theme } = createStitches({
  theme: {
    colors,
    sizes: {
      'max-site-width': '768px',
    },
    fontSizes,
    fonts: {
      system: systemFont,
      inter: `Inter, ${systemFont}`,
      manrope: `Manrope, Inter, ${systemFont}`,
    },
  },
  utils,
  media: breakpoints,
});

export const darkTheme = createTheme('dark', {
  colors: darkThemeColors,
});

export type StitchesCSS = CSS<typeof config>;
