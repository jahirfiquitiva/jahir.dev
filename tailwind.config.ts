import type { Config } from 'tailwindcss';
import twColors from 'tailwindcss/colors';
import { fontFamily, spacing } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import hocus from 'tailwindcss-hocus';

import { THEME_COLOR_LIGHT, THEME_COLOR_DARK } from './src/constants';

const reduceObjArray = <T>(objs: Array<T>) =>
  objs.reduce((r, c) => Object.assign(r, c), {});

const sansFontFamily = ['var(--font-inter)', 'Inter', ...fontFamily.sans];

const fontSize = {
  '2xl': '1.5625rem', // h1
  xl: '1.375rem', // h2
  lg: '1.25rem', // h3
  md: '1.125rem', // h4
  // h5: 1rem (defined in css)
  xs: '0.9375rem', // h6, body, p
  '2xs': '0.875rem', // small
  '3xs': '0.8125rem', // (?)
};

const breakpoints = {
  'mobile-md': '375px',
  'mobile-lg': '425px',
  'tablet-sm': '596px',
  'tablet-md': '768px',
  desktop: '960px',
};

const colors = [
  'background',
  'divider',
  'toolbar',
  'toolbar-highlight',
  'primary-txt',
  'secondary-txt',
  'tertiary-txt',
  'accent',
  'accent-dark',
  'on-accent',
];

const mappedColors = colors.map((color) => ({
  [color]: `var(--color-${color})`,
}));

const extendedSpacing = {
  ...spacing,
  px: '0.0625rem',
  '0.75': '0.1875rem',
  '5.5': '1.375rem',
  18: '4.5rem',
  21: '5.25rem',
  22: '5.5rem',
  30: '7.5rem',
};

const config: Config = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    fontSize,
    screens: breakpoints,
    spacing: extendedSpacing,
    borderRadius: {
      ...extendedSpacing,
      half: '50%',
      full: '9999px',
    },
    borderWidth: { ...extendedSpacing, DEFAULT: '0.0625rem' },
    colors: {
      transparent: 'rgba(0,0,0,0)',
      current: 'currentColor',
      inherit: 'inherit',
      black: twColors.black,
      white: twColors.white,
      blue: twColors.sky,
      green: twColors.green,
      yellow: twColors.yellow,
      orange: twColors.orange,
      red: twColors.rose,
      purple: twColors.violet,
      tint: {
        bg: 'rgba(var(--tint)/var(--opacity-tint-bg))',
        border: 'rgba(var(--tint)/var(--opacity-tint-border))',
      },
    },
    extend: {
      spacing: {
        nice: '69ch',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
      colors: {
        brand: {
          DEFAULT: '#3867D6',
          950: '#060A15',
          900: '#0B152B',
          800: '#162956',
          700: '#223E80',
          600: '#2D52AB',
          500: '#3867D6',
          400: '#6085DE',
          300: '#88A4E6',
          200: '#AFC2EF',
          100: '#D7E1F7',
          50: '#EBF0FB',
        },
        light: THEME_COLOR_LIGHT,
        dark: THEME_COLOR_DARK,
        ...reduceObjArray(mappedColors),
      },
      fontFamily: {
        sans: [
          sansFontFamily,
          {
            fontFeatureSettings:
              // eslint-disable-next-line max-len
              "'calt' 1, 'dlig' 1, 'case' 1, 'ccmp' 1, 'zero' 1, 'ss01' 1, 'ss02' 1, 'cv01' 1, 'cv03' 1, 'cv04' 1, 'cv06' 1, 'cv09' 1",
          },
        ],
        manrope: [
          ['var(--font-manrope)', 'Manrope', ...sansFontFamily],
          { fontFeatureSettings: "'calt' 1, 'zero' 1, 'dlig' 1" },
        ],
        mono: ['monospace', ...fontFamily.mono],
      },
      lineHeight: {
        relaxed: '1.75',
      },
      saturate: {
        125: '1.25',
      },
      dropShadow: {
        doodle: [
          '-0.1875rem -0.1875rem 0.125rem var(--tw-shadow-color)',
          '0.1875rem 0.1875rem 0.125rem var(--tw-shadow-color)',
          '0.1875rem -0.1875rem 0.125rem var(--tw-shadow-color)',
          '-0.1875rem 0.1875rem 0.125rem var(--tw-shadow-color)',
        ],
      },
      boxShadow: {
        'toolbar-hover': '0 0 8px 2px var(--tw-shadow-color)',
        'toolbar-elevated': '0 0 6px 1px var(--tw-shadow-color)',
      },
      textShadow: {
        none: 'none',
        DEFAULT: '0 0.0625rem 0.125rem var(--tw-shadow-color)',
      },
      ringWidth: {
        0: '0rem',
        1: '0.0625rem',
        2: '0.125rem',
        DEFAULT: '0.1875rem',
      },
      textDecorationThickness: {
        0: '0rem',
        1: '0.0625rem',
        2: '0.125rem',
        DEFAULT: '0.1875rem',
      },
      textUnderlineOffset: {
        0: '0rem',
        1: '0.0625rem',
        2: '0.125rem',
        DEFAULT: '0.1875rem',
      },
      transitionDuration: {
        '50': '50ms',
        '250': '250ms',
      },
      transitionDelay: {
        '50': '50ms',
        '250': '250ms',
      },
      transitionTimingFunction: {
        in: 'ease-in',
        out: 'ease-out',
        'in-out': 'ease-in-out',
        DEFAULT: 'ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: 'var(--end-opacity, 1)' },
        },
        scroll: {
          '0%': { transform: 'translate3d(1.5rem, 0, 0)' },
          '100%': { transform: 'translate3d(-100%, 0, 0)' },
        },
        wave: {
          'from, 50%, to': { transform: 'rotate(0deg)' },
          '10%, 30%': { transform: 'rotate(-10deg)' },
          '20%': { transform: 'rotate(12deg)' },
          '40%': { transform: 'rotate(9deg)' },
        },
        'music-bars': {
          '10%': {
            transform: 'scaleY(0.3)',
          },
          '30%': {
            transform: 'scaleY(1)',
          },
          '60%': {
            transform: 'scaleY(0.5)',
          },
          '80%': {
            transform: 'scaleY(0.75)',
          },
          '100%': {
            transform: 'scaleY(0.6)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-in-out 50ms both',
        scroll: 'scroll 15s linear infinite',
        wave: 'wave 2.5s infinite',
        'music-bars': 'music-bars 2.2s ease infinite alternate',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
    hocus,
  ],
  safelist: [
    'max-tablet-sm:overflow-hidden',
    {
      pattern: /^shadow-(brand|blue|green|yellow|orange|red|purple)-300$/,
    },
  ],
};

module.exports = config;
