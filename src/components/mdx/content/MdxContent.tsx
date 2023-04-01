import { useMemo } from 'react';

import { Divider, Section } from '@/components/atoms';
import { usePalette } from '@/hooks/usePalette';
import { useTheme } from '@/providers/theme';
import type { FC, Post } from '@/types';
import { getReadableColor } from '@/utils/color/get-readable-color';
import { hexToRGB } from '@/utils/color/hex-to-rgb';
import type { StitchesCSS as CSS } from '~/stitches';

import { Article } from './Article';
import { ShareButton } from './ShareButton';
import { ArticleFooter, ArticleHero, ShareAndEdit, Title } from './styled';

interface CommonContent {
  content: Post;
}

// eslint-disable-next-line max-lines-per-function
export const MdxContent: FC<CommonContent> = (props) => {
  const { content, children } = props;
  const { title, hero } = content;

  const { isDark, themeReady } = useTheme();
  const { palette: heroPalette = {} } = usePalette(hero);

  const titleStyles = useMemo<CSS>(() => {
    if (!themeReady || !heroPalette) return {};
    const paletteColor = isDark ? heroPalette.vibrant : heroPalette.darkVibrant;
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
  }, [themeReady, isDark, heroPalette]);

  return (
    <Section>
      <Article>
        <Title
          css={{
            ...{
              mt: 0,
              fontSize: '$2xl',
            },
            ...titleStyles,
          }}
        >
          {title}
        </Title>

        {hero && (
          <figure>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <ArticleHero
              src={hero || ''}
              alt={`Cover image for "${title}"`}
              priority
              quality={100}
            />
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
            <ShareButton title={title} slug={'/uses'} />
          </ShareAndEdit>
        </ArticleFooter>
      </Article>
    </Section>
  );
};
