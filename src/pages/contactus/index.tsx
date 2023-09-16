import ContactUsModule from "@/modules/ContactUsModule";
import HeadContent from "@/modules/HeadContent";
import { Box } from "@mui/material";

const ContactUs = () => {
  return (
    <Box>
      <HeadContent
        title="Contact Us"
        description="Reach us through Live Support, Email or Instagram. We will assist you in creating your dream Digital Invitation Card for your big day"
      />
      <ContactUsModule />
    </Box>
  );
};

export default ContactUs;
