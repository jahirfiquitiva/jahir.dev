import { ImageResponse } from 'next/server';

import type { PathName } from './logo-title';
import { OgImage } from './og';

export const config = {
  runtime: 'edge',
  size: {
    width: 1200,
    height: 630,
  },
  contentType: 'image/png',
};

export const runtime = config.runtime;

export const getOgImage = async (
  path?: string | null,
  title?: string | null,
  hero?: string | null,
) => {
  const fontData = await fetch(
    new URL('../../assets/fonts/manrope-bold.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  const actualPath = (path || '').toLowerCase() as PathName;
  let actualHero = hero || '/static/images/site/default-og.png';
  if (actualHero.startsWith('/')) actualHero = actualHero.substring(1);

  return new ImageResponse(
    <OgImage path={actualPath} title={title} hero={actualHero} />,
    {
      width: config.size.width,
      height: config.size.height,
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
};
