import type { Route } from 'next';

import gaming from '@/data/gaming.json';
import hardware from '@/data/hardware.json';

import {
  Grid,
  HardwareDescription,
  HardwareImage,
  HardwareItem,
  HardwareName,
  TextsContainer,
} from './hardware.styles';

type Item = (typeof hardware)[number] | (typeof gaming)[number];

interface HardwareGridProps {
  items: Array<Item>;
}

const HardwareGrid = (props: HardwareGridProps) => {
  const { items } = props;
  return (
    <Grid>
      {items.map((item, index) => {
        return (
          <HardwareItem
            key={index}
            href={(item.link || '#') as Route}
            title={item.name}
          >
            <HardwareImage
              src={`/static/images/${item.image}`}
              alt={item.name}
              size={222}
            />
            <TextsContainer>
              <HardwareName>{item.name}</HardwareName>
              {Boolean(item.description) && (
                <HardwareDescription>{item.description}</HardwareDescription>
              )}
            </TextsContainer>
          </HardwareItem>
        );
      })}
    </Grid>
  );
};

export const Everyday = () => <HardwareGrid items={hardware} />;
export const GamingPc = () => <HardwareGrid items={gaming} />;
