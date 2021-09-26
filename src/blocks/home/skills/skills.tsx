import Icon from '@mdi/react';
import { CSSProperties } from 'hoist-non-react-statics/node_modules/@types/react';
import { SectionHeading } from '~/components/section-heading';
import { Chip, ChipGroup } from '~/elements/chip';
import { Divider } from '~/elements/divider';
import { skills } from '~/types/skill';
import buildStyles from '~/utils/build-styles';
import hexToRGB from '~/utils/hex-to-rgb';

const buildSkillChipStyles = (color: string): CSSProperties => {
  return buildStyles({
    '--bg-color': hexToRGB(color, 0.2),
    '--border-color': hexToRGB(color, 0.6),
  });
};

export const Skills = () => {
  return (
    <section>
      <Divider gradientColor={'brand-to-blue'} />
      <SectionHeading
        size={'3'}
        shadowColor={'blue'}
        gradientColor={'blue-to-green'}
        emoji="🚀"
      >
        Skills
      </SectionHeading>
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
