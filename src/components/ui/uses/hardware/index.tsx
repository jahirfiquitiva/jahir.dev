// import gaming from '@/data/gaming.json';
import { hardware } from '@/content';

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
      <HardwareItem key={index} href={item.url || '#'} title={item.name}>
        <HardwareImage
          src={`/media/${item.image}`}
          alt={item.name}
          size={222}
          {...item.imageMeta}
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
