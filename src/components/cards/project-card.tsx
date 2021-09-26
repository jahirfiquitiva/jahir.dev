import Icon from '@mdi/react';
import Image from 'next/image';
import Link from 'next/link';
// import { usePalette } from 'react-palette';

import { BaseProjectCard } from './base-project-card';

import { Component, ComponentProps } from '~/elements/fc';
// import { BlogPostProps } from '~/types/blog-post';
import { ProjectProps } from '~/types/project';
import { SkillProps, skills } from '~/types/skill';
import buildShadowColors from '~/utils/build-shadow-colors';
import { useTheme } from '~/providers/theme';
import getReadableColor from '~/utils/get-readable-color';
import buildStyles from '~/utils/build-styles';
// import formatDate from '~/utils/format-date';
// import getColorFromPalette from '~/utils/get-color-from-palette';

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

const iconSize = 0.9;
export const ProjectCard: Component<ProjectCardProps> = (props) => {
  const { title, description, link, icon, preview, stack, color, darkColor } =
    props;
  const { isDark } = useTheme();
  const projectColor = isDark ? darkColor || color : color;

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
      <BaseProjectCard
        to={link}
        className={'nodeco'}
        style={{
          ...buildShadowColors(
            isDark ? darkColor || color : color,
            0.2,
            0.4,
            isDark,
          ),
        }}
      >
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
            <h6
              style={buildStyles({
                '--hl-color': getReadableColor(projectColor, isDark),
              })}
            >
              {title}
            </h6>
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
