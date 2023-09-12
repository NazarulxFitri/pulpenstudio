import { BoxContainer } from "@/components";
import { Box, Grid } from "@mui/material";
import BreadcrumbModule from "../BreadcrumbModule";
import Image from "next/image";
import Link from "next/link";

const CustomizeModule = () => {
  return (
    <BoxContainer>
      <h1 style={{ fontSize: "24px", marginTop: "40px" }}>Customize Design</h1>
      <Box mt={2}>
        <BreadcrumbModule
          text1="Home"
          cta1="/"
          text2="Customize Design"
          cta2="/customize"
          level="two"
        />
      </Box>
      <Box mt={4}>
        <p>
          Already have your own design and wants us to help to translate it into
          digital invitation card ? Or maybe you don&apos;t have the design yet
          but want to express the design through discussion ? If any of that is
          yes, then you are at the right place !
        </p>
        <Grid
          container
          mt={6}
          spacing={{ xs: 0, md: 4 }}
          rowSpacing={{ xs: 2, md: 0 }}
        >
          <Grid item xs={12} md={6} sx={{ position: "relative" }}>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "700",
                marginTop: "16px",
              }}
            >
              Notes :
            </p>
            <p style={{ marginTop: "16px" }}>
              * Send us the design if you already have it. Can be on format of
              pptx, jpeg, png, pdf, svg
            </p>
            <p style={{ marginTop: "16px" }}>
              * Don&apos;t have the design yet ? Can just reach to us and can
              discuss first
            </p>
            <p style={{ marginTop: "16px" }}>
              * Once the design is confirmed, Pulpen Studio will takes 2 days to
              convert the design into a digital invitation card
            </p>

            <Box
              sx={{
                background: "#EEECE1",
                padding: "16px 0",
                borderRadius: "24px",
                mt: 4,
                textAlign: "center",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#333" }}
                target="___blank"
                href={`https://api.whatsapp.com/send?phone=601156271776&text=Hi%20%2C%20saya%20datang%20dari%20e-invite%20!%20#CustomizeDesign%20`}
              >
                Proceed with Admin
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} mt={{ xs: 2, md: 0 }}>
            <Image
              src="/media/cardSelection/card-0/main.png"
              alt="Pulpen Studio Customize Design"
              width={248}
              height={480}
              style={{ display: "block", margin: "auto" }}
            />
          </Grid>
        </Grid>
      </Box>
    </BoxContainer>
  );
};

export default CustomizeModule;
