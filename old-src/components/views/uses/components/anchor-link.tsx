import type { ElementType } from 'react';

import { Link } from '@/old/components/core';
import type { FC } from '@/old/types';

interface AnchorLinkProps {
  id: string;
  title: string;
  as?: ElementType;
}

export const AnchorLink: FC<AnchorLinkProps> = (props) => {
  const { id, title, as: asElement } = props;
  const Component = asElement || 'h1';
  return (
    <Component id={id}>
      <Link href={`#${id}`} title={title} className={'anchor'}>
        <span className={'icon icon-link'} />
      </Link>
      {title}
    </Component>
  );
};
