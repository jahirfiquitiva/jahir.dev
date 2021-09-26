type Viewports = {
  default: number;
  mobile: {
    sm: number;
    md: number;
    lg: number;
  };
  tablet: {
    sm: number;
    lg: number;
  };
  desktop: number;
};

export const viewports: Viewports = {
  default: 0,
  mobile: {
    sm: 320,
    md: 375,
    lg: 425,
  },
  tablet: {
    sm: 596,
    lg: 768,
  },
  desktop: 960,
};

type SingleMediaQuery = string | `@media all and (min-width: ${number}px)`;

const buildMediaQuery = (width: number): SingleMediaQuery => {
  return `@media all and (min-width: ${width}px)`;
};

type MediaQueries = {
  default: SingleMediaQuery;
  mobile: {
    sm: SingleMediaQuery;
    md: SingleMediaQuery;
    lg: SingleMediaQuery;
  };
  tablet: {
    sm: SingleMediaQuery;
    lg: SingleMediaQuery;
  };
  desktop: SingleMediaQuery;
};

export const mediaQueries: MediaQueries = {
  default: buildMediaQuery(viewports.default),
  mobile: {
    sm: buildMediaQuery(viewports.mobile.sm),
    md: buildMediaQuery(viewports.mobile.md),
    lg: buildMediaQuery(viewports.mobile.lg),
  },
  tablet: {
    sm: buildMediaQuery(viewports.tablet.sm),
    lg: buildMediaQuery(viewports.tablet.lg),
  },
  desktop: buildMediaQuery(viewports.desktop),
};
