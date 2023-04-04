import type { ComponentProps } from 'react';

import type { ThemeColorValue } from '@/stitches';
import type { FC } from '@/types';

import { DoodleImg } from './open-doodle.styles';

interface OpenDoodleProps {
  shadowSize?: number;
  shadowColor?: ThemeColorValue;
}

export const OpenDoodle: FC<ComponentProps<typeof DoodleImg> & OpenDoodleProps> = (props) => {
  const {
    shadowSize = 4,
    shadowColor = '$colors$illustrations-shadow',
    css,
    ...otherProps
  } = props;
  return (
    <DoodleImg
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
