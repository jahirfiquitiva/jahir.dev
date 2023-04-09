import { fontFamily } from 'tailwindcss/defaultTheme';

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
    extend: {
      colors: {
        accent: 'rgba(var(--color-accent) / <alpha-value>)',
      },
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
} 