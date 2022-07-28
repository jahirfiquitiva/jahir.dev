/* eslint-disable max-lines-per-function */
import Icon from '@mdi/react';
import { useMemo } from 'react';

import { Img, Link } from '@/components/atoms';
import { useSafePalette } from '@/hooks';
import { useTheme } from '@/providers/theme';
import type { FC } from '@/types';
import { getReadableColor, hexToRGB } from '@/utils';
import { styled } from '~/stitches';

const Card = styled(Link, {
  $$color: '$colors$toolbar-glow',
  $$textColor: '$colors$divider',
  $$borderSize: '1px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  p: '$10',
  gap: '$10',
  backgroundColor: 'rgba($$color / .06)',
  border: '$$borderSize solid $divider',
  borderRadius: '$space$8',
  color: 'rgba($$textColor / .85)',
  transition: 'all .25s ease-in-out',
  maxWidth: '100%',
  dark: {
    backgroundColor: 'rgba($$color / .1)',
  },
  hocus: {
    $$borderSize: '2px',
    p: 'calc($10 - 1px)',
    transform: 'scale(1.0125)',
    boxShadow: '0 0 8px 2px rgba($$color / .2)',
    backgroundColor: 'rgba($$color / .12)',
    borderColor: 'rgba($$textColor / .36)',
    textDecoration: 'none',
    color: 'rgba($$textColor / 1)',
    dark: {
      color: 'rgba($$textColor / 1)',
      backgroundColor: 'rgba($$color / .14)',
    },
    '& p:first-of-type': {
      textDecoration: 'underline',
    },
  },
});

const Texts = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%',
  ellipsize: true,
  '& > p': {
    maxWidth: '100%',
    ellipsize: true,
  },
});

const Title = styled('p', {
  fontSize: '$xs',
  useFont: 'manrope',
  fontWeight: 700,
});

const Subtitle = styled('p', {
  fontSize: '$3xs',
});

interface ImageProps {
  url: string;
  alt: string;
}

interface ActivityCardProps {
  title: string;
  href?: string;
  image?: ImageProps;
  smallImage?: ImageProps;
  texts: {
    first: string;
    second: string;
    third?: string;
  };
  empty: {
    is: boolean;
    text: string;
    iconPath: string;
  };
}

export const ActivityCard: FC<ActivityCardProps> = (props) => {
  const { image, title, href, texts, empty } = props;
  const { data: palette } = useSafePalette(image?.url);
  const { isDark, themeReady } = useTheme();

  const bgColor = useMemo<string>(() => {
    if (!themeReady) return '';
    return hexToRGB(
      isDark ? palette.darkMuted : palette.vibrant,
      undefined,
      true,
    );
  }, [isDark, themeReady, palette]);

  const textColor = useMemo<string>(() => {
    if (!themeReady) return '';
    return hexToRGB(
      getReadableColor(isDark ? palette.vibrant : palette.darkMuted, isDark),
      undefined,
      true,
    );
  }, [isDark, themeReady, palette]);

  return (
    <Card
      title={title}
      href={href || '#'}
      underline={false}
      css={{
        ...props.css,
        $$color: bgColor,
        $$textColor: textColor,
        borderColor: image && !empty.is ? 'rgba($$textColor / .16)' : undefined,
        pointerEvents: href ? 'auto' : 'none',
      }}
      style={props.style}
      className={props.className}
    >
      {image && !empty.is ? (
        <Img
          src={image?.url}
          alt={image?.alt || ''}
          width={56}
          height={56}
          css={{ borderRadius: '$space$4' }}
        />
      ) : (
        <Icon path={empty.iconPath} size={1} />
      )}
      <Texts>
        {!empty.is ? (
          <>
            <Title>{texts.first}</Title>
            <Subtitle>{texts.second}</Subtitle>{' '}
            {texts.third ? <small>{texts.third}</small> : null}
          </>
        ) : (
          <p>{empty.text}</p>
        )}
      </Texts>
    </Card>
  );
};
