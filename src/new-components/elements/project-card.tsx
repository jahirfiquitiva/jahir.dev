import { useMemo, CSSProperties } from 'react';
import tw, { css } from 'twin.macro';

import { LinkCard, Image, Heading } from '~/new-components/atoms/simple';
import { Stack } from '~/new-components/elements';
import { useTheme } from '~/providers/theme';
import { Component, ComponentProps, ProjectProps } from '~/types';
import buildShadowColors from '~/utils/build-shadow-colors';
import buildStyles from '~/utils/build-styles';
import getReadableColor from '~/utils/get-readable-color';

const BaseProjectCard = tw(LinkCard)`
  w-full
  overflow-hidden
  grid
  grid-rows-1
  grid-template-columns[60% 1fr]
  items-center
  auto-rows-min
  text-text-secondary
  rounded-lg
  border-color[var(--dashed-color, var(--divider))]
  sm:(grid-template-columns[70% 1fr])
  md:(grid-template-columns[60% 1fr])
  [*]:(transition-all duration-300)
  [p]:(text-text-secondary)

  hocus:(
    text-text-primary
    background-color[var(--bg-color)]
    border-color[var(--dashed-color, var(--divider))]
    
    [h4]:(underline color[var(--hl-color)])
    [p]:(text-text-primary)
    [img]:(transform scale-105 opacity-100)
    [ul]:(opacity-100)
    [div]:(last-of-type:(opacity-100 background-size[105%]))
  )
`;

const DetailsContainer = tw.div`
  p-8
  pr-0
  pb-10
  flex flex-col
  rounded-l-lg
  rounded-r-none
`;

const IconHeadingContainer = tw(DetailsContainer)`
  relative
  flex-row
  items-center
  justify-start
  p-0
  gap-8
  [img]:(
    opacity-90
    filter
    drop-shadow-project-icon
  )
`;

const DescriptionContainer = tw(DetailsContainer)`
  pl-2 pt-6 pb-0
  [p]:(text-almost-tiny)
`;

const ProjectHeading = tw(Heading)`
  absolute
  truncate
  text-text-primary
  text-sm
  z-index[1]
  left[calc(48px + 0.6rem)]
  text-shadow[1px 2px 2px var(--projects-card-text-shadow)]
`;

const PreviewImage = tw.div`
  h-full w-full
  rounded-l-none
  rounded-r-lg
  opacity-75
  bg-clip-border
  bg-no-repeat
  bg-right-bottom
  background-size[100%]
  filter
  drop-shadow-project-preview
`;

interface ProjectCardProps extends ComponentProps, ProjectProps {}

const defaultProps: ProjectCardProps = {
  title: 'Blueprint',
  description: 'Dashboard for creating Android icon packs',
  icon: '/static/images/projects/android/blueprint.png',
  preview: '/static/images/projects/android/blueprint-preview.png',
  link: 'https://github.com/jahirfiquitiva/Blueprint/',
  color: '#4d8af0',
  tag: 'android',
  stack: ['android', 'kotlin', 'material design'],
};

export const ProjectCard: Component<ProjectCardProps> = (
  props = defaultProps,
) => {
  const { title, description, link, icon, preview, stack, color, darkColor } =
    props || defaultProps;

  const { isDark, themeReady } = useTheme();

  const titleColors = useMemo<CSSProperties>(() => {
    if (!themeReady) return {};
    const projectColor = isDark ? darkColor || color : color;
    return buildStyles({
      '--hl-color': getReadableColor(projectColor, isDark),
    });
  }, [themeReady, isDark, color, darkColor]);

  const shadowColors = useMemo<CSSProperties>(() => {
    if (!themeReady) return {};
    const projectColor = isDark ? darkColor || color : color;
    return buildShadowColors(projectColor, 0.2, 0.4, isDark, 0.05);
  }, [themeReady, isDark, color, darkColor]);

  return (
    <BaseProjectCard
      title={`Link to project: ${title}`}
      href={link}
      style={shadowColors}
    >
      <DetailsContainer>
        <IconHeadingContainer>
          <Image src={icon} alt={title} size={48} />
          <ProjectHeading size={'4'} style={titleColors}>
            {title}
          </ProjectHeading>
        </IconHeadingContainer>
        <DescriptionContainer>
          <p>{description}</p>
          <Stack stack={stack} tw={'opacity-85 mt-6'} />
        </DescriptionContainer>
      </DetailsContainer>
      {preview ? (
        <PreviewImage
          css={css`
            background-image: url('${preview}');
          `}
        />
      ) : undefined}
    </BaseProjectCard>
  );
};
