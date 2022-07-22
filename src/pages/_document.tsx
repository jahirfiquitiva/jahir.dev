import Document, { Html, Head, Main, NextScript } from 'next/document';

import { Meta } from '@/components/molecules';
import { getCssText, preloadFonts } from '~/stitches';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang={'en'}>
        <Head>
          <Meta />
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
