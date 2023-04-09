import { fontFamily } from 'tailwindcss/defaultTheme';

const sansFontFamily = ['var(--font-inter)', ...fontFamily.sans];

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
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
