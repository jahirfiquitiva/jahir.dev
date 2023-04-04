type BreakPointBaseName = 'default' | 'desktop' ;
type MeasuredBreakPoints = 'mobile' | 'tablet';
type BreakPointExtraName =
  | `${MeasuredBreakPoints}-sm`
  | `${MeasuredBreakPoints}-md`
  | `${MeasuredBreakPoints}-lg`;

type BreakPointName = BreakPointBaseName | BreakPointExtraName;
type BreakPointValue = string | `@media all and (min-width: ${number}px)`;

const buildMediaQuery = (width: number = 0): BreakPointValue => {
  return `(min-width: ${width}px)`;
};

type BreakPointsValues = { [Key in BreakPointName]?: number };
type BreakPointsCss = { [Key in BreakPointName]?: BreakPointValue };

export const breakpointsValues: BreakPointsValues = {
  default: 0,
  'mobile-sm': 320,
  'mobile-md': 375,
  'mobile-lg': 425,
  'tablet-sm': 596,
  'tablet-md': 768,
  'tablet-lg': 792,
  desktop: 960,
};

export const breakpoints: BreakPointsCss = {
  default: buildMediaQuery(breakpointsValues.default),
  'mobile-sm': buildMediaQuery(breakpointsValues['mobile-sm']),
  'mobile-md': buildMediaQuery(breakpointsValues['mobile-md']),
  'mobile-lg': buildMediaQuery(breakpointsValues['mobile-lg']),
  'tablet-sm': buildMediaQuery(breakpointsValues['tablet-sm']),
  'tablet-md': buildMediaQuery(breakpointsValues['tablet-md']),
  'tablet-lg': buildMediaQuery(breakpointsValues['tablet-lg']),
  desktop: buildMediaQuery(breakpointsValues.desktop),
};
