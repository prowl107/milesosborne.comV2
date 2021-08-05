import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="is-preload">
          <Main />
          <NextScript />
          <script async type="text/javascript" src="/js/jquery.min.js"></script>
          <script
            async
            type="text/javascript"
            src="/js/browser.min.js"
          ></script>
          <script
            async
            type="text/javascript"
            src="/js/breakpoints.min.js"
          ></script>
          <script async type="text/javascript" src="/js/util.js"></script>
          <script async type="text/javascript" src="/js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
