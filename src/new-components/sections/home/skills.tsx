import Icon from '@mdi/react';

import { SectionHeading, ChipGroup } from '~/new-components/atoms/complex';
import { Chip, Divider } from '~/new-components/atoms/simple';
import { Component, skills } from '~/types';
import { buildChipStyles } from '~/utils/build-chip-styles';

export const Skills: Component = () => {
  return (
    <section id={'skills'}>
      <Divider gradientColor={'brand-to-blue'} />
      <SectionHeading
        size={'3'}
        shadowColor={'blue'}
        gradientColor={'blue-to-green'}
        emoji={'🚀'}
      >
        Skills
      </SectionHeading>
      <ChipGroup>
        {skills
          .filter((skill) => !skill.hide)
          .map((skill, index) => {
            return (
              <li key={index}>
                <Chip style={buildChipStyles(skill.color)}>
                  <Icon path={skill.iconPath} size={0.8} />
                  {skill.name}
                </Chip>
              </li>
            );
          })}
      </ChipGroup>
    </section>
  );
};
