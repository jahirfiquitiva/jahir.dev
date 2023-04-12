'use client';

import Icon from '@mdi/react';
import { cx } from 'classix';
import { type CSSProperties, useMemo } from 'react';

import { mdiStar } from '@/components/icons';
import { useImmutableRequest } from '@/hooks/use-request';
import { useTheme } from '@/providers/theme';
import type { FC, Project } from '@/types';
import { getReadableColor } from '@/utils/color/get-readable-color';
import { hexToRGB } from '@/utils/color/hex-to-rgb';

import {
  StyledProjectCard,
  TitleContainer,
  StarsContainer,
  ProjectIcon,
} from './card.styles';

interface ProjectCardProps {
  project?: Project;
}

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { project } = props;
  const { data } = useImmutableRequest<{ success?: boolean; stars?: string }>(
    `/api/stars/${project?.repo}`,
  );
  const { isDark, themeReady } = useTheme();

  const color = useMemo<string>(() => {
    if (!themeReady) return '';
    return hexToRGB(
      getReadableColor(
        isDark ? project?.darkColor || project?.color : project?.color,
        isDark,
      ),
      undefined,
      true,
    );
  }, [project?.color, project?.darkColor, isDark, themeReady]);

  const extraIconProps = useMemo(() => {
    if (project?.iconMeta && project?.iconMeta.blur64) {
      return { placeholder: 'blur', blurDataURL: project?.iconMeta.blur64 } as {
        placeholder: 'blur' | 'empty';
        blurDataURL?: string;
      };
    }
    return {};
  }, [project?.iconMeta]);

  if (!project) return null;
  return (
    <StyledProjectCard
      title={`Project: ${project?.name}`}
      href={project.link}
      style={
        {
          '--project-color': color || 'var(--color-accent-shadow)',
        } as CSSProperties
      }
    >
      <ProjectIcon
        src={`/static/images/projects/${project.icon}`}
        alt={`Icon for project "${project.name}"`}
        size={56}
        {...extraIconProps}
      />
      <TitleContainer>
        <span
          className={cx(
            'font-manrope font-semibold',
            'group-hocus/project:underline',
            'group-hocus/project:text-[rgb(var(--project-color))]',
          )}
        >
          {project.name}
        </span>
        <p className={'text-3xs group-hocus/project:text-primary-txt'}>
          {project.description}
        </p>
      </TitleContainer>
      {data && data.stars ? (
        <StarsContainer>
          <Icon path={mdiStar} size={0.7} />
          <span>{data.stars}</span>
        </StarsContainer>
      ) : null}
    </StyledProjectCard>
  );
};
