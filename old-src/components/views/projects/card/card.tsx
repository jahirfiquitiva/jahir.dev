import Icon from '@mdi/react';
import { useMemo } from 'react';

import { Img } from '@/old/components/core';
import { mdiStar } from '@/old/components/icons';
import { useRequest } from '@/old/hooks/use-request';
import { useTheme } from '@/old/providers/theme';
import type { FC, Project } from '@/old/types';
import { getReadableColor } from '@/old/utils/color/get-readable-color';
import { hexToRGB } from '@/old/utils/color/hex-to-rgb';

import {
  Description,
  StarsContainer,
  StyledProjectCard,
  TitleContainer,
} from './card.styled';

interface ProjectCardProps {
  project?: Project;
}

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { project } = props;
  const { data } = useRequest<{ success?: boolean; stars?: string }>(
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
      underline={false}
      css={{ $$color: color || '$colors$accent-shadow' }}
    >
      <TitleContainer>
        <Img
          src={`/static/images/projects/${project.icon}`}
          alt={`Icon for project "${project.name}"`}
          size={44}
          {...extraIconProps}
        />
        <span>{project.name}</span>
      </TitleContainer>
      <Description>{project.description}</Description>
      {data && data.stars ? (
        <StarsContainer>
          <Icon path={mdiStar} size={0.7} />
          <span>{data.stars}</span>
        </StarsContainer>
      ) : null}
    </StyledProjectCard>
  );
};
