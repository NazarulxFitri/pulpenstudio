import DetailModule from "@/modules/DetailModule";

import { Box } from "@mui/material";
import Head from "next/head";

const Detail = () => {
  return (
    <Box>
      <Head>
        <title>Pulpen Studio | Detail</title>
        <meta
          name="Pulpen Studio - Detail"
          content="More information on the selected design. Check out all information that we provided to assist you make your choice"
        />
      </Head>
      <DetailModule />
    </Box>
  );
};

export default Detail;
