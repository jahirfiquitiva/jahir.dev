import type { SatoriOptions } from 'next/dist/compiled/@vercel/og/satori';
import { ImageResponse } from 'next/og';

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

const getFontData = async (
  path: string,
): Promise<SatoriOptions['fonts'] | undefined> => {
  const url = new URL(path, import.meta.url);
  try {
    const fontData = await fetch(url)
      .then((res) => res.arrayBuffer())
      .catch(null);
    console.error({ url: url.href, fontData });
    if (!fontData) return undefined;
    return [
      {
        name: 'Manrope',
        data: fontData,
        style: 'normal',
      },
    ];
  } catch (e) {
    if (e instanceof Error) {
      console.error({
        url: url.href,
        error: `${e.name}: ${e.message}`,
        cause: e.cause?.toString()?.split(/\r?\n/)[0],
      });
    }
    return undefined;
  }
};

export const getOgImage = async (
  path?: string | null,
  title?: string | null,
  hero?: string | null,
) => {
  const actualPath = (path || '').toLowerCase() as PathName;
  let actualHero = hero || null; //'/static/images/site/default-og.png';
  if (actualHero && actualHero.startsWith('/'))
    actualHero = actualHero.substring(1);

  return new ImageResponse(
    <OgImage path={actualPath} title={title} hero={actualHero} />,
    {
      width: config.size.width,
      height: config.size.height,
      emoji: 'fluent',
      fonts: await getFontData('../../assets/fonts/manrope-bold.ttf'),
    },
  );
};
