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
    xl: number;
  };
  desktop: number;
  floating: number;
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
    xl: 792,
  },
  desktop: 960,
  floating: 840,
};

type SingleMediaQuery = string | `@media all and (min-width: ${number}px)`;

export const buildMediaQuery = (width: number): SingleMediaQuery => {
  return `@media (min-width: ${width}px)`;
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
    xl: SingleMediaQuery;
  };
  desktop: SingleMediaQuery;
  floating: SingleMediaQuery;
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
    xl: buildMediaQuery(viewports.tablet.xl),
  },
  desktop: buildMediaQuery(viewports.desktop),
  floating: buildMediaQuery(viewports.floating),
};
