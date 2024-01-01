import type { Route } from 'next';
import { type CSSProperties } from 'react';

import type { Project } from '@/types/project';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';

import { StarsCount } from '../stars-count';

import { ProjectIcon, ProjectLink } from './item.styles';

interface ProjectItemProps {
  project: Project;
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
  const color =
    hexToRgb(project.darkColor || project.color, 1, true) ||
    'var(--color-accent-dark)';
  return (
    <ProjectLink
      title={`Project: "${project.name}"`}
      href={project.link as Route}
      style={
        {
          '--project-color': color,
        } as CSSProperties
      }
      data-umami-event={'Project'}
      data-umami-event-project={project.name}
    >
      <ProjectIcon
        src={`/media/projects/${project.icon || ''}`}
        alt={`Icon for project "${project.name}"`}
        size={56}
        placeholder={Boolean(project?.iconMeta?.blur64) ? 'blur' : undefined}
        blurDataURL={project?.iconMeta?.blur64}
      />
      <div className={'flex flex-col gap-0.5'}>
        <div className={'flex flex-row gap-3 items-center'}>
          <p
            className={cx(
              'text-xs text-primary-txt line-clamp-2 text-pretty',
              'group-hocus/project:underline group-hocus/project:decoration-primary-txt',
              'group-hocus/project:underline-offset-2 group-hocus/project:decoration-2',
            )}
          >
            {project.name}
          </p>
          <StarsCount repo={project.repo || ''} owner={project.owner} />
        </div>
        <p className={'text-2xs text-secondary-txt line-clamp-2 text-pretty'}>
          {project.description}
        </p>
      </div>
    </ProjectLink>
  );
};
