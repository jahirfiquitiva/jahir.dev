import Icon from '@mdi/react';

import { ChipGroup } from '~/components/atoms/complex';
import { Heading, Chip, Divider } from '~/components/atoms/simple';
import { Component, skills } from '~/types';
import { buildChipStyles } from '~/utils/styles/build-chip-styles';

export const Skills: Component = () => {
  return (
    <section id={'skills'}>
      <Divider gradientColor={'brand-to-blue'} />
      <Heading size={'3'} shadowColor={'blue'} gradientColor={'blue-to-green'}>
        Skills
      </Heading>
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
