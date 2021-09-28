/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { Color } from 'frostcolor';

const lightThemeThreshold = 48;
const darkThemeThreshold = 85;

const getReadableColor = (
  color?: string | null,
  isDark?: boolean,
): string | null | undefined => {
  if (!color) return color;
  let newColor = Color.fromString(color);
  try {
    if (isDark) {
      while (newColor.getBrightness() < darkThemeThreshold) {
        newColor = newColor.lighten(0.1);
      }
    } else {
      while (newColor.getBrightness() > lightThemeThreshold) {
        newColor = newColor.darken(0.1);
      }
    }
  } catch (e: any) {}
  return newColor.toHexString();
};

export default getReadableColor;
