import cx from './cx';

type Color =
  | 'brand'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'purple';

export const getColoredTextClasses = (
  color?: Color,
  otherClasses?: string,
  includeLightTheme?: boolean,
): string => {
  const gradientPrefix = includeLightTheme ? '' : 'dark:';
  const classes = [];

  if (color) {
    classes.push('dark:saturate-150');
    if (!includeLightTheme) {
      classes.push(
        cx('text-shadow', `shadow-${color}-300`, 'dark:text-shadow-none'),
      );
    }
  }

  return cx(classes, otherClasses, `${gradientPrefix}text-${color}`);
};
