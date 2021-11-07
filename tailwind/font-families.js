/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  sans: ['Inter', ...fontFamily.sans],
  manrope: ['Manrope', 'Inter', ...fontFamily.sans],
  mono: ['Fira Code', ...fontFamily.mono],
};
