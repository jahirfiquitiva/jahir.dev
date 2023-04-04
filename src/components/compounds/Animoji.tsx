import { Img } from '@/components/atoms';
import { Link } from '@/components/core';
import type { FC } from '@/types';
import { styled } from '~/stitches';

const AnimojiImg = styled(Img, {
  backgroundColor: '$accent-animoji',
  borderRadius: '50%',
  transform: 'rotate(1deg)',
  transition: 'transform .1s ease-in-out',
  hocus: {
    transform: 'rotate(-8deg)',
  },
});

interface AnimojiProps {
  size?: number;
}

export const Animoji: FC<AnimojiProps> = (props) => {
  const { size = 96, css } = props;

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
        src={'/static/images/jahir/animoji.png'}
        alt={'Jahir as an Animoji'}
        size={size}
      />
    </Link>
  );
};
