/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-lines-per-function */
import { ImageResponse } from '@vercel/og';
import type { CSSProperties } from 'react';

export const runtime = 'edge';

const font = fetch(
  new URL('../../../assets/fonts/manrope-bold.ttf', import.meta.url),
).then((res) => res.arrayBuffer());

const pathEmojiMap = {
  '404': '👻',
  about: '😀',
  dashboard: 'ℹ️',
  donate: '🎁',
  projects: '💼',
  uses: '💻',
  blog: '📄',
};
type PathName = keyof typeof pathEmojiMap | null;

const pathTitleMap = {
  '404': 'Page not found',
  about: 'About',
  dashboard: 'Dashboard',
  donate: 'Donate',
  projects: 'Projects',
  uses: 'Uses',
  blog: 'Blog',
};

const LogoSvg = (props: { style?: CSSProperties }) => {
  return (
    <svg
      className={'logo'}
      viewBox={'0 0 32 32'}
      xmlns={'http://www.w3.org/2000/svg'}
      style={{
        filter: 'drop-shadow(0 1px 2px rgba(8, 15, 30, 0.5))',
        ...props.style,
      }}
    >
      <path
        d={
          'M25.4 3.9C22.8 1.3 19.4 0 16 0S9.2 1.3 6.6 3.9C1.5 9 1.5 17.5 6.6 22.6L16 32l9.4-9.4c5.1-5.1 5.1-13.6 0-18.7zM10 9.1V8h5.8c-.7.5-1.3 1.3-1.4 2.2h-3.3c-.6 0-1.1-.5-1.1-1.1zM21.5 14c0 .6-.5 1.1-1.1 1.1h-2.2c-.6 0-1.1.5-1.1 1.1v1.6c0 1.8-1.5 3.3-3.3 3.3s-3.3-1.5-3.3-3.3v-2.7h1.1c.6 0 1.1.5 1.1 1.1v1.6c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1v-1.6c0-1.8 1.5-3.3 3.3-3.3h3.3zm.5-4.9c0 .6-.5 1.1-1.1 1.1h-2.7c-.6 0-1.1.5-1.1 1.1v1.1c-.9.2-1.7.7-2.2 1.4v-2.6c0-1.8 1.5-3.3 3.3-3.3H22z'
        }
        fill={'#88a4e6'}
      />
    </svg>
  );
};

const titleFontSize = 72;
const LogoOrEmoji = (props: { path?: PathName }) => {
  const emoji = props.path ? pathEmojiMap[props.path] : null;
  if (!emoji) {
    return (
      <LogoSvg
        style={{
          width: titleFontSize * 2,
          height: titleFontSize * 2,
          filter: 'saturate(150%)',
        }}
      />
    );
  }
  return <span style={{ fontSize: titleFontSize }}>{emoji}</span>;
};

const PageTitle = (props: { path?: PathName; title?: string | null }) => {
  const { path, title } = props;
  const pathTitle = path ? pathTitleMap[path] : null;
  return (
    <p
      style={{
        alignSelf: 'flex-start',
        fontSize: titleFontSize,
        fontWeight: 700,
        maxWidth: 900,
        color: path ? 'white' : 'rgba(0, 0, 0, 0)',
        ...(path
          ? {}
          : {
              backgroundImage: 'linear-gradient(to right, #88a4e6, #81c1e9)',
              backgroundClip: 'text',
              filter: 'saturate(150%)',
            }),
      }}
    >
      {title || pathTitle || 'Jahir Fiquitiva'}
    </p>
  );
};

const Name = (props: { path?: PathName }) => {
  if (!props.path) return null;
  const fontSize = 40;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        fontSize,
      }}
    >
      <LogoSvg
        style={{
          width: fontSize,
          height: fontSize,
          filter: 'saturate(150%)',
        }}
      />
      <p
        style={{
          alignSelf: 'flex-start',
          fontWeight: 700,
          color: 'rgba(0, 0, 0, 0)',
          backgroundImage: 'linear-gradient(to right, #88a4e6, #81c1e9)',
          backgroundClip: 'text',
          filter: 'saturate(150%)',
        }}
      >
        Jahir Fiquitiva
      </p>
    </div>
  );
};

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.VERCEL_ENV === 'preview'
    ? process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://jahir.dev'
    : 'https://jahir.dev';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const path = (
    (searchParams.get('path') as string) || ''
  ).toLowerCase() as PathName;
  const title = searchParams.get('title');
  let postHero = searchParams.get('hero') || 'site/default-og.png';
  if (postHero.startsWith('/')) postHero = postHero.substring(1);
  console.error({ postHero });
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          padding: '48px 72px',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          gap: 12,
          fontFamily: 'Manrope',
          color: 'white',
          textShadow: '0px 2px 4px rgba(8 15 30 / 0.5)',
          backgroundColor: 'rgb(8, 15, 30)',
        }}
      >
        <img
          src={`${baseUrl}/${postHero}`}
          alt={title || 'Hero image'}
          width={1200}
          height={630}
          style={{
            position: 'absolute',
            width: 'auto',
            height: 'auto',
            margin: 0,
            objectFit: 'cover',
            objectPosition: 'center',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        />
        <div
          style={{
            backgroundColor: 'rgba(8, 15, 30, 0.36)',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        />
        <div
          style={{
            backgroundImage:
              'linear-gradient(65deg, rgba(8, 15, 30, 1) 0%, rgba(8, 15, 30, 0.5) 60%, rgba(8, 15, 30, 0) 100%)',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        />

        <LogoOrEmoji path={path} />
        <PageTitle path={path} title={title} />
        <Name path={path} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: 'fluent',
      fonts: [
        {
          name: 'Manrope',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  );
}
