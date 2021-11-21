/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const borderRadius = require('./tailwind/border-radius');
const { generateBoxShadows } = require('./tailwind/box-shadows');
const colors = require('./tailwind/colors');
const fontFamilies = require('./tailwind/font-families');
const fontSizes = require('./tailwind/font-sizes');
const spacing = require('./tailwind/spacing');
const viewports = require('./tailwind/viewports');

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    borderRadius,
    boxShadow: generateBoxShadows(),
    colors,
    fontFamily: fontFamilies,
    fontSize: fontSizes,
    screens: viewports,
    spacing,
    textShadow: {
      default:
        'var(--text-shadow-size) var(--text-shadow-size) 0 var(--text-shadow-color);',
      none: 'none',
    },
    extend: {
      minHeight: spacing,
      maxHeight: spacing,
      minWidth: spacing,
      maxWidth: {
        ...spacing,
        '3xl-w-padding': 'calc(48rem + 1.6rem)',
      },
      scale: {
        120: '1.20',
      },
      lineHeight: {
        relaxed: '1.75',
      },
      letterSpacing: {
        unset: 'unset',
        button: '0.03125rem', // 0.5px
        fab: '0.0625rem', // 1px
      },
      dropShadow: {
        'project-icon': '0 1px 2px var(--filter-color, var(--dashed-color))',
        'project-preview':
          '2px 3px 4px var(--filter-color, var(--dashed-color))',
      },
      outline: {
        accent: ['2px solid var(--accent)', '0px'],
      },
      transitionDuration: {
        0: '0ms',
        250: '250ms',
        350: '350ms',
        400: '400ms',
        450: '450ms',
      },
      transitionTimingFunction: {
        io: 'ease-in-out',
      },
      transitionDelay: {
        0: '0ms',
        50: '50ms',
      },
      opacity: {
        15: '0.15',
        85: '0.85',
      },
    },
  },
  corePlugins: {
    appearance: false,
    float: false,
    zIndex: false,
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-textshadow')],
};
