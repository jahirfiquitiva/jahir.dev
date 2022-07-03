type ThemeColorsNames = 'primary' | 'background' | 'accent';

type HexColor = `#${string}`;
type RGBColor = `rgb(${number} ${number} ${number})`;
type RGBAColor = `rgba(${number} ${number} ${number} / ${number})`;

type ThemeColorValue = HexColor | RGBColor | RGBAColor;

type ThemeColors = { [Key in ThemeColorsNames]?: ThemeColorValue };

export const colors: ThemeColors = {
  primary: '#f6f9fe',
  background: '#fff',
  accent: '#3867d6',
};

export const darkThemeColors: ThemeColors = {
  primary: '#0c121e',
  background: '#0c121e',
  accent: '#88a4e6',
};
