import { CSSProperties, useMemo } from 'react';
import tw, { styled } from 'twin.macro';

import { Heading, Image, Link, Divider } from '~/components/atoms/simple';
import useSafePalette from '~/hooks/useSafePalette';
import { useTheme } from '~/providers/theme';
import {
  Component,
  ComponentProps,
  Post,
  ProjectProps as Project,
  CodingChallenge,
} from '~/types';
import getColorFromPalette from '~/utils/colors/get-color-from-palette';
import hexToRGB from '~/utils/colors/hex-to-rgb';
import formatDate from '~/utils/format/format-date';

const MdxContentSection = tw.section`
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
  my-24
  box-shadow[0 4px 6px -1px rgba(var(--shadow-color), 0.175),
    0 2px 4px -1px rgba(var(--shadow-color), 0.075)]
  [img]:(
    object-cover
    w-full
    max-height[180px !important]
    xs:(max-height[211px !important])
    sm:(max-height[239px !important])
    md:(max-height[298px !important])
    lg:(max-height[384px !important])
  )
`;

type ContentTypes = Post | Project | CodingChallenge;

const slugPath = (content: ContentTypes): string => {
  if ('icon' in content) return `projects/${content.slug}`;
  if ('hero' in content) return `blog/${content.slug}`;
  return `coding/${content.slug}`;
};

const editUrl = (content: ContentTypes) =>
  `https://github.com/jahirfiquitiva/jahir.dev/edit/main/data/${slugPath(
    content,
  )}.mdx`;

const discussUrl = (content: ContentTypes) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://jahir.dev/${slugPath(content)}`,
  )}`;

interface ContentFields {
  title: string;
  hero?: string;
  date?: string;
  readingTime?: string;
}

const getContentFields = (content: ContentTypes): ContentFields => {
  const fields: ContentFields = {
    title: 'title' in content ? content.title : content.name,
  };
  if ('hero' in content) fields.hero = content.hero;
  if ('date' in content) fields.date = content.date;
  if ('readingTime' in content) fields.readingTime = content.readingTime?.text;
  return fields;
};

interface CommonContent {
  backText?: string;
  backHref?: string;
  content: ContentTypes;
}

type MdxContentProps = ComponentProps & CommonContent;

export const MdxContent: Component<MdxContentProps> = (props) => {
  const { backText, backHref, content, children } = props;
  const { title, hero, date, readingTime } = getContentFields(content);

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
    <MdxContentSection>
      {backText && backHref && (
        <Link
          title={`Link to go ${backText.toLowerCase()}`}
          href={backHref}
          tw={'mb-4 ml-4 lg:(ml-2) xl:(ml-0)'}
        >
          ← {backText}
        </Link>
      )}

      <article>
        <Heading style={titleStyles} tw={'mt-4 md:(mt-8) lg:(mt-10)'}>
          {title}
        </Heading>

        <p tw={'text-xs text-text-tertiary mt-4 mb-16'}>
          {formatDate(date)}
          {(readingTime?.length || 0) > 0 && (
            <>
              {' • '}
              {readingTime}
            </>
          )}
        </p>

        {hero && <Hero src={hero || ''} alt={title} priority />}

        {children}

        <Divider thin />
        <p tw={'mt-12 text-almost-tiny text-text-tertiary'}>
          <Link href={discussUrl(content)} title={'Link to discuss on Twitter'}>
            Discuss on Twitter
          </Link>
          {' • '}
          <Link
            href={editUrl(content)}
            title={'Link to edit content on GitHub'}
          >
            Edit on GitHub
          </Link>
        </p>
      </article>
    </MdxContentSection>
  );
};
