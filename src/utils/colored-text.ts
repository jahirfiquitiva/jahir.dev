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
  shadow?: Color,
  from?: Color,
  to?: Color,
  otherClasses?: string,
  includeLightTheme?: boolean,
): string => {
  const gradientPrefix = includeLightTheme ? '' : 'dark:';
  const classes = [];
  if (shadow && !includeLightTheme) {
    classes.push(
      cx('text-shadow', `shadow-${shadow}-300`, 'dark:text-shadow-none'),
    );
  }

  if (from || to) {
    classes.push(
      cx(
        includeLightTheme
          ? `from-${from}-${from === 'brand' ? '500' : '600'}`
          : '',
        includeLightTheme ? `to-${to}-${to === 'brand' ? '500' : '600'}` : '',
        `dark:from-${from}-${from === 'brand' ? '300' : '400'}`,
        `dark:to-${to}-${to === 'brand' ? '300' : '400'}`,
        'dark:saturate-150',
        `${gradientPrefix}bg-gradient-to-r`,
        `${gradientPrefix}bg-clip-text`,
        `${gradientPrefix}text-transparent`,
      ),
    );
  }

  return cx(classes, otherClasses);
};

export const buildColoredLinkClasses = (
  from: Color,
  to: Color,
  forFooter?: boolean,
) => {
  const className = [
    `from-${from}-${from === 'brand' ? '500' : '600'}`,
    `to-${to}-${to === 'brand' ? '500' : '600'}`,
    `dark:from-${from}-${from === 'brand' ? '300' : '400'}`,
    `dark:to-${to}-${to === 'brand' ? '300' : '400'}`,
  ].join(' ');

  return (className || '')
    .split(' ')
    .map(
      (it) =>
        (forFooter
          ? `hocus:${it}`
          : `hocus:${it} [&[aria-current="page"]]:${it}`) as string,
    )
    .join(' ') as string;
};
