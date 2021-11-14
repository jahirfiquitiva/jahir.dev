import Head from 'next/head';
import { useMemo, useState } from 'react';

import { useTheme } from '~/providers/theme';
import { Component, PageProps } from '~/types';

const defaultImage = 'https://jahir.dev/static/images/brand/banner.png';
const defaultLogoImage =
  'https://jahir.dev/static/images/brand/logo-full-me.png';

type MetaImageStyle = 'summary_large_image' | 'summary';

export interface MetaTagsProps extends PageProps {
  exactUrl?: string;
  siteType?: 'portfolio' | 'website' | 'blog';
  metaImageStyle?: MetaImageStyle;
}

export const DynamicMetaTags: Component<MetaTagsProps> = (props) => {
  const {
    title,
    description,
    keywords,
    image,
    exactUrl = 'https://jahir.dev',
    siteType = 'portfolio',
    metaImageStyle = 'summary',
  } = props;
  const { isDark, themeReady } = useTheme();

  const actualDefaultImage =
    metaImageStyle === 'summary' ? defaultLogoImage : defaultImage;
  const actualImage = image
    ? image.length > 0
      ? image
      : actualDefaultImage
    : actualDefaultImage;
  const actualMetaImageStyle: MetaImageStyle =
    actualImage === defaultLogoImage
      ? 'summary'
      : metaImageStyle || 'summary_large_image';

  const siteColor = useMemo<string>(() => {
    if (!themeReady || !isDark) return '#ebf0fb';
    return '#080f1e';
  }, [themeReady, isDark]);

  return (
    <Head>
      <title>{title}</title>

      <meta name={'title'} content={title} />
      <meta name={'description'} content={description} />
      <meta name={'keywords'} content={(keywords || []).join(', ')} />

      <meta itemProp={'name'} content={title} />
      <meta itemProp={'description'} content={description} />
      <meta itemProp={'image'} content={actualImage} />
      <link rel={'canonical'} href={exactUrl} />

      <meta property={'og:title'} content={title} />
      <meta property={'og:type'} content={siteType} />
      <meta property={'og:url'} content={exactUrl} />
      <meta property={'og:image'} content={actualImage} />
      <meta property={'og:description'} content={description} />
      <meta property={'og:site_name'} content={title} />

      <meta property={'twitter:url'} name={'twitter:url'} content={exactUrl} />
      <meta
        property={'twitter:card'}
        name={'twitter:card'}
        content={actualMetaImageStyle}
      />
      <meta property={'twitter:title'} name={'twitter:title'} content={title} />
      <meta
        property={'twitter:description'}
        name={'twitter:description'}
        content={description}
      />
      <meta
        property={'twitter:image'}
        name={'twitter:image'}
        content={actualImage}
      />
      <meta
        property={'twitter:image:src'}
        name={'twitter:image:src'}
        content={actualImage}
      />

      <meta name={'theme-color'} content={siteColor} />
      <meta name={'msapplication-TileColor'} content={siteColor} />
      <meta name={'msapplication-navbutton-color'} content={siteColor} />
      <meta
        name={'apple-mobile-web-app-status-bar-style'}
        content={siteColor}
      />
    </Head>
  );
};
