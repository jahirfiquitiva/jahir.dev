/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { extractCritical } from '@emotion/server';
import { Html, Head, Main, NextScript } from 'next/document';

import { DefaultMetaTags } from '~/components/blocks';

const fonts = [
  'inter/Inter-Regular.woff2',
  'inter/Inter-Medium.woff2',
  'manrope/Manrope-Medium.woff2',
  'manrope/Manrope-SemiBold.woff2',
  'manrope/Manrope-Bold.woff2',
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

// @ts-ignore
Document.getInitialProps = async (context: any) => {
  // @ts-ignore
  const initialProps = await Document.getInitialProps(context);
  const critical = extractCritical(initialProps.html);
  initialProps.html = critical.html;
  initialProps.styles = (
    <>
      {initialProps.styles}
      <style
        data-emotion-css={critical.ids.join(' ')}
        dangerouslySetInnerHTML={{ __html: critical.css }}
      />
    </>
  );

  return initialProps;
};

export default Document;
