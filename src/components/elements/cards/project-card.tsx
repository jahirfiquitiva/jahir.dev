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
  shadow-sm
  border-color[var(--dashed-color, var(--divider))]
  [*]:(transition[all .3s ease-in-out])
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
  md:(grid-template-columns[61% 1fr])
`;

const DetailsContainer = tw.div`
  p-8
  pl-10
  pr-0
  flex flex-col
  rounded-l-lg
  rounded-r-none
`;

const IconHeadingContainer = tw.div`
  relative
  flex
  items-center
  justify-start
  gap-8
  mb-6
  margin-right[-0.2rem]
  [img]:(
    opacity-90
    filter
    drop-shadow-project-icon
  )
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
  min-h-full!
  overflow-hidden
  rounded-l-none
  rounded-r-lg
  z-index[0]
  flex!
  flex-col

  [> span:first-of-type]:(
    flex-1
    [img]:(
      absolute!
      max-height[165px]
      mb-0!
      opacity-80
      object-cover
      object-right-bottom
      filter
      drop-shadow-project-preview
    )
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
        <p tw={'text-almost-tiny'}>{description}</p>
        <Stack stack={stack} tw={'opacity-80 mt-4'} />
      </DetailsContainer>
      {previewComponent || undefined}
    </BaseProjectCard>
  );
};

export const ProjectCard = memo(DefaultProjectCard);
