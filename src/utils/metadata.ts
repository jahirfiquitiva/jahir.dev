import type { Metadata } from 'next';

import { config } from './og';

type NonNullable<T> = T extends null | undefined ? never : T;

export const createMetadata = (data: {
  title: string;
  description: string;
  keywords?: string | Array<string> | null;
  exactUrl?: string;
  image?: string;
}): Metadata => {
  const { title, description, keywords, exactUrl, image: imageURL } = data;
  const metadata: Metadata = {
    title,
    description,
    keywords,
    authors: [{ name: 'Jahir Fiquitiva', url: 'https://jahir.dev' }],
    openGraph: {
      title,
      description,
      url: exactUrl || 'https://jahir.dev',
      siteName: title,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      creator: '@jahirfiquitiva',
      site: '@jahirfiquitiva',
    },
    verification: {
      google: 'lJwL3cKpjX_Eqp6yEY4hsydJazQl85xv29ZUmEg4oEE',
    },
    metadataBase: new URL('https://jahir.dev'),
  };
  if (imageURL && Boolean(imageURL)) {
    const image = {
      url: imageURL,
      type: config.contentType,
      width: config.size.width,
      height: config.size.height,
    };
    if (metadata.openGraph) metadata.openGraph['images'] = image;
    if (metadata.twitter) metadata.twitter['images'] = image;
  }
  return metadata;
};

export const colorMetaTags = [
  'theme-color',
  'msapplication-TileColor',
  'msapplication-navbutton-color',
  'apple-mobile-web-app-status-bar-style',
];
