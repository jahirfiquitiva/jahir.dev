import { fontFamily } from 'tailwindcss/defaultTheme';

import { colors } from './colors';
import { fontSizes as fontSize } from './font-sizes';
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
    fontSize,
    screens: {
      default: '0px',
      'mobile-sm': '320px',
      'mobile-md': '375px',
      'mobile-lg': '425px',
      'tablet-sm': '596px',
      'tablet-md': '768px',
      'tablet-lg': '792px',
      desktop: '960px',
    },
    extend: {
      fontFamily: {
        sans: sansFontFamily,
        manrope: ['var(--font-manrope)', ...sansFontFamily],
      },
      fontWeight: {
        normal: '450',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: [
    {
      pattern: /(from|to)-gradient-(brand|blue|green|yellow|orange|red|purple)/,
      variants: ['dark', 'hover', 'hover:[&>span]'],
    },
  ],
};
