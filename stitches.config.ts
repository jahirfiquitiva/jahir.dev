import { createStitches } from '@stitches/react';
import { fontSizes, utils, colors, darkThemeColors, breakpoints } from '@/stitches';

const systemFont =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export const { config, createTheme, css, getCssText, globalCss, styled, theme } = createStitches({
  theme: {
    colors,
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
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

export const darkTheme = createTheme({
  colors: darkThemeColors,
});
