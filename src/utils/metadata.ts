import type { Metadata } from 'next';

import { buildOgImageUrl, config } from './og';

export const createMetadata = (data: {
  title: string;
  description: string;
  keywords?: string | Array<string> | null;
  exactUrl?: string;
  image?: string;
}): Metadata => {
  const {
    title,
    description,
    keywords,
    exactUrl,
    image = buildOgImageUrl(),
  } = data;

  const images = [
    {
      url: image,
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
      card: 'summary_large_image',
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
