import Head from 'next/head';
import { useMemo } from 'react';

import type { FC } from '@/types';
import { useTheme } from '@/providers/theme';

const defaultImage = 'https://jahir.dev/static/images/brand/banner.png';
const defaultLogoImage =
  'https://jahir.dev/static/images/brand/logo-full-me.png';

type MetaImageStyle = 'summary_large_image' | 'summary';
export interface MetaData {
  title: string;
  description: string;
  exactUrl: string;
  keywords?: string | Array<string> | null;
  siteType?: 'portfolio' | 'website' | 'blog';
  image?: string;
  metaImageStyle?: MetaImageStyle;
}

const mapKeywords = (keywords?: string | Array<string> | null): string => {
  if (!keywords) return '';
  if (Array.isArray(keywords)) {
    return (keywords || []).join(', ');
  }
  return keywords;
};

const ColorMeta: FC = () => {
  const { isDark, themeReady } = useTheme();

  const siteColor = useMemo<string>(() => {
    if (!themeReady || !isDark) return '#ebf0fb';
    return '#080f1e';
  }, [themeReady, isDark]);

  return (
    <>
      <meta name={'theme-color'} content={siteColor} />
      <meta name={'msapplication-TileColor'} content={siteColor} />
      <meta name={'msapplication-navbutton-color'} content={siteColor} />
      <meta
        name={'apple-mobile-web-app-status-bar-style'}
        content={siteColor}
      />
    </>
  );
};

const ImageMeta: FC<{ image?: string; metaImageStyle?: MetaImageStyle }> = (
  props,
) => {
  const { image, metaImageStyle = 'summary_large_image' } = props;

  const actualDefaultImage = useMemo<string>(
    () => (metaImageStyle === 'summary' ? defaultLogoImage : defaultImage),
    [metaImageStyle],
  );

  const actualImage = useMemo<string>(
    () => image || actualDefaultImage,
    [image, actualDefaultImage],
  );

  const actualMetaImageStyle = useMemo<MetaImageStyle>(
    () =>
      actualImage === defaultLogoImage
        ? 'summary'
        : metaImageStyle || 'summary_large_image',
    [actualImage, metaImageStyle],
  );

  return (
    <>
      <meta itemProp={'image'} content={actualImage} />
      <meta property={'og:image'} content={actualImage} />

      <meta
        property={'twitter:card'}
        name={'twitter:card'}
        content={actualMetaImageStyle}
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
    </>
  );
};

export const Seo: FC<MetaData> = (props) => {
  const {
    title,
    description,
    exactUrl = 'https://jahir.dev',
    keywords: initialKeywords,
    siteType = 'portfolio',
    image,
    metaImageStyle = 'summary_large_image',
  } = props;

  const keywords = useMemo<string>(() => {
    return mapKeywords(initialKeywords);
  }, [initialKeywords]);

  return (
    <Head>
      <title>{title}</title>

      <meta name={'title'} content={title} />
      <meta name={'description'} content={description} />
      <meta name={'keywords'} content={keywords} />

      <meta itemProp={'name'} content={title} />
      <meta itemProp={'description'} content={description} />
      <link rel={'canonical'} href={exactUrl} />

      <meta property={'og:title'} content={title} />
      <meta property={'og:type'} content={siteType} />
      <meta property={'og:url'} content={exactUrl} />
      <meta property={'og:description'} content={description} />
      <meta property={'og:site_name'} content={title} />

      <meta property={'twitter:url'} name={'twitter:url'} content={exactUrl} />
      <meta property={'twitter:title'} name={'twitter:title'} content={title} />
      <meta
        property={'twitter:description'}
        name={'twitter:description'}
        content={description}
      />

      <ImageMeta image={image} metaImageStyle={metaImageStyle} />
      <ColorMeta />
    </Head>
  );
};
