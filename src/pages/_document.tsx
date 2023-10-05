import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pulpenstudioxicon.png" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Pulpen Studio - Digital Invitation Card"
        />
        <meta
          name="twitter:description"
          content="Digital Invitation Card builder high quality & affordable price"
        />
        <meta
          name="twitter:image"
          content="https://www.pulpenstudio.com/_next/image?url=%2Fmedia%2Fgeneral%2Fpulpen_logo.png&w=384&q=75"
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        <meta
          property="og:title"
          content="Pulpen Studio - Digital Invitation Card"
        />
        <meta
          property="og:image"
          content="https://www.pulpenstudio.com/_next/image?url=%2Fmedia%2Fgeneral%2Fpulpen_logo.png&w=384&q=75"
        />
        <meta property="og:site_name" content="Name of your website" />
        <meta
          property="og:description"
          content="Digital Invitation Card builder high quality & affordable price"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
