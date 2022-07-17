import { useMemo } from 'react';

import { Img, Link } from '@/components/atoms';
import { useTheme } from '@/providers/theme';
import type { Project, FC } from '@/types';
import { getReadableColor, hexToRGB } from '@/utils';
import { styled } from '~/stitches';
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';

const StyledProjectCard = styled(Link, {
  $$color: '$colors$toolbar-glow',
  $$borderSize: '1px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  py: '1rem',
  px: '1.2rem',
  gap: '.6rem',
  border: '$$borderSize solid $divider',
  borderRadius: '.5rem',
  color: '$text-secondary',
  transition: 'all .25s ease-in-out',
  '& > div:first-of-type > span': {
    transition: 'color .15s ease-in-out',
  },
  hocus: {
    $$borderSize: '2px',
    py: 'calc(1rem - 1px)',
    px: 'calc(1.2rem - 1px)',
    transform: 'scale(1.0125)',
    boxShadow: '0 0 8px 2px rgba($$color / .2)',
    backgroundColor: 'rgba($$color / .035)',
    borderColor: 'rgba($$color / .5)',
    textDecoration: 'none',
    color: '$text-primary',
    dark: { color: '$text-primary' },
    '& > div:first-of-type > span': {
      textDecoration: 'underline',
      color: 'rgba($$color / 1)',
      dark: { textDecoration: 'underline', color: 'rgba($$color / 1)' },
    },
    '& > div:not(:first-of-type)': {
      borderColor: 'rgba($$color / .5)',
    },
  },
});

const TitleContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  ml: '-.125rem',
  gap: '.6rem',
  fontSize: '$sm',
  fontWeight: 600,
  useFont: 'manrope',
  transition: 'all .15s ease-in-out',
});

const Description = styled('p', {
  fontSize: '$2xs',
});

const StarsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  right: 0,
  fontSize: '$3xs',
  py: '.2rem',
  px: '.4rem',
  gap: '.2rem',
  borderStyle: 'solid',
  borderColor: '$divider',
  borderTopWidth: 0,
  borderRightWidth: 0,
  borderLeftWidth: '$$borderSize',
  borderBottomWidth: '$$borderSize',
  borderBottomLeftRadius: '.5rem',
  transition: 'borderColor .15s ease-in-out',
});

interface ProjectCardProps {
  project?: Project;
}

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { isDark, themeReady } = useTheme();
  const { project } = props;

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

  if (!project) return null;
  return (
    <StyledProjectCard
      title={`Project: ${project?.name}`}
      href={
        project.inProgress
          ? project.link
            ? project.link
            : '#'
          : `/projects/${project.slug}`
      }
      underline={false}
      css={{ $$color: color || '$colors$toolbar-glow' }}
    >
      <TitleContainer>
        <Img
          src={`/static/images/projects/${project.icon}`}
          alt={`Icon for project "${project.name}"`}
          size={44}
        />
        <span>{project.name}</span>
      </TitleContainer>
      <Description>{project.description}</Description>
      <StarsContainer>
        <Icon path={mdiStar} size={0.7} />
        <span>222</span>
      </StarsContainer>
    </StyledProjectCard>
  );
};
