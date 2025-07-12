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

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Qayyum & Amirah's Wedding Invitation" />
        <meta name="twitter:description" content="Join us to celebrate the wedding of Qayyum & Amirah." />
        <meta
          name="twitter:image"
          content="https://www.pulpenstudio.com/media/qayyum-amirah/qayyum_amira.jpeg"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:site_name" content="Pulpen Studio" />
        <meta property="og:title" content="Qayyum & Amirah's Wedding Invitation" />
        <meta property="og:description" content="Join us to celebrate the wedding of Qayyum & Amirah." />
        <meta
          property="og:image"
          content="https://www.pulpenstudio.com/media/qayyum-amirah/qayyum_amira.jpeg"
        />
        <meta
          property="og:url"
          content="https://www.pulpenstudio.com/e-invite/live/wedding-of-qayyum-and-amirah"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
