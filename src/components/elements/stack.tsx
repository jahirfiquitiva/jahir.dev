import styled from '@emotion/styled';
import Icon from '@mdi/react';

import {
  Component,
  ComponentProps,
  SkillKey,
  SkillProps,
  skills,
} from '~/types';

const getSkill = (skillName: string): SkillProps | null => {
  try {
    return skills.filter(
      (it: SkillProps) => it.name.toLowerCase() === skillName.toLowerCase(),
    )[0];
  } catch (e) {
    return null;
  }
};

const StackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  gap: 0.4rem;
`;

interface StackListProps extends ComponentProps {
  stack?: Array<SkillKey>;
  iconSize?: number;
}

export const Stack: Component<StackListProps> = (props) => {
  const { stack, iconSize = 0.75, ...otherProps } = props;

  if (!stack || !stack.length) return null;
  return (
    <StackList {...otherProps}>
      {stack.map((skillName: string, i: number) => {
        const skill = getSkill(skillName);
        if (!skill) return null;
        return (
          <li key={i} title={skill.name} aria-label={skill.name}>
            <Icon
              path={skill.iconPath}
              color={skill.color}
              size={skillName === 'android' ? iconSize * 1.25 : iconSize}
            />
          </li>
        );
      })}
    </StackList>
  );
};
