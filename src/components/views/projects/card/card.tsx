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
import { skills } from '../../home/skills/data';

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

  const language = useMemo(() => {
    const firstLangInStack = project?.stack?.[0];
    if (!firstLangInStack) return null;
    return skills.find((skill) =>
      skill.name.toLowerCase().includes(firstLangInStack.toLowerCase()),
    );
  }, [project?.stack]);

  if (!project) return null;
  return (
    <ListCard
      title={`Project: ${project?.name}`}
      href={project.inProgress || project.hide ? project.link : '#'}
      imageUrl={`/static/images/projects/${project.icon}`}
      color={project.color}
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
        css={{ gap: 0 }}
      >
        <InfoContainer>
          {+(data?.stars || '0') > 1 ? (
            <ListCardInfoItem
              title={`${project.name} has ${data?.stars} stars on GitHub`}
              iconPath={mdiStar}
            >
              {data?.stars}
            </ListCardInfoItem>
          ) : null}
          {language ? (
            <ListCardInfoItem
              title={`Built primarily with ${language?.name}`}
              iconPath={language?.iconPath}
            >
              {language?.name}
            </ListCardInfoItem>
          ) : null}
        </InfoContainer>
      </ListCardContent>
    </ListCard>
  );
};
