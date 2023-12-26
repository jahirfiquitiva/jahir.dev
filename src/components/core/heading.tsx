import type { ComponentProps, ElementType } from 'react';

import type { RainbowColor } from '@/types/gradient';
import { tw } from '@/utils/cx';
import cx from '@/utils/cx';

const StyledHeading = tw.h1`
  inline-block
  self-start
  [--text-shadow-color:var(--color-transparent)]
  [text-shadow:0.125rem_0.125rem_0_var(--text-shadow-color)]
  dark:[text-shadow:none]
  dark:text-transparent
  dark:bg-gradient-to-r
  dark:from-primary-txt
  dark:to-primary-txt
  dark:bg-clip-text
  dark:saturate-150
`;

interface HeadingProps {
  $as?: ElementType;
  shadow?: RainbowColor;
  from?: RainbowColor;
  to?: RainbowColor;
}

export const Heading = (
  props: ComponentProps<typeof StyledHeading> & HeadingProps,
) => {
  const { $as: asElement, children, shadow, from, to, ...otherProps } = props;
  return (
    <StyledHeading
      {...otherProps}
      $as={asElement}
      className={cx(
        'balance',
        otherProps.className,
        from ? `dark:from-gradient-${from}` : null,
        to ? `dark:to-gradient-${to}` : null,
      )}
      style={{
        ...otherProps.style,
        ...(shadow
          ? { '--text-shadow-color': `var(--color-shadow-${shadow})` }
          : {}),
      }}
    >
      {children}
    </StyledHeading>
  );
};
