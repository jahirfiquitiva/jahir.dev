import { type CSSProperties } from 'react';

import type { Project } from '@/types/project';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';

import { ProjectIcon, ProjectLink } from './item.styles';
import { StarsCount } from './stars-count';

interface ProjectItemProps {
  project: Project;
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
  const color =
    hexToRgb(project.darkColor || project.color, 1, true) ||
    'var(--color-accent-dark)';
  return (
    <ProjectLink
      title={project.name}
      href={project.link}
      style={{ '--tint': color } as CSSProperties}
      data-umami-event={'View project'}
      data-umami-event-project={project.name}
    >
      <ProjectIcon
        src={`/media/projects/${project.icon || ''}`}
        alt={`Icon for project "${project.name}"`}
        size={56}
        blurDataURL={project.iconMeta?.blurDataURL}
      />
      <div className={'flex flex-col gap-0.5'}>
        <div className={'flex flex-row gap-3 items-center'}>
          <p
            className={cx(
              'font-medium',
              'text-xs text-primary-txt line-clamp-2 text-pretty',
              'group-hocus/project:underline group-hocus/project:decoration-primary-txt',
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
