/* eslint-disable max-lines-per-function */
import type { FC } from '@/types';

export const Meta: FC = () => {
  return (
    <>
      <meta name={'author'} content={'Jahir Fiquitiva'} />

      <meta property={'og:locale'} content={'en_US'} />

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

      <link
        href={'https://plus.google.com/+JahirFiquitivaR/'}
        rel={'publisher'}
      />
      <meta
        name={'google-site-verification'}
        content={'lJwL3cKpjX_Eqp6yEY4hsydJazQl85xv29ZUmEg4oEE'}
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

      <link
        rel={'alternate'}
        href={'https://jahirfiquitiva.substack.com/feed'}
        type={'application/rss+xml'}
        title={'Jahir Fiquitiva (RSS)'}
      ></link>
    </>
  );
};
