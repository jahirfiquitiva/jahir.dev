import Document, { Html, Head, Main, NextScript } from 'next/document';

import { getCssText, preloadFonts } from '~/stitches';

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
          {preloadFonts.map((font) => (
            <link
              key={`font-${font.key}`}
              rel={'preload'}
              as={'font'}
              type={font.type}
              href={font.src}
              crossOrigin={'anonymous'}
            />
          ))}

          <style
            id={'stitches'}
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
