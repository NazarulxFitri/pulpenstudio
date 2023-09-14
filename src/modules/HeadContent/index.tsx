import Head from "next/head";

interface HeadContentProps {
  title: string;
  description: string;
}

const HeadContent: React.FC<HeadContentProps> = ({ title, description }) => {
  return (
    <Head>
      <title>Pulpen Studio | {title}</title>
      <meta name={"description"} content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        href="/media/general/pulpenstudioxicon.png"
        type="image/png"
      />
    </Head>
  );
};

export default HeadContent;
