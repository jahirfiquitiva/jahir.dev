import styled from '@emotion/styled';
import Icon from '@mdi/react';
import { CSSProperties } from 'react';

import { SectionHeading } from '~/components/section-heading';
import { Chip, ChipGroup } from '~/elements/simple/chip';
import { Divider } from '~/elements/simple/divider';
import { Component } from '~/elements/base/fc';
import { skills } from '~/types';
import buildStyles from '~/utils/build-styles';
import hexToRGB from '~/utils/hex-to-rgb';

const buildSkillChipStyles = (color: string): CSSProperties => {
  return buildStyles({
    '--bg-color': hexToRGB(color, 0.2),
    '--border-color': hexToRGB(color, 0.6),
  });
};

const SkillsHeading = styled(SectionHeading)`
  margin-top: 0.6rem;
`;

export const Skills: Component = () => {
  return (
    <section id={'skills'}>
      <Divider gradientColor={'brand-to-blue'} />
      <SkillsHeading
        size={'3'}
        shadowColor={'blue'}
        gradientColor={'blue-to-green'}
        emoji={'🚀'}
      >
        Skills
      </SkillsHeading>
      <ChipGroup>
        {skills
          .filter((skill) => !skill.hide)
          .map((skill, index) => {
            return (
              <li key={index}>
                <Chip style={buildSkillChipStyles(skill.color)}>
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
