/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-lines-per-function */
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import type { CSSProperties } from 'react';

export const runtime = 'edge';

const font = fetch(
  new URL('../../assets/fonts/manrope-bold.ttf', import.meta.url),
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

const LogoOrEmoji = (props: { path?: PathName }) => {
  const emoji = props.path ? pathEmojiMap[props.path] : null;
  if (!emoji) {
    return (
      <LogoSvg
        style={{
          width: 96,
          height: 96,
        }}
      />
    );
  }
  return <span style={{ fontSize: 56 }}>{emoji}</span>;
};

const PageTitle = (props: { path?: PathName; title?: string | null }) => {
  const { path, title } = props;
  return (
    <p
      style={{
        fontSize: 56,
        fontWeight: 700,
        maxWidth: 900,
        color: path ? 'white' : 'rgba(0, 0, 0, 0)',
        ...(path
          ? {}
          : {
              backgroundImage: 'linear-gradient(to right, #88a4e6, #81c1e9)',
              backgroundClip: 'text',
            }),
      }}
    >
      {title || 'Jahir Fiquitiva'}
    </p>
  );
};

const Name = (props: { path?: PathName }) => {
  if (!props.path) return null;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        fontSize: 32,
      }}
    >
      <span>
        <LogoSvg />
      </span>
      <p
        style={{
          fontWeight: 700,
          color: 'rgba(0, 0, 0, 0)',
          backgroundImage: 'linear-gradient(to right, #88a4e6, #81c1e9)',
          backgroundClip: 'text',
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
    : 'https://jahir.dev';

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const path = searchParams.get('path') as PathName;
  const title = searchParams.get('title');
  const postHero = searchParams.get('hero') || 'site/default-og.png';
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
          justifyContent: 'flex-end',
          fontFamily: 'Manrope',
          fontSize: 28,
          color: 'white',
          textShadow: '0 2px 4px rgba(8, 15, 30, 0.5)',
          backgroundColor: 'rgb(8, 15, 30)',
        }}
      >
        <img
          src={`${baseUrl}/static/images/${postHero}`}
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
            backgroundColor: 'rgba(8, 15, 30, 0.25)',
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
              'linear-gradient(68deg, rgba(8, 15, 30, 1) 0%, rgba(8, 15, 30, 0.5) 55%, rgba(8, 15, 30, 0) 100%)',
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
