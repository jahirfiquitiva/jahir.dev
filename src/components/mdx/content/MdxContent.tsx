import Icon from '@mdi/react';
import { useMemo } from 'react';

import { Divider, Link, LinkButton } from '@/components/core';
import { mdiPencilOutline } from '@/components/icons';
import { usePalette } from '@/hooks/use-palette';
import { ReactionsProvider } from '@/providers/reactions';
import { useTheme } from '@/providers/theme';
import type { FC, Post } from '@/types';
import { getReadableColor } from '@/utils/color/get-readable-color';
import { hexToRGB } from '@/utils/color/hex-to-rgb';
import { getDomainFromUrl } from '@/utils/format/domain';
import { formatDate } from '@/utils/format/format-date';
import type { StitchesCSS as CSS } from '~/stitches';

import { Article } from './Article';
import { ShareButton } from './ShareButton';
import {
  ArticleFooter,
  ArticleHero,
  PostStats,
  MdxReactions,
  ShareAndEdit,
  Title,
} from './styled';
import { ViewsCounter } from './ViewsCounter';

const slugPath = (content: Post, forShare?: boolean): string => {
  if (content.slug === 'uses' && forShare) return 'uses';
  return `blog/${content.slug}`;
};

const editUrl = (content: Post) =>
  `https://github.com/jahirfiquitiva/jahir.dev/edit/main/content/${slugPath(
    content,
  )}.mdx`;

interface CommonContent {
  backText?: string;
  backHref?: string;
  content: Post;
}

// eslint-disable-next-line max-lines-per-function
export const MdxContent: FC<CommonContent> = (props) => {
  const { backText, backHref, content, children } = props;
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
  } = content;

  const { isDark, themeReady } = useTheme();
  const { palette: heroPalette = {} } = usePalette(hero);

  const isUsesPage = slug === 'uses';

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
    return { width: 666 };
  }, [heroMeta]);

  return (
    <>
      <Article>
        {backText && backHref && !isUsesPage && (
          <Link
            title={backText.toLowerCase()}
            href={backHref}
            css={{ alignSelf: 'flex-start', mx: '$6' }}
          >
            ← {backText}
          </Link>
        )}

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
          balancerRatio={slug.includes('uses') ? 1 : 0.45}
        >
          {title}
        </Title>

        <PostStats>
          {date && !isUsesPage ? (
            <>
              {formatDate(date)}
              {' • '}
            </>
          ) : null}
          {(readingTime?.text?.length || 0) > 0 && (
            <>
              {readingTime?.text}
              {' • '}
            </>
          )}
          <ViewsCounter
            slug={`blog--${slug}`}
            devToId={devToId}
            inProgress={inProgress}
          />
        </PostStats>

        <ReactionsProvider slug={`blog--${slug}`}>
          <MdxReactions
            inProgress={inProgress}
            css={{ order: 'unset !important' }}
          />

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
    </>
  );
};
