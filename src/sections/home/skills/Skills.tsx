import Icon from '@mdi/react';

import { ChipGroup, Chip, Heading, buildChipStyles } from '@/components/atoms';
import { Section } from '@/components/elements';
import type { FC } from '@/types';

import { skills } from './data';

export const Skills: FC = () => {
  return (
    <Section id={'skills'}>
      <Heading as={'h3'} shadow={'blue'} gradient={'blue-to-green'}>
        Skills
      </Heading>
      <ChipGroup css={{ pb: '$6' }}>
        {skills
          .filter((skill) => !skill.hide)
          .map((skill, index) => {
            return (
              <li key={index}>
                <Chip css={buildChipStyles(skill.color)}>
                  <Icon path={skill.iconPath} size={0.8} />
                  {skill.name}
                </Chip>
              </li>
            );
          })}
      </ChipGroup>
    </Section>
  );
};
