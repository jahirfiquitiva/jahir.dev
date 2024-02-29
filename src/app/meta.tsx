import { THEME_COLOR_LIGHT, THEME_COLOR_DARK } from '@/constants';
import { colorMetaTags } from '@/utils/metadata';

export const Meta = () => {
  return (
    <>
      <meta httpEquiv={'x-ua-compatible'} content={'ie=edge'} />

      <link rel={'shortcut icon'} href={'/media/brand/favicon32.png'} />
      <link rel={'apple-touch-icon'} href={'/media/brand/favicon57.png'} />
      <link
        rel={'apple-touch-icon'}
        sizes={'72x72'}
        href={'/media/brand/favicon72.png'}
      />
      <link
        rel={'apple-touch-icon'}
        sizes={'114x114'}
        href={'/media/brand/favicon114.png'}
      />
      <link
        rel={'apple-touch-icon-precomposed'}
        href={'/media/brand/favicon32.png'}
      />
      <link rel={'icon'} sizes={'32x32'} href={'/media/brand/favicon32.png'} />
      <meta
        name={'msapplication-TileImage'}
        content={'/media/brand/favicon32.png'}
      />

      <link
        rel={'alternate'}
        href={'/feed.xml'}
        type={'application/rss+xml'}
        title={'Jahir Fiquitiva (RSS)'}
      />

      {colorMetaTags.map((tag) => (
        <meta key={tag} name={tag} content={'transparent'} />
      ))}

      <meta
        name={'theme-color'}
        media={'(prefers-color-scheme: light)'}
        content={THEME_COLOR_LIGHT}
      />
      <meta
        name={'theme-color'}
        media={'(prefers-color-scheme: dark)'}
        content={THEME_COLOR_DARK}
      />
      <meta name={'view-transition'} content={'same-origin'} />
    </>
  );
};
