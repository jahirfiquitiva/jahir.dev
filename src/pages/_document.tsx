/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { BaseMetaTags } from '~/components/metatags';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang={'en'}>
        <Head>
          <BaseMetaTags />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
