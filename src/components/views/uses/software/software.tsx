import { Section } from '@/components/core/section';
import software from '@/data/software.json';

import {
  GridContainer,
  SoftwareGrid,
  SoftwareItem,
  AppIcon,
  AppName,
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
    <Section $as={'div'}>
      <GridContainer>
        <SoftwareGrid>
          {sortedSoftware.map((item, index) => {
            return (
              <li key={index}>
                <SoftwareItem href={item.link || '#'} title={item.name}>
                  <AppIcon
                    src={`/static/images/${item.image}`}
                    size={72}
                    alt={item.name}
                  />
                  <AppName>{item.name}</AppName>
                </SoftwareItem>
              </li>
            );
          })}
        </SoftwareGrid>
      </GridContainer>
    </Section>
  );
};
