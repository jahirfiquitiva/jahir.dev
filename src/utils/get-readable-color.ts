// @ts-ignore
import { Color } from 'frostcolor';

const lightThemeThreshold = 55;
const darkThemeThreshold = 85;

const getReadableColor = (color?: string | null, isDark?: boolean) => {
  if (!color) return;
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
