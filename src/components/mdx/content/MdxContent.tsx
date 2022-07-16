import { mdiPencilOutline, mdiShareVariantOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { useMemo } from 'react';

import { Button, Divider, Link, LinkButton } from '@/components/atoms';
import { Section } from '@/components/elements';
import { useHasMounted, useSafePalette } from '@/hooks';
import { ReactionsProvider } from '@/providers/reactions';
import { useTheme } from '@/providers/theme';
import type { FC, HeroMeta, Post, Project } from '@/types';
import {
  formatDate,
  hexToRGB,
  getColorFromPalette,
  getReadableColor,
} from '@/utils';
import type { StitchesCSS as CSS } from '~/stitches';

import { Article } from './Article';
import {
  ArticleFooter,
  ArticleImg,
  Intro,
  MdxReactions,
  ShareAndEdit,
  Title,
} from './styled';

type ContentTypes = Post | Project;

const slugPath = (content: ContentTypes): string => {
  if ('icon' in content) return `projects/${content.slug}`;
  if ('hero' in content) return `blog/${content.slug}`;
  return `coding/${content.slug}`;
};

const editUrl = (content: ContentTypes) =>
  `https://github.com/jahirfiquitiva/jahir.dev/edit/main/content/${slugPath(
    content,
  )}.mdx`;

const shareUrl = (content: ContentTypes) =>
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `https://jahir.dev/${slugPath(content)} by @jahirfiquitiva`,
  )}`;

interface ContentFields {
  title: string;
  hero?: string;
  date?: string;
  readingTime?: string;
  slug?: string;
  devToId?: number;
  heroMeta?: HeroMeta;
}

const getContentFields = (content: ContentTypes): ContentFields => {
  const fields: ContentFields = {
    title: 'title' in content ? content.title : content.name,
  };
  if ('hero' in content) fields.hero = content.hero;
  if ('date' in content) fields.date = content.date;
  if ('readingTime' in content) fields.readingTime = content.readingTime?.text;
  if ('slug' in content) fields.slug = content.slug;
  if ('devToId' in content) fields.devToId = content.devToId;
  if ('heroMeta' in content) fields.heroMeta = content.heroMeta;
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
  const hasMounted = useHasMounted();
  const { backText, backHref, content, contentType, children } = props;
  const { title, hero, date, readingTime, slug, /*devToId,*/ heroMeta } =
    getContentFields(content);

  const { isDark, themeReady } = useTheme();
  const { data: heroPalette } = useSafePalette(hero);

  const shareData = useMemo(() => {
    return {
      title,
      text: `${title} by @jahirfiquitiva`,
      url: `https://jahir.dev/${slugPath(content)}`,
    };
  }, [title, content]);

  const canShare = useMemo<boolean>(() => {
    try {
      if (!hasMounted) return false;
      return navigator.canShare(shareData);
    } catch (e) {
      return false;
    }
  }, [hasMounted, shareData]);

  const titleStyles = useMemo<CSS>(() => {
    if (!themeReady || !heroPalette) return {};
    const color = hexToRGB(
      isDark
        ? getReadableColor(heroPalette.vibrant, isDark)
        : getColorFromPalette(heroPalette, isDark) || '#fff',
      isDark ? 1 : 0.4,
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
  }, [themeReady, isDark, heroPalette]);

  const extraHeroProps = useMemo(() => {
    if (heroMeta && heroMeta.blur64) {
      return { placeholder: 'blur', blurDataURL: heroMeta.blur64 };
    }
    return {};
  }, [heroMeta]);

  return (
    <Section>
      {backText && backHref && (
        <Link
          title={backText.toLowerCase()}
          href={backHref}
          css={{ alignSelf: 'flex-start', mx: '.4rem' }}
        >
          ← {backText}
        </Link>
      )}

      <Article>
        <Title css={titleStyles}>{title}</Title>

        <Intro>
          {formatDate(date)}
          {(readingTime?.length || 0) > 0 && (
            <>
              {' • '}
              {readingTime}
            </>
          )}
          {/* <ViewsCounter slug={`${contentType}--${slug}`} devToId={devToId} /> */}
        </Intro>

        <ReactionsProvider slug={`${contentType}--${slug}`}>
          <MdxReactions />

          {hero && (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <ArticleImg
              src={hero || ''}
              alt={title}
              priority
              width={666}
              height={375}
              {...extraHeroProps}
              quality={100}
              css={{ my: '$$verticalContentPadding' }}
            />
          )}
          {children}
          <Divider
            css={{
              mx: '-.875rem',
              '@tablet-md': {
                mx: 0,
              },
            }}
          />

          <ArticleFooter>
            <ShareAndEdit>
              {canShare ? (
                <Button
                  title={'Share blog post'}
                  onClick={async () => {
                    try {
                      await navigator.share(shareData);
                    } catch (err) {}
                  }}
                >
                  <Icon path={mdiShareVariantOutline} size={0.9} /> Share
                </Button>
              ) : (
                <LinkButton
                  href={shareUrl(content)}
                  title={'Share blog post on Twitter'}
                >
                  <Icon path={mdiShareVariantOutline} size={0.9} /> Share on
                  Twitter
                </LinkButton>
              )}
              <LinkButton
                href={editUrl(content)}
                title={'Edit content on GitHub'}
                outlined
              >
                <Icon path={mdiPencilOutline} size={0.9} /> Edit on GitHub
              </LinkButton>
            </ShareAndEdit>
            <MdxReactions />
          </ArticleFooter>
        </ReactionsProvider>
      </Article>
    </Section>
  );
};
