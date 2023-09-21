import DetailModule from "@/modules/DetailModule";

import { Box } from "@mui/material";
import Head from "next/head";

const Detail = () => {
  return (
    <Box>
      <Head>
        <title>Pulpen Studio | Detail</title>
        <meta
          name="description"
          content="Detail of your selected design of digital card. Pulpen Studio provides you variety of information that can help you to decide your favourite design"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/media/general/pulpenstudioxicon.png" />
      </Head>
      <DetailModule />
    </Box>
  );
};

export default Detail;
