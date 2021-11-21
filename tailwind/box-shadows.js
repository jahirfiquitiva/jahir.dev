const transform = (shadow) => {
  return shadow
    .replace(' / 12%', ', 0.07')
    .replace(' / 14%', ', 0.09')
    .replace(' / 20%', ', 0.12')
    .replace(/rgb\(0 0 0/g, 'rgba(var(--shadow-color)');
};

const mdShadows = {
  z1: transform(
    '0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%)',
  ),
  z2: transform(
    '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
  ),
  z4: transform(
    '0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)',
  ),
  z6: transform(
    '0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%)',
  ),
};

const twShadows = {
  none: 'none',
  sm: mdShadows.z1,
  DEFAULT: mdShadows.z2,
  md: mdShadows.z4,
  lg: mdShadows.z6,
};

module.exports = {
  ...mdShadows,
  ...twShadows,
  fab: '0 2px 8px rgba(var(--shadow-color), 0.24)',
  blogCardDetails:
    // eslint-disable-next-line max-len
    '0 -4px 6px -2px rgba(var(--shadow-color), 0.12), 0 -6px 7px 0 rgba(var(--shadow-color), 0.09), 0 -3px 12px 0 rgba(var(--shadow-color), 0.07)',
};
