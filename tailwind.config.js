import { fontFamily } from 'tailwindcss/defaultTheme';

import { colors } from './config/tailwind/colors';
import { fontSizes as fontSize } from './config/tailwind/font-sizes';
import { spaces as spacing } from './config/tailwind/spacing';

const sansFontFamily = ['var(--font-inter)', 'Inter', ...fontFamily.sans];

const breakpoints = {
  default: '0px',
  'mobile-sm': '320px',
  'mobile-md': '375px',
  'mobile-lg': '425px',
  'tablet-sm': '596px',
  'tablet-md': '768px',
  'tablet-lg': '792px',
  desktop: '960px',
};

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
    screens: breakpoints,
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.secondary-txt'),
            a: {
              color: theme('colors.accent'),
              textDecoration: 'none',
              '&:hover,&:focus': {
                color: theme('colors.accent-dark/1'),
              },
            },
          },
        },
        quoteless: {
          css: {
            blockquote: { 'font-style': 'normal' },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      }),
      fontFamily: {
        sans: sansFontFamily,
        manrope: ['var(--font-manrope)', 'Manrope', ...sansFontFamily],
        mono: ['monospace', ...fontFamily.mono],
      },
      fontWeight: {
        normal: '450',
      },
      lineHeight: {
        relaxed: '1.75',
      },
      saturate: {
        125: '1.25',
      },
      dropShadow: {
        doodle: [
          '-4px -4px 2px var(--color-illustrations-shadow)',
          '4px 4px 2px var(--color-illustrations-shadow)',
          '4px -4px 2px var(--color-illustrations-shadow)',
          '-4px 4px 2px var(--color-illustrations-shadow)',
        ],
      },
      transformOrigin: {
        waving: '70% 70%',
      },
      transitionTimingFunction: { eio: 'ease-in-out', DEFAULT: 'ease-in-out' },
      keyframes: {
        'page-transition': {
          '0%': { transform: 'scale(0.975)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        scroll: {
          '0%': { transform: 'translateX(1.5rem)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        wave: {
          'from, 50%, to': { transform: 'rotate(0deg)' },
          '10%, 30%': { transform: 'rotate(-10deg)' },
          '20%': { transform: 'rotate(12deg)' },
          '40%': { transform: 'rotate(9deg)' },
        },
      },
      animation: {
        'page-transition': 'page-transition 300ms ease-in-out backwards',
        scroll: 'scroll 15s linear infinite',
        wave: 'wave 2.5s infinite',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  corePlugins: {
    float: false,
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-hocus')],
  safelist: [
    {
      pattern: /(from|to)-gradient-(brand|blue|green|yellow|orange|red|purple)/,
      variants: [
        'dark',
        'hocus',
        'group-hocus/link',
        '[[aria-current="page"]_&]',
      ],
    },
    {
      pattern:
        /decoration-gradient-(brand|blue|green|yellow|orange|red|purple)/,
      variants: ['hocus'],
    }
  ],
};
