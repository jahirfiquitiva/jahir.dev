import type { FC } from '@/types';

import { AppItemContainer, AppIcon } from './app-item.styles'

export interface AppItemProps {
  image: string;
  name: string;
  link?: string;
}

export const AppItem: FC<{ item: AppItemProps }> = ({ item }) => {
  return (
    <li>
      <AppItemContainer href={item.link || '#'} title={item.name}>
        <AppIcon
          src={`/static/images/${item.image}`}
          size={72}
          alt={item.name}
        />
        <span>{item.name}</span>
      </AppItemContainer>
    </li>
  );
};
