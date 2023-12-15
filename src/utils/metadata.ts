import type { Metadata } from 'next';

import { config } from '@/utils/og';

import { buildOgImageUrl } from './og';

type MetaImageStyle = 'summary_large_image' | 'summary';

const defaultLogoImage =
  'https://jahir.dev/static/images/brand/logo-full-me.png';

export const getStaticMetadata = (data: {
  title: string;
  description: string;
  keywords?: string | Array<string> | null;
  exactUrl?: string;
  image?: string;
  metaImageStyle?: MetaImageStyle;
}): Metadata => {
  const { title, description, keywords, exactUrl, image, metaImageStyle } =
    data;

  const actualDefaultImage =
    metaImageStyle === 'summary' ? defaultLogoImage : buildOgImageUrl();
  const actualImage = image || actualDefaultImage;
  const actualMetaImageStyle =
    actualImage === defaultLogoImage
      ? 'summary'
      : metaImageStyle || 'summary_large_image';
  const images = [
    {
      url: actualImage,
      alt: `Preview for site: "${title}"`,
      type: config.contentType,
      width: config.size.width,
      height: config.size.height,
    },
  ];

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Jahir Fiquitiva', url: 'https://jahir.dev' }],
    openGraph: {
      title,
      description,
      url: exactUrl || 'https://jahir.dev',
      siteName: title,
      images,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title,
      description,
      images,
      card: actualMetaImageStyle,
      creator: '@jahirfiquitiva',
      site: '@jahirfiquitiva',
    },
    verification: {
      google: 'lJwL3cKpjX_Eqp6yEY4hsydJazQl85xv29ZUmEg4oEE',
    },
    metadataBase: new URL('https://jahir.dev'),
  };
};

export const colorMetaTags = [
  'theme-color',
  'msapplication-TileColor',
  'msapplication-navbutton-color',
  'apple-mobile-web-app-status-bar-style',
];
