import { Link } from '@/components/core';
import type { FC } from '@/types';

import { AnimojiImg } from './animoji.styles';

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
        alt={'Animoji representation of Jahir'}
        size={size}
      />
    </Link>
  );
};
