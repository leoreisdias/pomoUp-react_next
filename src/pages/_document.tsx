import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <meta name="theme-color" content="red" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="nightmode" content="enable/disable" />
          <meta name="screen-orientation" content="portrait" />
          <meta name="theme-color" content="#5965E0" />
          <link rel="manifest" href="/manifest.json" />
          <link href='/icons/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
          <link href='/icons/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
          <link rel="/icons/apple-touch-icon" href="/apple-icon.png"></link>
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani&display=swap" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
