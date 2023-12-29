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
  if (shadow) {
    classes.push(
      cx(
        'text-shadow',
        !includeLightTheme && `shadow-${shadow}-300`,
        !includeLightTheme ? 'dark:text-shadow-none' : 'text-shadow-none',
      ),
    );
  }

  if (from || to) {
    classes.push(
      cx(
        `from-${from}-${from === 'brand' ? '500' : '600'}`,
        `to-${to}-${to === 'brand' ? '500' : '600'}`,
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
          ? [
              `hocus:${it}`,
              `hocus:decoration-${from}-${from === 'brand' ? '500' : '600'}`,
              `dark:hocus:decoration-${from}-${
                from === 'brand' ? '300' : '400'
              }`,
            ].join(' ')
          : `hocus:${it} [&[aria-current="page"]]:${it}`) as string,
    )
    .join(' ') as string;
};
