import { colorMetaTags } from '@/utils/metadata';

export const Meta = () => {
  return (
    <>
      <meta httpEquiv={'x-ua-compatible'} content={'ie=edge'} />

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
        content={'#fdfeff'}
      />
      <meta
        name={'theme-color'}
        media={'(prefers-color-scheme: dark)'}
        content={'#151925'}
      />
    </>
  );
};
