const fontsUtils = {
  useFont: (fontName: 'manrope' | 'inter') => ({
    fontFamily: `$${fontName}`,
    '@supports (font-variation-settings: normal)': {
      fontFamily: `$${fontName}Var`,
      fontOpticalSizing: 'auto',
    },
  }),
  ellipsize: (value?: boolean) =>
    value
      ? { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
      : {},
};

export default fontsUtils;
