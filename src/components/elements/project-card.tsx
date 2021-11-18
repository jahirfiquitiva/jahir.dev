import { useMemo, CSSProperties, memo } from 'react';
import tw from 'twin.macro';

import { LinkCard, Image, Heading } from '~/components/atoms/simple';
import { Stack } from '~/components/elements';
import { useTheme } from '~/providers/theme';
import { Component, ComponentProps, ProjectProps } from '~/types';
import getReadableColor from '~/utils/colors/get-readable-color';
import buildShadowStyles from '~/utils/styles/build-shadow-styles';
import buildStyles from '~/utils/styles/build-styles';

const BaseProjectCard = tw(LinkCard)`
  relative
  w-full
  overflow-hidden
  grid
  grid-rows-1
  items-center
  auto-rows-min
  text-text-secondary
  rounded-lg
  truncate
  border-color[var(--dashed-color, var(--divider))]
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
  )
`;

const ProjectCardWithoutPreview = tw`grid-cols-1 [>div:first-of-type]:(p-8)`;
const ProjectCardWithPreview = tw`
  grid-template-columns[60% 1fr]
  sm:(grid-template-columns[70% 1fr])
  md:(grid-template-columns[60% 1fr])
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

const PreviewImage = tw(Image)`
  h-full w-full
  relative
  top-0
  right-0
  bottom-0
  left-0
  truncate
  rounded-l-none
  rounded-r-lg

  z-index[0]

  [> span:first-of-type]:(flex! flex-col justify-end)
  [> span:first-of-type, img]:(min-h-full!)

  [img]:(
    h-full w-full
    rounded-l-none
    rounded-r-lg
    m-0!
    opacity-75
    filter
    object-cover
    drop-shadow-project-preview
  )
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
        <DescriptionContainer>
          <p>{description}</p>
          <Stack stack={stack} tw={'opacity-85 mt-6'} />
        </DescriptionContainer>
      </DetailsContainer>
      {previewComponent || undefined}
    </BaseProjectCard>
  );
};

export const ProjectCard = memo(DefaultProjectCard);
