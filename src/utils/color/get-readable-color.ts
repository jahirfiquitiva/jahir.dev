/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';

extend([a11yPlugin]);

const bgColor = { dark: '#080f1e', light: '#f6f9fe' };
export const getReadableColor = (
  desiredFgColor?: string | null,
  isDark?: boolean,
): string | null => {
  if (!desiredFgColor) return null;
  let fgColor = colord(desiredFgColor);
  // Colors from css variables: primary
  while (
    !fgColor.isReadable(bgColor[isDark ? 'dark' : 'light'], {
      level: isDark ? 'AAA' : 'AA',
    })
  ) {
    fgColor = isDark ? fgColor.lighten() : fgColor.darken();
  }
  return fgColor.toHex();
};
