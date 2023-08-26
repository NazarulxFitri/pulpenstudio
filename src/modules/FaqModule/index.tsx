import { Box, styled } from "@mui/material";
import BoxContainer from "../../components/BoxContainer";
import { layoutConfig } from "@/utils/LayoutConfig";
import Link from "next/link";
import BreadcrumbModule from "../BreadcrumbModule";
import HowToOrderModule from "../HowToOrderModule";

interface CatalogueModuleProps {}

export const Text = styled("p")(() => ({
  background: "#FFF",
  fontWeight: "700",
  margin: "8px 0",
}));

export const CategoryText = styled("p")(() => ({
  background: "rgb(221, 208, 200)",
  fontSize: "12px",
  fontWeight: "700",
  margin: "8px 0",
  padding: "4px 12px",
  width: "fit-content",
  borderRadius: "24px",
}));

export const Button1 = styled(Link)(() => ({
  border: "1px solid #eeece1",
  borderRadius: "24px",
  cursor: "pointer",
  color: "#333",
  textDecoration: "none",
  fontWeight: "700",
  padding: "8px 24px",
  margin: "8px 0",
  width: "fit-content",
  "&:hover": {
    background: "#eeece1",
  },
}));

const Button2 = styled(Link)(() => ({
  color: "#333",
  cursor: "pointer",
  fontWeight: "700",
  textDecoration: "none",
}));

const FaqModule: React.FC<CatalogueModuleProps> = ({}) => {
  return (
    <BoxContainer>
      <h1 style={{ fontSize: "24px", marginTop: "40px" }}>Catalogue</h1>
      <Box mt={2}>
        <BreadcrumbModule
          text1="Home"
          cta1="/"
          text2="Faq"
          cta2="/faq"
          level="two"
        />
      </Box>
      <Box mb={6} pb={6} sx={{ borderBottom: "1px solid #EFEFEF" }}>
        <HowToOrderModule />
      </Box>
      <Box>
        <p>
          <b>1. Does creating card cost me any charges ?</b>
        </p>
        <p>
          No. Create card is free of charge. After you create the card, you can
          view it directly as real product. The card will be available for you
          to view for 48 hours, after that the card will be closed from view. If
          you like the card, you can proceed with payment and Pulpen Studio will
          ensure the card is stay online until the event day (extend to 2 weeks
          after event day)
        </p>
        <p style={{ marginTop: "16px" }}>
          <b>
            2. How long will the card stay online before and after event day ?
          </b>
        </p>
        <p>
          The card will stay online from the moment you succesfully made payment
          or 2 months before event day (which ever shorter) until after 2 weeks
          of your event day
        </p>
        <p style={{ marginTop: "16px" }}>
          <b>3. Is it guaranteed that there will be no issue ?</b>
        </p>
        <p>
          Our support is available 24 hours per day. Pulpen Studio will be
          prepared to assist you and make sure every issues resolved as soon as
          possible
        </p>
        <p style={{ marginTop: "16px" }}>
          <b>
            4. Can I custom my card without using existing design from catalogue
            ?
          </b>
        </p>
        <p>
          Yes you can. We also offers a custom service with extra additional
          charges RM10.00 . The customization includes changing images, colors,
          content and also any styling
        </p>
        <p style={{ marginTop: "16px" }}>
          <b>
            5. I&apos;ve created my card and already made the payment but I want
            to change the design. Can I still do that ?
          </b>
        </p>
        <p>
          Yes you can. To change design using existing design is free of charge
        </p>
        <p style={{ marginTop: "16px" }}>
          <b>6. How long will it takes to see the card after I created it ?</b>
        </p>
        <p>
          You can see the card as in real product as soon as you have finished
          editing.
        </p>
        <p style={{ marginTop: "16px" }}>
          <b>7. If I confirmed to pay for the card, what else will I get ?</b>
        </p>
        <p>
          Apart from the e-Invite card, you will also be getting a PDF version
          of your card design.
        </p>
        <p style={{ marginTop: "16px" }}>
          <b>8. Can I choose any music to be placed in the card?</b>
        </p>
        <p>
          Yes you can. As long the music is from Youtube. You just need to copy
          the link from Youtube and placed it inside a prepared section during
          creation of your card. Pulpen Studio will assist you in preparing it
          once you reached the card creation page
        </p>
        <p style={{ marginTop: "16px" }}>
          <b>9. Can I put Google map location or Whatsapp link?</b>
        </p>
        <p>
          Yes you can. You will be assisted placing it during your card creation
        </p>
        <p style={{ marginTop: "16px" }}>
          <b>10. How can I make the payment?</b>
        </p>
        <p>
          You can go to <Link href="/account">My Account</Link>, go to My Work
          tab on the left section, and click pay for the card that you wanted to
          purchase
        </p>
        <p style={{ marginTop: "16px" }}>
          <b>11. How can I talk to Pulpen Studio support?</b>
        </p>
        <p>
          You can chat with us by clicking the icon Need Help on your right
          bottom screen.
        </p>
      </Box>
    </BoxContainer>
  );
};

export default FaqModule;
