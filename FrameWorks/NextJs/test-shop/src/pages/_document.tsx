import { Html, Head, Main, NextScript } from "next/document";

// just rendered on the server, so we can't use event handlers like onClick here
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
