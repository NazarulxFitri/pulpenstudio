import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const HowToOrderModule = () => {
  return (
    <Box>
      <Box textAlign="center">
        <p style={{ fontSize: "24px", fontWeight: "700" }}>How to start ?</p>
        <p style={{ marginTop: "8px" }}>
          Create your e-Invite card with 3 simple steps !
        </p>
      </Box>
      <Box textAlign="center" my={4}>
        <Image
          src="/media/cardSelection/card-3/main.png"
          alt="Card Selection"
          width={244}
          height={480}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: "center" }}>
            <Box>
              <span style={{ fontSize: "32px" }}>1.</span> Choose your design
              from our{" "}
              <Link
                style={{ color: "#945c13", textDecoration: "none" }}
                href="/catalogue"
              >
                catalogue
              </Link>
              . Click on &quot;Try for free&quot; button
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: "center" }}>
            <Box>
              <span style={{ fontSize: "32px" }}>2.</span> Follow the steps
              given. You will be asked to fill in your e-invite card content
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: "center" }}>
            <Box>
              <span style={{ fontSize: "32px" }}>3.</span> After you click to
              submit the card, a popup will be displayed and you are done ! Your
              card will be ready to be viewed
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowToOrderModule;
