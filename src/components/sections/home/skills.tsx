import styled from '@emotion/styled';
import Icon from '@mdi/react';

import { ChipGroup } from '~/components/atoms/complex';
import { Heading, Chip, DotsDivider } from '~/components/atoms/simple';
import { Component, skills } from '~/types';
import { buildChipStyles } from '~/utils/styles/build-chip-styles';

const SkillsSection = styled.section`
  padding-bottom: 1.6rem;
`;

export const Skills: Component = () => {
  return (
    <SkillsSection id={'skills'}>
      <DotsDivider />
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
    </SkillsSection>
  );
};
