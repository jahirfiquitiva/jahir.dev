import Document, { Html, Head, Main, NextScript } from 'next/document';

import { Meta } from '@/components/molecules';
import { getCssText } from '~/stitches';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang={'en'}>
        <Head>
          <Meta />
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
