import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '~/stitches';

// import { DefaultMetaTags } from '~/components/blocks';

const fonts = [
  'inter/Inter-Regular.woff2',
  'inter/Inter-Medium.woff2',
  'manrope/Manrope-Medium.woff2',
  'manrope/Manrope-SemiBold.woff2',
  'manrope/Manrope-Bold.woff2',
];

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang={'en'}>
        <Head>
          {/* <DefaultMetaTags /> */}
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
          <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
