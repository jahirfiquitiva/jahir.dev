import { useMemo } from 'react';

import { Img, Link } from '@/components/atoms';
import type { FC } from '@/types';
import { styled, type StitchesCSS as CSS } from '~/stitches';

const AnimojiImg = styled(Img, {
  backgroundColor: '$accent-animoji',
  borderRadius: '50%',
  transform: 'rotate(1deg)',
  transition: 'transform .1s ease-in-out',
  hocus: {
    transform: 'rotate(-8deg)',
  },
});

const statusOptionsArray = ['online', 'idle', 'dnd', 'offline'] as const;
type StatusOption = typeof statusOptionsArray[number];

interface AnimojiProps {
  size?: number;
  status?: StatusOption;
}

export const Animoji: FC<AnimojiProps> = (props) => {
  const { size = 96, status, css } = props;

  const imgStyles = useMemo<CSS>(() => {
    if (status) return {};
    return {};
  }, [status]);

  return (
    <Link
      href={'/dashboard'}
      title={"View Jahir's Dashboard"}
      underline={false}
      css={{
        ...css,
        display: 'inline-block',
        maxWidth: 'fit-content',
        borderRadius: '50%',
        p: 0,
      }}
    >
      <AnimojiImg
        css={{
          ...imgStyles,
        }}
        src={'/static/images/jahir/animoji.png'}
        alt={'Jahir as an Animoji'}
        size={size}
      />
    </Link>
  );
};
