import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';

extend([a11yPlugin]);

// Colors from css variables: primary
const bgColor = { dark: '#080f1e', light: '#f6f9fe' };
export const getReadableColor = (
  desiredFgColor?: string | null,
  isDark?: boolean,
): string | null => {
  if (!desiredFgColor) return null;
  let fgColor = colord(desiredFgColor);
  while (
    !fgColor.isReadable(bgColor[isDark ? 'dark' : 'light'], {
      level: 'AAA',
    })
  ) {
    fgColor = isDark ? fgColor.lighten() : fgColor.darken();
  }
  return fgColor.toHex();
};
