import FaqModule from "@/modules/FaqModule";
import { Box } from "@mui/material";
import Head from "next/head";

const Faq = () => {
  return (
    <Box>
      <Head>
        <title>Pulpen Studio | FAQ</title>
        <meta
          name="description"
          content="Pulpen Studio FAQ to help user get what they need and clear any ambiguition they had"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/media/general/pulpenstudioxicon.png" />
      </Head>
      <FaqModule />
    </Box>
  );
};

export default Faq;
