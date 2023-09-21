import ContactUsModule from "@/modules/ContactUsModule";
import { Box } from "@mui/material";
import Head from "next/head";

const ContactUs = () => {
  return (
    <Box>
      <Head>
        <title>Pulpen Studio | Contact Us</title>
        <meta
          name="description"
          content="Reach us through Live Support, Email or Instagram. We will assist you in creating your dream Digital Invitation Card for your big day"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/media/general/pulpenstudioxicon.png" />
      </Head>
      <ContactUsModule />
    </Box>
  );
};

export default ContactUs;
