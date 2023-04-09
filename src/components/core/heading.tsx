import type { ElementType } from 'react';
import Balancer from 'react-wrap-balancer';

import tw, { cx } from '@/tw';
import type { ComponentProps } from '@/types';

const StyledHeading = tw.h1`
  inline-block
  items-center
  self-start
  [--text-shadow-color:var(--color-transparent)]
  [text-shadow:0.125rem_0.125rem_0_var(--text-shadow-color)]
  [&>span]:w-full
  dark:[text-shadow:none]
  dark:text-transparent
  dark:bg-gradient-to-r
  dark:from-primary-txt
  dark:to-primary-txt
  dark:bg-clip-text
`;

const rainbowColors = [
  'brand',
  'blue',
  'green',
  'yellow',
  'orange',
  'red',
  'purple',
] as const;
type RainbowColor = typeof rainbowColors[number];

interface HeadingProps {
  as?: ElementType;
  balancerRatio?: number;
  shadow?: RainbowColor;
  from?: RainbowColor;
  to?: RainbowColor;
}

export const Heading = (
  props: ComponentProps<typeof StyledHeading> & HeadingProps,
) => {
  const { children, balancerRatio, shadow, from, to, ...otherProps } = props;
  return (
    <StyledHeading
      {...otherProps}
      className={cx(
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
      <Balancer ratio={balancerRatio}>{children}</Balancer>
    </StyledHeading>
  );
};
