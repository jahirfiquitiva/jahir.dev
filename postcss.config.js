module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-flexbugs-fixes': {},
    'postcss-calc': {},
    'postcss-preset-env': {
      preserve: false,
      autoprefixer: {
        flexbox: 'no-2009',
        grid: true,
      },
      stage: 3,
      features: {
        'custom-properties': false,
        'nesting-rules': true,
      },
    },
    '@fullhuman/postcss-purgecss': {
      content: [
        './src/pages/**/*.{js,jsx,ts,tsx}',
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: ['html', 'body', '#__next'],
    },
    cssnano: {
      preset: ['default'],
    },
  },
};
