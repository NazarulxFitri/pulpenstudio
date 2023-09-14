import CustomizeModule from "@/modules/CustomizeModule";
import HeadContent from "@/modules/HeadContent";
import { Box } from "@mui/material";
import Head from "next/head";

const Customize = () => {
  return (
    <Box>
      <HeadContent
        title="Customize Design"
        description="Already have own design and would like Pulpen Studio to help translate it into a digital invitation card. Yes we also can do that. Just reach to us and we can discuss about it !"
      />
      <CustomizeModule />
    </Box>
  );
};

export default Customize;
