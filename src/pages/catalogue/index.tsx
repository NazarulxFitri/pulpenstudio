import CatalogueModule from "@/modules/CatalogueModule";
import HeadContent from "@/modules/HeadContent";
import { Box } from "@mui/material";
import Head from "next/head";

const Catalogue = () => {
  return (
    <Box>
      <HeadContent
        title="Catalogue"
        description="Check at Pulpen Studio catalgoue to see all designs of digital invitation card. Choose any design that you like and try it for free !"
      />
      <CatalogueModule />
    </Box>
  );
};

export default Catalogue;
