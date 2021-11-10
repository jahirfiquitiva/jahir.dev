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
      minWidth: spacing,
      letterSpacing: {
        button: '0.03125rem', // 0.5px
        fab: '0.0625rem', // 1px
      },
      outline: {
        accent: ['2px solid var(--accent)', '0px'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-textshadow'),
  ],
};
