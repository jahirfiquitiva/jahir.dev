import { mdiPencilOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { useMemo } from 'react';

import { Divider, Link, LinkButton, Section } from '@/components/atoms';
import { useSafePalette } from '@/hooks';
import { ReactionsProvider } from '@/providers/reactions';
import { useTheme } from '@/providers/theme';
import type { FC, HeroMeta, Post, Project } from '@/types';
import { getDomainFromUrl } from '@/utils';
import {
  formatDate,
  hexToRGB,
  getColorFromPalette,
  getReadableColor,
} from '@/utils';
import type { StitchesCSS as CSS } from '~/stitches';

import { Article } from './Article';
import { ShareButton } from './ShareButton';
import {
  ArticleFooter,
  ArticleHero,
  Intro,
  MdxReactions,
  ShareAndEdit,
  Title,
} from './styled';
import { ViewsCounter } from './ViewsCounter';

type ContentTypes = Post | Project;

const slugPath = (content: ContentTypes, forShare?: boolean): string => {
  if (content.slug === 'uses' && forShare) return 'uses';
  if ('icon' in content) return `projects/${content.slug}`;
  if ('hero' in content) return `blog/${content.slug}`;
  return `coding/${content.slug}`;
};

const editUrl = (content: ContentTypes) =>
  `https://github.com/jahirfiquitiva/jahir.dev/edit/main/content/${slugPath(
    content,
  )}.mdx`;

interface ContentFields {
  title: string;
  hero?: string;
  heroSource?: string;
  date?: string;
  readingTime?: string;
  slug?: string;
  devToId?: number;
  heroMeta?: HeroMeta;
  fullHeightHero?: boolean;
  inProgress?: boolean;
  color?: string;
}

const getContentFields = (content: ContentTypes): ContentFields => {
  const fields: ContentFields = {
    title: 'title' in content ? content.title : content.name,
  };
  if ('hero' in content) fields.hero = content.hero;
  if ('heroSource' in content) fields.heroSource = content.heroSource;
  if ('date' in content) fields.date = content.date;
  if ('readingTime' in content) fields.readingTime = content.readingTime?.text;
  if ('slug' in content) fields.slug = content.slug;
  if ('devToId' in content) fields.devToId = content.devToId;
  if ('heroMeta' in content) fields.heroMeta = content.heroMeta;
  if ('fullHeightHero' in content)
    fields.fullHeightHero = content.fullHeightHero;
  if ('inProgress' in content) fields.inProgress = content.inProgress;
  if ('color' in content) fields.color = content.color;
  return fields;
};

interface CommonContent {
  backText?: string;
  backHref?: string;
  content: ContentTypes;
  contentType: 'blog' | 'projects';
}

// eslint-disable-next-line max-lines-per-function
export const MdxContent: FC<CommonContent> = (props) => {
  const { backText, backHref, content, contentType, children } = props;
  const {
    title,
    hero,
    heroSource,
    date,
    readingTime,
    slug,
    devToId,
    heroMeta,
    fullHeightHero,
    inProgress,
    color: postColor,
  } = getContentFields(content);

  const { isDark, themeReady } = useTheme();
  const { data: heroPalette } = useSafePalette(hero);

  const isUsesPage = useMemo<boolean>(() => slug === 'uses', [slug]);

  const titleStyles = useMemo<CSS>(() => {
    if (!themeReady || !heroPalette) return {};
    const paletteColor =
      postColor || (isDark ? heroPalette.vibrant : heroPalette.darkVibrant);
    const color = hexToRGB(
      isDark ? getReadableColor(paletteColor, isDark) : paletteColor,
      isDark ? 1 : 0.36,
    );
    if (!color || color === 'rgba(0 0 0 / 0)') return {};
    return {
      $$textShadowColor: color,
      dark: {
        $$textShadowColor: color,
        textShadow: 'none',
        color: '$transparent',
        background:
          'linear-gradient(to right, $$textShadowColor, $$textShadowColor)',
        backgroundClip: 'text',
        transition: 'all .15s ease-in-out',
      },
    };
  }, [themeReady, isDark, heroPalette, postColor]);

  const extraHeroProps = useMemo(() => {
    if (heroMeta && heroMeta.blur64) {
      return {
        placeholder: 'blur',
        blurDataURL: heroMeta.blur64,
        width: heroMeta.size.width || 666,
        height: heroMeta.size.height || 375,
      };
    }
    return {};
  }, [heroMeta]);

  return (
    <Section>
      {backText && backHref && !isUsesPage && (
        <Link
          title={backText.toLowerCase()}
          href={backHref}
          css={{ alignSelf: 'flex-start', mx: '$6' }}
        >
          ← {backText}
        </Link>
      )}

      <Article>
        <Title
          css={{
            ...(isUsesPage
              ? {
                  mt: 0,
                  fontSize: '$2xl',
                }
              : {}),
            ...titleStyles,
          }}
        >
          {title}
        </Title>

        <Intro>
          {date && !isUsesPage ? (
            <>
              {formatDate(date)}
              {' • '}
            </>
          ) : null}
          {(readingTime?.length || 0) > 0 && <>{readingTime}</>}
          <ViewsCounter
            slug={`${contentType}--${slug}`}
            devToId={devToId}
            inProgress={inProgress}
          />
        </Intro>

        <ReactionsProvider slug={`${contentType}--${slug}`}>
          <MdxReactions inProgress={inProgress} />

          {hero && (
            <figure>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <ArticleHero
                src={hero || ''}
                alt={`Cover image for "${title}"`}
                priority
                {...extraHeroProps}
                quality={100}
                cropHero={!fullHeightHero || !slug?.includes('uses')}
              />
              {heroSource && (
                <figcaption>
                  Image from:{' '}
                  <Link href={heroSource} title={heroSource}>
                    {getDomainFromUrl(heroSource)}
                  </Link>
                </figcaption>
              )}
            </figure>
          )}
          {children}
          <Divider
            css={{
              mx: '-$14',
              '@tablet-md': {
                mx: 0,
              },
            }}
          />

          <ArticleFooter>
            <ShareAndEdit>
              <ShareButton title={title} slug={slugPath(content, true)} />
              <LinkButton
                href={editUrl(content)}
                title={'Edit content on GitHub'}
                outlined
              >
                <Icon path={mdiPencilOutline} size={0.9} /> Edit on GitHub
              </LinkButton>
            </ShareAndEdit>
            <MdxReactions inProgress={inProgress} />
          </ArticleFooter>
        </ReactionsProvider>
      </Article>
    </Section>
  );
};
