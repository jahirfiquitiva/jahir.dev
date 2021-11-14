/* eslint-disable @typescript-eslint/no-var-requires */
const { boxShadow: defaultBoxShadows } = require('tailwindcss/defaultTheme');

const generateBoxShadows = () => {
  const newBoxShadows = {};
  for (const key of Object.keys(defaultBoxShadows)) {
    newBoxShadows[key] = defaultBoxShadows[key]
      .replace(/rgba\(0, 0, 0, 0.1\)/g, 'var(--shadow-color-full)')
      .replace(/0.1/g, '0.2')
      .replace(/0, 0, 0/g, 'var(--shadow-color)');
  }
  return {
    ...newBoxShadows,
    fab: '0 2px 8px rgba(var(--shadow-color), 0.24)',
    blogCardDetails:
      '0 -4px 6px -1px rgba(255, 255, 255, 0.1), 0 -2px 4px -1px rgba(255, 255, 255, 0.05);',
  };
};

module.exports = { generateBoxShadows };
