import { software } from '@/content';

import {
  AppIcon,
  AppName,
  GridContainer,
  SoftwareGrid,
  SoftwareItem,
} from './software.styles';

const sortedSoftware = software.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

export const Software = () => {
  return (
    <GridContainer>
      <SoftwareGrid>
        {sortedSoftware.map((item, index) => {
          return (
            <li key={index}>
              <SoftwareItem href={item.url || '#'} title={item.name}>
                <AppIcon
                  src={`/media/${item.image}`}
                  width={72}
                  height={72}
                  alt={item.name}
                  {...item.imageMeta}
                />
                <AppName>{item.name}</AppName>
              </SoftwareItem>
            </li>
          );
        })}
      </SoftwareGrid>
    </GridContainer>
  );
};
