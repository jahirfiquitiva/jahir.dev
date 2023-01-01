import Icon from '@mdi/react';
import { useMemo } from 'react';

import { Img, Link } from '@/components/atoms';
import { useRequest } from '@/hooks/useRequest';
import { mdiStar } from '@/icons';
import { useTheme } from '@/providers/theme';
import type { Project, FC } from '@/types';
import { getReadableColor } from '@/utils/color/get-readable-color';
import { hexToRGB } from '@/utils/color/hex-to-rgb';
import { styled } from '~/stitches';

const StyledProjectCard = styled(Link, {
  $$color: '$colors$toolbar-glow',
  $$borderSize: '1px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  py: '$14',
  px: '$16',
  gap: '$10',
  backgroundColor: 'rgba(9 17 34 / 0.006)',
  border: '$$borderSize solid $divider',
  borderRadius: '$space$8',
  color: '$text-secondary',
  transition: 'all .25s ease-in-out',
  dark: {
    backgroundColor: 'rgba(235 240 251 / 0.008)',
  },
  '& > div:first-of-type > img': {
    backgroundImage: 'none !important',
    filter:
      'saturate(0.95) opacity(0.85) drop-shadow(0 1px 2px rgba($$color / .5))',
  },
  '& > div:first-of-type > *': {
    transition: 'color .15s ease-in-out',
  },
  hocus: {
    $$borderSize: '1px',
    my: 1,
    py: 'calc($14 - 1px)',
    px: 'calc($16 - 1px)',
    transform: 'scale(1.0125)',
    boxShadow: '0 0 8px 2px rgba($$color / .2), 0 0 1px 1px rgba($$color / .5)',
    backgroundColor: 'rgba($$color / .035)',
    borderColor: 'rgba($$color / .5)',
    textDecoration: 'none',
    color: '$text-primary',
    dark: { color: '$text-primary', backgroundColor: 'rgba($$color / .04)' },
    '& > div:first-of-type > img': {
      filter:
        'saturate(1) opacity(1) drop-shadow(0 1px 2px rgba($$color / .5))',
    },
    '& > div:first-of-type > span': {
      textDecoration: 'underline',
      color: 'rgba($$color / 1)',
      dark: { textDecoration: 'underline', color: 'rgba($$color / 1)' },
    },
    '& > div:not(:first-of-type)': {
      $$borderSize: '2px',
      borderColor: 'rgba($$color / .5)',
    },
  },
});

const TitleContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  ml: '-$2',
  gap: '$12',
  fontSize: '$sm',
  fontWeight: 600,
  useFont: 'manrope',
  color: '$text-primary',
  transition: 'all .15s ease-in-out',
  '& > span': {
    ellipsize: true,
  },
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
  py: '$3',
  px: '$6',
  gap: '$3',
  borderStyle: 'solid',
  borderColor: '$divider',
  borderTopWidth: 0,
  borderRightWidth: 0,
  borderLeftWidth: '$$borderSize',
  borderBottomWidth: '$$borderSize',
  borderBottomLeftRadius: '$space$8',
  transition: 'all .15s ease-in-out',
  transitionDelay: '-.05s',
});

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
      href={
        project.inProgress || project.hide
          ? project.link
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
