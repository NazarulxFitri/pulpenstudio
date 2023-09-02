import CatalogueModule from "@/modules/CatalogueModule";
import { Box } from "@mui/material";
import Head from "next/head";

const Catalogue = () => {
  return (
    <Box>
      <Head>
        <title>Pulpen Studio | Catalogue</title>
        <meta
          name="Pulpen Studio - Catalogue"
          content="List of every Pulpen Studio digital invitation cards"
        />
      </Head>
      <CatalogueModule />
    </Box>
  );
};

export default Catalogue;
