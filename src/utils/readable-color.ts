import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';

import { THEME_COLOR_DARK, THEME_COLOR_LIGHT } from '@/constants';

extend([a11yPlugin]);

export const getReadableColor = (
  desiredFgColor?: string | null,
  isDark?: boolean,
): string | null => {
  if (!desiredFgColor) return null;
  let fgColor = colord(desiredFgColor);
  while (
    !fgColor.isReadable(isDark ? THEME_COLOR_DARK : THEME_COLOR_LIGHT, {
      level: 'AAA',
    })
  ) {
    fgColor = isDark ? fgColor.lighten() : fgColor.darken();
  }
  return fgColor.toHex();
};
