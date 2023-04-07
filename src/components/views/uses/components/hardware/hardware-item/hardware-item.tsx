import type { FC } from '@/types';

import {
  HardwareItemContainer,
  HardwareName,
  TextsContainer,
  HardwareDescription,
  HardwareImage,
} from './hardware-item.styles';

export interface HardwareItemProps {
  image: string;
  name: string;
  description?: string;
  link?: string;
}

export const HardwareItem: FC<{ item: HardwareItemProps }> = ({ item }) => {
  return (
    <HardwareItemContainer>
      <HardwareImage
        src={`/static/images/${item.image}`}
        size={222}
        alt={item.name}
      />
      <TextsContainer>
        <HardwareName href={item.link || '#'} title={item.name}>
          {item.name}
        </HardwareName>
        {!!item.description && (
          <HardwareDescription>{item.description}</HardwareDescription>
        )}
      </TextsContainer>
    </HardwareItemContainer>
  );
};
