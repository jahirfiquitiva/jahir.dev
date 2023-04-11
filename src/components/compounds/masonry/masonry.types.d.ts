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

export type BreakpointName = typeof breakpointNames[number];

export type MasonryBreakpoints = { [Key in BreakpointName]?: number };

export interface MasonryProps {
  breakpoints?: MasonryBreakpoints;
  gap?: string | 0;
}
