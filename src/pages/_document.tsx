import { extractCritical } from '@emotion/server';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

import { DefaultMetaTags } from '~/components/blocks';

const fonts = [
  'inter/Inter-Regular.woff2',
  'inter/Inter-Medium.woff2',
  'manrope/Manrope-Medium.woff2',
  'manrope/Manrope-SemiBold.woff2',
  'manrope/Manrope-Bold.woff2',
];

export default class CustomDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    const critical = extractCritical(initialProps.html);
    initialProps.html = critical.html;
    initialProps.styles = (
      <React.Fragment>
        {initialProps.styles}
        <style
          data-emotion-css={critical.ids.join(' ')}
          dangerouslySetInnerHTML={{ __html: critical.css }}
        />
      </React.Fragment>
    );

    return initialProps;
  }

  render() {
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
  }
}
