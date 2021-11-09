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
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
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
    extend: {
      minHeight: spacing,
      letterSpacing: {
        button: '0.028575em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')], //, require('@tailwindcss/typography')],
};
