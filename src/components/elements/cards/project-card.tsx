import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useMemo, CSSProperties, memo } from 'react';

import { LinkCard, Image, Heading } from '~/components/atoms/simple';
import { Stack } from '~/components/elements';
import { useTheme } from '~/providers/theme';
import { Component, ComponentProps, mediaQueries, ProjectProps } from '~/types';
import getReadableColor from '~/utils/colors/get-readable-color';
import buildShadowStyles from '~/utils/styles/build-shadow-styles';
import buildStyles from '~/utils/styles/build-styles';

const BaseProjectCard = styled(LinkCard)`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  grid-template-columns: minmax(0, 1fr);
  grid-auto-rows: min-content;
  color: var(--text-secondary);
  border-radius: 10px;
  border-color: var(--dashed-color, var(--divider));
  box-shadow: var(--shadow-sm);

  & * {
    transition: all 0.3s ease-in-out;
  }
  & p {
    color: var(--text-secondary);
  }

  &:hover,
  &:focus {
    color: var(--text-primary);
    background-color: var(--bg-color);
    border-color: var(--dashed-color, var(--divider));

    & h4 {
      text-decoration: underline;
      color: var(--hl-color);
    }
    & p {
      color: var(--text-primary);
    }
    & img {
      transform: scale(1.05);
    }
    & img,
    & ul {
      opacity: 1 !important;
    }
  }
`;

const ProjectCardWithoutPreview = css`
  grid-template-columns: minmax(0, 1fr);
  & > div:first-of-type {
    padding: 0.8rem;
  }
`;

const ProjectCardWithPreview = css`
  grid-template-columns: 60% 1fr;

  ${mediaQueries.tablet.sm} {
    grid-template-columns: 61% 1fr;
  }
`;

const DetailsContainer = styled.div`
  padding: 0.8rem 0 0.8rem 1rem;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const IconHeadingContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.6rem;
  margin-left: -0.2rem;
  gap: 0.8rem;

  & img {
    opacity: 0.9;
    filter: drop-shadow(0 1px 2px var(--filter-color, var(--dashed-color)));
  }
`;

const ProjectHeading = styled(Heading)`
  position: absolute;
  color: var(--text-primary);
  font-size: var(--font-sm);
  z-index: 1;
  left: calc(48px + 0.6rem);
  text-shadow: 1px 2px 2px var(--projects-card-text-shadow);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProjectDescription = styled.p`
  font-size: var(--font-2xs);
`;

const PreviewImage = styled(Image)`
  min-height: 100% !important;
  overflow: hidden;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 0;
  display: flex !important;
  flex-direction: column;

  & > span:first-of-type {
    flex: 1;
    & > img {
      position: absolute !important;
      max-height: 165px !important;
      opacity: 0.8;
      object-fit: cover;
      object-position: bottom right;
      margin-bottom: 0 !important;
      filter: drop-shadow(2px 3px 4px var(--filter-color, var(--dashed-color)));
    }
  }
`;

interface ProjectCardProps extends ComponentProps, ProjectProps {}

const DefaultProjectCard: Component<ProjectCardProps> = (props) => {
  const { name, description, link, icon, preview, stack, color, darkColor } =
    props;

  const { isDark, themeReady } = useTheme();

  const projectColor = useMemo<string | null | undefined>(() => {
    if (!themeReady) return null;
    return isDark ? darkColor || color : color;
  }, [isDark, color, darkColor, themeReady]);

  const titleColors = useMemo<CSSProperties>(() => {
    if (!themeReady || !projectColor) return {};
    const textColor = getReadableColor(projectColor, isDark);
    return buildStyles({ '--hl-color': textColor || undefined });
  }, [themeReady, isDark, projectColor]);

  const shadowColors = useMemo<CSSProperties>(() => {
    if (!themeReady || !projectColor) return {};
    return buildShadowStyles(projectColor, 0.2, 0.4, isDark, 0.05);
  }, [themeReady, isDark, projectColor]);

  const cardExtraStyles = useMemo(() => {
    if (preview) return ProjectCardWithPreview;
    return ProjectCardWithoutPreview;
  }, [preview]);

  const previewComponent = useMemo(() => {
    if (!preview) return null;
    return (
      <PreviewImage
        src={`/static/images/projects/${preview}`}
        alt={`Preview image for: ${name}`}
      />
    );
  }, [preview, name]);

  return (
    <BaseProjectCard
      title={`Link to project: ${name}`}
      href={link}
      style={shadowColors}
      underline={false}
      css={cardExtraStyles}
    >
      <DetailsContainer>
        <IconHeadingContainer>
          <Image src={`/static/images/projects/${icon}`} alt={name} size={44} />
          <ProjectHeading size={'4'} style={titleColors}>
            {name}
          </ProjectHeading>
        </IconHeadingContainer>
        <ProjectDescription>{description}</ProjectDescription>
        <Stack
          stack={stack}
          css={css`
            opacity: 0.8;
            margin-top: 0.4rem;
          `}
        />
      </DetailsContainer>
      {previewComponent || undefined}
    </BaseProjectCard>
  );
};

export const ProjectCard = memo(DefaultProjectCard);
