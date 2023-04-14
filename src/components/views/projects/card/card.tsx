'use client';

import Icon from '@mdi/react';
import { cx } from 'classix';
import { type CSSProperties, useMemo } from 'react';

import { star } from '@/components/icons';
import { useImmutableRequest } from '@/hooks/use-request';
import { useTheme } from '@/providers/theme';
import type { FC, Project } from '@/types';
import { getReadableColor, hexToRgb } from '@/utils/color';

import {
  StyledProjectCard,
  ProjectIcon,
  TitleContainer,
  StarsCounter,
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
  const projectColor = isDark
    ? project?.darkColor || project?.color
    : project?.color;

  const color = useMemo<string | null>(() => {
    if (!themeReady) return '';
    return hexToRgb(getReadableColor(projectColor, isDark), undefined, true);
  }, [projectColor, isDark, themeReady]);

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
          '--project-color':
            hexToRgb(projectColor, 0, true) || 'var(--color-accent-dark)',
          '--project-text-color': color || 'var(--color-accent-dark)',
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
        <p className={'flex items-center gap-10'}>
          <span
            className={cx(
              'font-manrope font-semibold',
              'group-hocus/project:underline',
              'group-hocus/project:text-[rgb(var(--project-text-color))]',
            )}
          >
            {project.name}
          </span>
          {data && data.stars ? (
            <StarsCounter
              title={`Project "${project.name}" has ${data.stars} stars on GitHub`}
            >
              <Icon path={star} size={0.5} />
              <span>{data.stars}</span>
            </StarsCounter>
          ) : null}
        </p>
        <p className={'text-3xs mr-4 group-hocus/project:text-primary-txt'}>
          {project.description}
        </p>
      </TitleContainer>
    </StyledProjectCard>
  );
};
