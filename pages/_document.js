//_document.js is a file that get it properties replicated every renderization, handle this file with care

import Document, { Html, Head, Main, NextScript } from 'next/document';

//Favicon Imports
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
          {/* Add here all the meta properties */}
          <meta name='author' content='Agustin Rujana' />
          <Favicons />
        </Head>
        <body className='selection:bg-purple-700 selection:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
