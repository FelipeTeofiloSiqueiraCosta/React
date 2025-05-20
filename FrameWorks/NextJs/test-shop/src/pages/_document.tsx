import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

// just rendered on the server, so we can't use event handlers like onClick here
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body className="antialiased">
        {/* <Main />  basicamente é o nosso <div id="root"> </div>, ele indica onde vai ser renderizado o nosso app */}
        <Main />
        {/* <NextScript />  basicamente é o nosso <script> </script>, ele indica em qual local vai ser renderizado nosso script na página*/}
        <NextScript />
      </body>
    </Html>
  );
}
