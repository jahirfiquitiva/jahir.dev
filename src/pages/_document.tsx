/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { DefaultMetaTags } from '~/components/blocks';

const fonts = [
  'inter/inter-v3-latin-regular.woff2',
  'inter/inter-v3-latin-500.woff2',
  'manrope/manrope-v4-latin-500.woff2',
  'manrope/manrope-v4-latin-600.woff2',
  'manrope/manrope-v4-latin-700.woff2',
  'fira-code/fira-code-v10-latin-regular.woff2',
  'fira-code/fira-code-v10-latin-500.woff2',
];

export default class MyDocument extends Document {
  render(): JSX.Element {
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
  }
}
