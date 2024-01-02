import type { Route } from 'next';

// import gaming from '@/data/gaming.json';
import hardware from '@/data/hardware.json';

import {
  Grid,
  HardwareDescription,
  HardwareImage,
  HardwareItem,
  HardwareName,
  TextsContainer,
} from './hardware.styles';

type Item = (typeof hardware)[number]; // | (typeof gaming)[number];

interface HardwareGridProps {
  items: Array<Item>;
}

const HardwareGrid = (props: HardwareGridProps) => (
  <Grid>
    {props.items.map((item, index) => (
      <HardwareItem
        key={index}
        href={(item.link || '#') as Route}
        title={item.name}
      >
        <HardwareImage
          src={`/media/${item.image}`}
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
    ))}
  </Grid>
);

export const EverydayHardware = () => <HardwareGrid items={hardware} />;
// export const GamingPc = () => <HardwareGrid items={gaming} />;
