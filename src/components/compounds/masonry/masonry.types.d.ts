const breakpointNames = [
  'default',
  'mobile-sm',
  'mobile-md',
  'mobile-lg',
  'tablet-sm',
  'tablet-md',
  'tablet-lg',
  'desktop',
] as const;
type BreakpointName = typeof breakpointNames[number];

export const breakpointsAndMinWidth: Record<BreakpointName, number> = {
  default: 0,
  'mobile-sm': 320,
  'mobile-md': 375,
  'mobile-lg': 425,
  'tablet-sm': 596,
  'tablet-md': 768,
  'tablet-lg': 792,
  desktop: 960,
};

export type MasonryBreakpoints = { [Key in BreakpointName]?: number };

export interface MasonryProps {
  breakpoints?: MasonryBreakpoints;
  gap?: string | 0;
}
