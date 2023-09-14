import DetailModule from "@/modules/DetailModule";
import HeadContent from "@/modules/HeadContent";

import { Box } from "@mui/material";
import Head from "next/head";

const Detail = () => {
  return (
    <Box>
      <HeadContent
        title="Detail"
        description="Detail of your selected design of digital card. Pulpen Studio provides you variety of information that can help you to decide your favourite design"
      />
      <DetailModule />
    </Box>
  );
};

export default Detail;
