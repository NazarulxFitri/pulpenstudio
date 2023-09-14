import FaqModule from "@/modules/FaqModule";
import HeadContent from "@/modules/HeadContent";
import { Box } from "@mui/material";
import Head from "next/head";

const Faq = () => {
  return (
    <Box>
      <HeadContent
        title="FAQ"
        description="Pulpen Studio FAQ to help user get what they need and clear any ambiguition they had"
      />
      <FaqModule />
    </Box>
  );
};

export default Faq;
