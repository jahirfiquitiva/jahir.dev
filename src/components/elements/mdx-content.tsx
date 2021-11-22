import styled from '@emotion/styled';
import { CSSProperties, useMemo } from 'react';

import { Heading, Image, Link, Divider } from '~/components/atoms/simple';
import useSafePalette from '~/hooks/useSafePalette';
import { useTheme } from '~/providers/theme';
import {
  Component,
  ComponentProps,
  mediaQueries,
  Post,
  ProjectProps as Project,
  CodingChallenge,
} from '~/types';
import getColorFromPalette from '~/utils/colors/get-color-from-palette';
import hexToRGB from '~/utils/colors/hex-to-rgb';
import formatDate from '~/utils/format/format-date';

const MdxContentSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.4rem 0 1.6rem;
  width: 100%;

  ${mediaQueries.tablet.sm} {
    padding: 1.2rem 0 2rem;
  }

  ${mediaQueries.tablet.lg} {
    padding: 1.2rem 0 2.4rem;
  }
`;

const Hero = styled(Image)`
  border-radius: 6px;
  margin: 2.4rem 0;
  box-shadow: 0 4px 6px -1px rgba(var(--shadow-color), 0.175),
    0 2px 4px -1px rgba(var(--shadow-color), 0.075);

  & img {
    object-fit: cover;
    width: 100%;
    max-height: 180px !important;

    ${mediaQueries.mobile.md} {
      max-height: 211px !important;
    }

    ${mediaQueries.mobile.lg} {
      max-height: 239px !important;
    }

    ${mediaQueries.tablet.sm} {
      max-height: 298px !important;
    }

    ${mediaQueries.tablet.lg} {
      max-height: 384px !important;
    }
  }
`;

const BackLink = styled(Link)`
  margin-bottom: 0.4rem;
  margin-left: 0.4rem;
  ${mediaQueries.tablet.lg} {
    margin-left: 0.2rem;
  }
  ${mediaQueries.tablet.xl} {
    margin-left: 0;
  }
`;

const ContentTitle = styled(Heading)`
  margin-top: 0.4rem;
  ${mediaQueries.tablet.sm} {
    margin-top: 0.8rem;
  }
  ${mediaQueries.tablet.lg} {
    margin-top: 1rem;
  }
`;

const ContentIntro = styled.p`
  font-size: var(--font-xs);
  color: var(--text-tertiary);
  margin-top: 0.4rem;
  margin-bottom: 1.6rem;
`;

const DiscussEdit = styled.p`
  margin-top: 1.2rem;
  font-size: var(--font-2xs);
  color: var(--text-tertiary);
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
        <BackLink
          title={`Link to go ${backText.toLowerCase()}`}
          href={backHref}
        >
          ← {backText}
        </BackLink>
      )}

      <article>
        <ContentTitle style={titleStyles}>{title}</ContentTitle>

        <ContentIntro>
          {formatDate(date)}
          {(readingTime?.length || 0) > 0 && (
            <>
              {' • '}
              {readingTime}
            </>
          )}
        </ContentIntro>

        {hero && <Hero src={hero || ''} alt={title} priority />}

        {children}

        <Divider thin />
        <DiscussEdit>
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
        </DiscussEdit>
      </article>
    </MdxContentSection>
  );
};
