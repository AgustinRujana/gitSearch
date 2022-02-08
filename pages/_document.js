import Document, { Html, Head, Main, NextScript } from 'next/document';

import Favicons from '../components/Favicons';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='author' content='Agustin Rujana' />
          <Favicons />
        </Head>
        <body className=' selection:bg-purple-700 selection:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
