const fontsUtils = {
  useFont: (fontName: 'manrope' | 'inter') => ({
    fontFamily: `$${fontName}`,
    '@supports (font-variation-settings: normal)': {
      fontFamily: `$${fontName}`,
      fontOpticalSizing: 'auto',
    },
  }),
  ellipsize: (value?: boolean) =>
    value
      ? { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
      : { overflow: 'unset', textOverflow: 'unset', whiteSpace: 'unset' },
};

export default fontsUtils;
