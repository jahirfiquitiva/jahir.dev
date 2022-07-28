import { useMemo } from 'react';

import { Img } from '@/components/atoms';
import type { FC } from '@/types';
import { styled, type StitchesCSS as CSS } from '~/stitches';

const AnimojiImg = styled(Img, {
  backgroundColor: '$accent-animoji',
  borderRadius: '50%',
});

const statusOptionsArray = ['online', 'idle', 'dnd', 'offline'] as const;
type StatusOption = typeof statusOptionsArray[number];

interface AnimojiProps {
  size?: number;
  status?: StatusOption;
}

export const Animoji: FC<AnimojiProps> = (props) => {
  const { size = 96, status, css } = props;

  const extraStyles = useMemo<CSS>(() => {
    if (status) return {};
    return {};
  }, [status]);

  return (
    <AnimojiImg
      css={{
        ...css,
        ...extraStyles,
      }}
      src={'/static/images/jahir/animoji.png'}
      alt={'Jahir as an Animoji'}
      size={size}
    />
  );
};
