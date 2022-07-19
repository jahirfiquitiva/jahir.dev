import type { ComponentProps } from 'react';

import { Img } from '@/components/atoms';
import type { ThemeColorValue } from '@/stitches';
import type { FC } from '@/types';
import { styled } from '~/stitches';

const StyledImg = styled(Img, {
  $$shadowSize: 0,
  $$shadowColor: '$colors$illustrations-shadow',
  filter:
    'drop-shadow(-$$shadowSize -$$shadowSize calc($$shadowSize / 2) $$shadowColor)' +
    ' drop-shadow($$shadowSize $$shadowSize calc($$shadowSize / 2) $$shadowColor)' +
    ' drop-shadow(-$$shadowSize $$shadowSize calc($$shadowSize / 2) $$shadowColor)' +
    ' drop-shadow($$shadowSize -$$shadowSize calc($$shadowSize / 2) $$shadowColor)',
  variants: {
    flip: {
      true: {
        transform: 'scaleX(-1)',
      },
    },
  },
});

interface OpenDoodleProps {
  shadowSize?: number;
  shadowColor?: ThemeColorValue;
}

export const OpenDoodle: FC<
  ComponentProps<typeof StyledImg> & OpenDoodleProps
> = (props) => {
  const {
    shadowSize = 4,
    shadowColor = '$colors$illustrations-shadow',
    css,
    ...otherProps
  } = props;
  return (
    <StyledImg
      size={384}
      css={{
        ...css,
        $$shadowSize: `${shadowSize}px`,
        $$shadowColor: shadowColor,
      }}
      {...otherProps}
    />
  );
};
