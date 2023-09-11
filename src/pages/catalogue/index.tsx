import CatalogueModule from "@/modules/CatalogueModule";
import { Box } from "@mui/material";
import Head from "next/head";

const Catalogue = () => {
  return (
    <Box>
      <Head>
        <title>Pulpen Studio | Catalogue</title>
        <meta
          name="description"
          content="Check at Pulpen Studio catalgoue to see all designs of digital invitation card. Choose any design that you like and try it for free !"
          key="desc"
        />
      </Head>
      <CatalogueModule />
    </Box>
  );
};

export default Catalogue;
