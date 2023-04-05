import { useMemo } from 'react';

import {
  ListCard,
  ListCardContent,
  ListCardInfoItem,
} from '@/components/compounds';
import { InfoContainer } from '@/components/compounds/list-card/list-card.styles';
import { Img } from '@/components/core';
import { useRequest } from '@/hooks/useRequest';
import { mdiStar } from '@/icons';
import type { FC, Project } from '@/types';

interface ProjectCardProps {
  project?: Project;
}

export const getShortDomainForBlog = (rightLink?: string) => {
  if (!rightLink) return '';
  try {
    const url = new URL(rightLink);
    return url.hostname.replace('www.', '');
  } catch (e) {
    return '';
  }
};

// eslint-disable-next-line max-lines-per-function
export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { project } = props;
  const { data } = useRequest<{ success?: boolean; stars?: string }>(
    `/api/stars/${project?.repo}`,
  );

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
    <ListCard
      title={`Project: ${project?.name}`}
      href={project.inProgress || project.hide ? project.link : '#'}
      imageUrl={`/static/images/projects/${project.icon}`}
      color={project.color}
      small
    >
      <Img
        src={`/static/images/projects/${project.icon}`}
        alt={`Icon for project "${project.name}"`}
        size={44}
        {...extraIconProps}
      />
      <ListCardContent
        title={project.name}
        description={project.description}
        childrenAside
        css={{gap:0}}
      >
        {Boolean(+(data?.stars || '0') > 1) && (
          <InfoContainer>
            <ListCardInfoItem
              title={`${project.name} has ${data?.stars} stars on GitHub`}
              iconPath={mdiStar}
            >
              {data?.stars}
            </ListCardInfoItem>
          </InfoContainer>
        )}
      </ListCardContent>
    </ListCard>
  );
};
