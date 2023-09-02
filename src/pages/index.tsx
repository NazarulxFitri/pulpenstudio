import { ChatIcon, PenIcon, RocketIcon, SupportIcon } from "@/components";
import HowToOrderModule from "@/modules/HowToOrderModule";
import { Box, Grid } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Pulpen Studio | Home</title>
        <meta
          name="Pulpen Studio - Digital invitation card"
          content="Check out our digital invitation card and create your dream digital card for your big day !"
        />
      </Head>
      <Box display={{ xs: "none", lg: "block" }}>
        <Image
          src="/media/general/desktop-top-banner.png"
          alt="Pulpen Studio"
          height={536}
          width={1680}
          style={{ display: "block", width: "100%" }}
        />
      </Box>
      <Box display={{ xs: "none", md: "block", lg: "none" }}>
        <Image
          src="/media/general/tablet-top-banner.png"
          alt="Pulpen Studio"
          height={480}
          width={1024}
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      </Box>
      <Box display={{ xs: "block", md: "none", lg: "none" }}>
        <Image
          src="/media/general/mobile-top-banner.png"
          alt="Pulpen Studio"
          height={600}
          width={400}
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      </Box>
      <Box my={6} mx={8}>
        <HowToOrderModule />
      </Box>

      <Box
        sx={{
          background: "#eeece1",
          fontSize: "16px",
          fontWeight: "700",
          textAlign: "justify",
          textAlignLast: "center",
          lineHeight: "1.5em",
          mt: 6,
          py: 4,
        }}
      >
        <Box sx={{ mx: 6 }}>
          Create your own digital invitation card. Pulpen Studio will help you
          with variety tools we provided. Let your creativity colors your dream
        </Box>
        <Link
          href="/catalogue"
          style={{ textDecoration: "none", color: "unset" }}
        >
          <Box
            sx={{
              background: "#FFF",
              borderRadius: "16px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "700",
              mt: 3,
              mx: "auto",
              p: "4px 16px",
              width: "fit-content",
            }}
          >
            Let&apos;s start !
          </Box>
        </Link>
      </Box>
      <Box mt={6} mx={{ xs: 1, md: 8 }}>
        <p
          style={{
            fontSize: "24px",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Features +
        </p>
        <Grid container mt={3}>
          <Grid
            item
            sx={{
              p: 2,
              textAlign: "center",
            }}
            xs={6}
            md={3}
          >
            <RocketIcon size="40" />
            <p style={{ fontWeight: "700", marginTop: "8px" }}>
              Quick & Free design
            </p>
            <p style={{ marginTop: "16px", textAlign: "justify" }}>
              Create your card within 10 minutes ! The card will be ready to be
              viewed as soon you completed it
            </p>
          </Grid>
          <Grid
            item
            sx={{
              p: 2,
              textAlign: "center",
            }}
            xs={6}
            md={3}
          >
            <ChatIcon size="40" />
            <p style={{ fontWeight: "700", marginTop: "8px" }}>
              Real time comment
            </p>
            <p style={{ marginTop: "16px", textAlign: "justify" }}>
              Enjoy the realtime live comment with your guest
            </p>
          </Grid>
          <Grid
            item
            sx={{
              p: 2,
              textAlign: "center",
            }}
            xs={6}
            md={3}
          >
            <PenIcon size="40" />
            <p style={{ fontWeight: "700", marginTop: "8px" }}>
              Configureable widgets
            </p>
            <p style={{ marginTop: "16px", textAlign: "justify" }}>
              You can choose your own music, insert google map location and
              whatsapp link to entertain and assist your guest
            </p>
          </Grid>
          <Grid
            item
            sx={{
              p: 2,
              textAlign: "center",
            }}
            xs={6}
            md={3}
          >
            <SupportIcon size="40" />
            <p style={{ fontWeight: "700", marginTop: "8px" }}>Live Support</p>
            <p style={{ marginTop: "16px", textAlign: "justify" }}>
              Our live support will always be there for you to ensure every
              process runs smooth for you
            </p>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
