export type MasonryBreakpoints = { [key: string | number]: number };

export interface MasonryProps {
  breakpoints?: MasonryBreakpoints;
  gap?: string | 0;
}