/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang={'en'}>
        <Head />
        <body>
          <script src={'/js/noflash.js'} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
