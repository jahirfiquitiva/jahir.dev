import type { ComponentProps } from 'react';

import { Img } from '@/components/atoms';
import type { FC } from '@/types';
import { styled } from '~/stitches';

const StyledImg = styled(Img, {
  $$shadowSize: 0,
  $$shadowColor: '#fff',
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
  shadowColor?: string;
}

export const OpenDoodle: FC<
  ComponentProps<typeof StyledImg> & OpenDoodleProps
> = (props) => {
  const { shadowSize = 6, shadowColor = '#D8D1F6', css, ...otherProps } = props;
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
