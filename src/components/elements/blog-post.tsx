import { CSSProperties, useMemo } from 'react';
import tw from 'twin.macro';

import { Heading, Image, Link, Divider } from '~/components/atoms/simple';
import useSafePalette from '~/hooks/useSafePalette';
import { useTheme } from '~/providers/theme';
import { Component, ComponentProps, Post } from '~/types';
import getColorFromPalette from '~/utils/colors/get-color-from-palette';
import hexToRGB from '~/utils/colors/hex-to-rgb';
import formatDate from '~/utils/format/format-date';

const BlogPostSection = tw.section`
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
  `https://github.com/jahirfiquitiva/jahir.dev/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://jahir.dev/blog/${slug}`,
  )}`;

interface BlogPostProps extends ComponentProps, Post {}

export const BlogPost: Component<BlogPostProps> = (props) => {
  const { slug, title, hero, date, readingTime, children } = props;
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
    <BlogPostSection>
      <Link
        title={'Link to go back to blog posts list'}
        href={'/blog'}
        tw={'mb-4 ml-4 lg:(ml-2) xl:(ml-0)'}
      >
        ← Back to posts list
      </Link>
      <article>
        <Heading style={titleStyles} tw={'mt-4 md:(mt-8) lg:(mt-10)'}>
          {title}
        </Heading>
        <p tw={'text-xs text-text-tertiary mt-4 mb-16'}>
          {formatDate(date)}
          {(readingTime?.text?.length || 0) > 0 && (
            <>
              {' • '}
              {readingTime?.text}
            </>
          )}
        </p>
        {hero && <Hero src={hero || ''} alt={title} priority />}
        {children}
        <Divider thin />
        <div tw={'mt-12 text-almost-tiny text-text-tertiary'}>
          <Link
            href={discussUrl(slug)}
            title={'Link to discuss blog post on Twitter'}
          >
            Discuss on Twitter
          </Link>
          {' • '}
          <Link href={editUrl(slug)} title={'Link to edit blog post on GitHub'}>
            Edit on GitHub
          </Link>
        </div>
      </article>
    </BlogPostSection>
  );
};
