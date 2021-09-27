import Icon from '@mdi/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';

import { BaseProjectCard } from './base-project-card';

import { Component, ComponentProps } from '~/elements/fc';
import { useTheme } from '~/providers/theme';
import { ProjectProps, SkillProps, skills } from '~/types';
import buildShadowColors from '~/utils/build-shadow-colors';
import buildStyles from '~/utils/build-styles';
import getReadableColor from '~/utils/get-readable-color';

interface ProjectCardProps extends ComponentProps, ProjectProps {}

const getSkill = (skillName: string): SkillProps | null => {
  try {
    return skills.filter(
      (it: SkillProps) => it.name.toLowerCase() === skillName.toLowerCase(),
    )[0];
  } catch (e) {
    return null;
  }
};

const iconSize = 0.75;
export const ProjectCard: Component<ProjectCardProps> = (props) => {
  const { isDark = false } = useTheme();
  const { title, description, link, icon, preview, stack, color, darkColor } =
    props;
  const projectColor = isDark ? darkColor || color : color;
  const [shadowColors, setShadowColors] = useState(
    buildShadowColors(projectColor, 0.2, 0.4, isDark),
  );
  const [titleColor, setTitleColor] = useState(
    getReadableColor(projectColor, isDark),
  );

  useMemo(() => {
    const projectColor = isDark ? darkColor || color : color;
    setShadowColors(buildShadowColors(projectColor, 0.2, 0.4, isDark));
    setTitleColor(getReadableColor(projectColor, isDark));
  }, [isDark, color, darkColor]);

  const renderProjectStack = () => {
    if (!stack || !stack.length) return null;
    return (
      <ul className={'stack'}>
        {stack.map((skillName: string, i: number) => {
          const skill = getSkill(skillName);
          if (!skill) return null;
          return (
            <li key={i}>
              <Icon
                path={skill.iconPath}
                color={skill.color}
                size={skillName === 'android' ? iconSize * 1.25 : iconSize}
              />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Link href={link} passHref={true}>
      <BaseProjectCard to={link} className={'nodeco'} style={shadowColors}>
        <div className={'details'}>
          <div className={'icon-title'}>
            <Image
              src={icon}
              alt={title}
              width={48}
              height={48}
              layout={'fixed'}
              loading={'lazy'}
            />
            <h6 style={buildStyles({ '--hl-color': titleColor })}>{title}</h6>
          </div>
          <p>{description}</p>
          {renderProjectStack()}
        </div>
        {preview?.length && (
          <div
            className={'preview'}
            style={{ backgroundImage: `url('${preview}')` }}
          />
        )}
      </BaseProjectCard>
    </Link>
  );
};
