import { CSSProperties, useMemo } from 'react';
import tw from 'twin.macro';

import { Heading, Image, Link, Divider } from '~/components/atoms/simple';
import useSafePalette from '~/hooks/useSafePalette';
import { useTheme } from '~/providers/theme';
import {
  Component,
  ComponentProps,
  ProjectProps as ProjectType,
} from '~/types';
import getColorFromPalette from '~/utils/colors/get-color-from-palette';
import hexToRGB from '~/utils/colors/hex-to-rgb';

const ProjectSection = tw.section`
  flex
  flex-col
  pt-4 pb-16
  px-0
  w-full
  md:(pt-12 pb-20)
  lg:(pb-24)
`;

const Hero = tw(Image)`
  rounded
  filter
  drop-shadow-md
  my-12!
  [img]:(
    object-cover
    w-full
    h-auto
    rounded
    filter
    drop-shadow
    max-height[180px !important]
    xs:(max-height[211px !important])
    sm:(max-height[239px !important])
    md:(max-height[298px !important])
    lg:(max-height[384px !important])
  )
`;

const editUrl = (slug: string) =>
  `https://github.com/jahirfiquitiva/jahir.dev/edit/main/data/projects/${slug}.mdx`;
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://jahir.dev/projects/${slug}`,
  )}`;

interface ProjectProps extends ComponentProps, ProjectType {}

export const Project: Component<ProjectProps> = (props) => {
  const { slug, name, preview, children } = props;
  const hero = `/static/images/projects/${preview}`;
  const { isDark, themeReady } = useTheme();
  const { data: heroPalette } = useSafePalette(hero);

  const titleStyles = useMemo<CSSProperties>(() => {
    if (!themeReady || !heroPalette) return {};
    const color = hexToRGB(
      getColorFromPalette(heroPalette, isDark) || '#fff',
      0.4,
    );
    return {
      textShadow: `var(--text-shadow-size) var(--text-shadow-size) 0 ${color}`,
    };
  }, [themeReady, isDark, heroPalette]);

  return (
    <ProjectSection>
      <Link
        title={'Link to go back to projects list'}
        href={'/projects'}
        tw={'mb-4 ml-4 lg:(ml-2) xl:(ml-0)'}
      >
        ← Back to projects list
      </Link>
      <article>
        <Heading style={titleStyles} tw={'mt-4 md:(mt-8) lg:(mt-10)'}>
          {name}
        </Heading>
        {preview && <Hero src={hero || ''} alt={name} priority />}
        {children}
        <Divider thin />
        <div tw={'mt-12 text-almost-tiny text-text-tertiary'}>
          <Link
            href={discussUrl(slug)}
            title={'Link to discuss project on Twitter'}
          >
            Discuss on Twitter
          </Link>
          {' • '}
          <Link
            href={editUrl(slug)}
            title={'Link to edit project content on GitHub'}
          >
            Edit on GitHub
          </Link>
        </div>
      </article>
    </ProjectSection>
  );
};
