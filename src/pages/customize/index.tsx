import CustomizeModule from "@/modules/CustomizeModule";
import { Box } from "@mui/material";
import Head from "next/head";

const Customize = () => {
  return (
    <Box>
      <Head>
        <title>Pulpen Studio | Customize Design</title>
        <meta
          name="description"
          content="Already have own design and would like Pulpen Studio to help translate it into a digital invitation card. Yes we also can do that. Just reach to us and we can discuss about it !"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pulpenstudioxicon.png" />
      </Head>
      <CustomizeModule />
    </Box>
  );
};

export default Customize;
