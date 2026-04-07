import Head from "next/head";
import dynamic from "next/dynamic";

const Layout16 = dynamic(() => import("@/assets/einvite/layout-16"), { ssr: false });

const AshrafNatasha = () => {
  return (
    <>
      <Head>
        <title>Pulpen Studio | Ashraf & Natasha</title>
        <meta
          name="description"
          content="Walimatulurus Muhammad Ashraf & Nurul Natasha"
        />
        <meta property="og:title" content="Walimatulurus Muhammad Ashraf & Nurul Natasha Izzati" />
        <meta property="og:url" content="https://www.pulpenstudio.com/e-invite/live/ashraf-dan-natasha" />
        <meta property="og:description" content="Walimatulurus Muhammad Ashraf & Nurul Natasha Izzati" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pulpenstudioxicon.png" />
      </Head>
      <Layout16 />
    </>
  );
};

export default AshrafNatasha;
