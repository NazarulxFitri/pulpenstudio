import FaqModule from "@/modules/FaqModule";
import { Box } from "@mui/material";
import Head from "next/head";

const Faq = () => {
  return (
    <Box>
      <Head>
        <title>Pulpen Studio | FAQ</title>
        <meta
          name="Pulpen Studio - FAQ will assist you to find what you need"
          content="Answering any ambiguity that might hold you up"
        />
      </Head>
      <FaqModule />
    </Box>
  );
};

export default Faq;
