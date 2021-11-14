import { Html, Head, Main, NextScript } from 'next/document';

import { DefaultMetaTags } from '~/components/blocks';

const fonts = [
  'inter/Inter-Regular.woff2',
  'inter/Inter-Medium.woff2',
  'manrope/Manrope-Medium.woff2',
  'manrope/Manrope-SemiBold.woff2',
  'manrope/Manrope-Bold.woff2',
  'fira-code/FiraCode-Regular.woff2',
  'fira-code/FiraCode-Medium.woff2',
];

const Document = () => {
  return (
    <Html lang={'en'}>
      <Head>
        <DefaultMetaTags />

        {fonts.map((it, i) => {
          return (
            <link
              rel={'preload'}
              href={`/static/fonts/${it}`}
              as={'font'}
              type={'font/woff2'}
              crossOrigin={'anonymous'}
              key={`font-${i}`}
            />
          );
        })}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
