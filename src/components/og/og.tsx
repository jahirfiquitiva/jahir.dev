import 'server-only';
/* eslint-disable @next/next/no-img-element */

import defaultHero from '@/assets/images/default-og.png';

import { LogoOrEmoji, PageTitle, PathName } from './logo-title';
import { Name } from './name';

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.VERCEL_ENV === 'preview'
      ? process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'https://jahir.dev'
      : 'https://jahir.dev';

interface OgImageProps {
  path?: PathName;
  title?: string | null;
  hero?: string | null;
}

const getGradientOverlay = (title?: string | null) => {
  return [
    'rgba(8, 15, 30, 1) 0%',
    Boolean(title) ? 'rgba(8, 15, 30, 0.5) 60%' : 'rgba(8, 15, 30, 0.5) 50%',
    Boolean(title) ? 'rgba(8, 15, 30, 0.05) 100%' : 'rgba(8, 15, 30, 0) 100%',
  ];
};

export const OgImage = (props: OgImageProps) => {
  const { path, title, hero } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        padding: '56px 104px',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        gap: Boolean(path) ? 0 : 12,
        fontFamily: 'Manrope',
        color: 'white',
        textShadow: '0px 2px 4px rgba(8 15 30 / 0.5)',
        backgroundColor: 'rgb(8, 15, 30)',
      }}
    >
      <img
        src={!hero ? defaultHero.src : `${baseUrl}/${hero}`}
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
          mixBlendMode: 'multiply',
          backgroundImage:
            // eslint-disable-next-line max-len
            `linear-gradient(65deg, ${getGradientOverlay(title).join(', ')})`,
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
  );
};
