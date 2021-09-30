import NextHead from 'next/head';
import { useMemo, useState } from 'react';

import { Component } from '~/elements/base/fc';
import { useTheme } from '~/providers/theme';
import { PageProps } from '~/types';

const defaultImage = 'https://jahir.dev/static/images/brand/banner.png';
const defaultLogoImage =
  'https://jahir.dev/static/images/brand/logo-full-me.png';

type MetaImageStyle = 'summary_large_image' | 'summary';

export interface MetaTagsProps extends PageProps {
  exactUrl?: string;
  siteType?: 'portfolio' | 'website' | 'blog';
  metaImageStyle?: MetaImageStyle;
}

export const MetaTags: Component<MetaTagsProps> = (props) => {
  const {
    title,
    description,
    keywords,
    image,
    exactUrl = 'https://jahir.dev',
    siteType = 'portfolio',
    metaImageStyle = 'summary',
  } = props;
  const { isDark = false } = useTheme();
  const [siteColor, setSiteColor] = useState('#ebf0fb');

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

  useMemo(() => {
    setSiteColor(isDark ? '#080f1e' : '#ebf0fb');
  }, [isDark]);

  return (
    <NextHead>
      <meta charSet={'UTF-8'} />
      <meta
        name={'viewport'}
        content={'width=device-width, initial-scale=1.0'}
      />
      <meta httpEquiv={'x-ua-compatible'} content={'ie=edge'} />

      <title>{title}</title>

      <meta name={'title'} content={title} />
      <meta name={'description'} content={description} />
      <meta name={'author'} content={'Jahir Fiquitiva'} />
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
      <meta property={'og:locale'} content={'en_US'} />

      <meta property={'twitter:url'} name={'twitter:url'} content={exactUrl} />
      <meta
        property={'twitter:card'}
        name={'twitter:card'}
        content={actualMetaImageStyle}
      />
      <meta
        property={'twitter:creator'}
        name={'twitter:creator'}
        content={'@jahirfiquitiva'}
      />
      <meta
        property={'twitter:site'}
        name={'twitter:site'}
        content={'@jahirfiquitiva'}
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

      <link
        href={'https://plus.google.com/+JahirFiquitivaR/'}
        rel={'publisher'}
      />
      <meta
        name={'google-site-verification'}
        content={'lJwL3cKpjX_Eqp6yEY4hsydJazQl85xv29ZUmEg4oEE'}
      />

      <meta name={'theme-color'} content={siteColor} />
      <meta name={'msapplication-TileColor'} content={siteColor} />
      <meta name={'msapplication-navbutton-color'} content={siteColor} />
      <meta
        name={'apple-mobile-web-app-status-bar-style'}
        content={siteColor}
      />

      <link rel={'shortcut icon'} href={'/static/images/brand/favicon32.png'} />
      <link
        rel={'apple-touch-icon'}
        href={'/static/images/brand/favicon57.png'}
      />
      <link
        rel={'apple-touch-icon'}
        sizes={'72x72'}
        href={'/static/images/brand/favicon72.png'}
      />
      <link
        rel={'apple-touch-icon'}
        sizes={'114x114'}
        href={'/static/images/brand/favicon114.png'}
      />
      <link
        rel={'apple-touch-icon-precomposed'}
        href={'/static/images/brand/favicon32.png'}
      />
      <link
        rel={'icon'}
        sizes={'32x32'}
        href={'/static/images/brand/favicon32.png'}
      />
      <meta
        name={'msapplication-TileImage'}
        content={'/static/images/brand/favicon32.png'}
      />
    </NextHead>
  );
};
