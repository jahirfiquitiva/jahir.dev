import { fontFamily } from 'tailwindcss/defaultTheme';

import { colors } from './colors';
import { spaces as spacing } from './spacing';

const sansFontFamily = ['var(--font-inter)', ...fontFamily.sans];

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    spacing,
    borderRadius: { ...spacing, none: 0, half: '50%', full: '9999px' },
    colors,
    extend: {
      fontFamily: {
        sans: sansFontFamily,
        manrope: ['var(--font-manrope)', ...sansFontFamily],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
};
