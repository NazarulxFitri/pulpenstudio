import {
  ChatIcon,
  MapIcon,
  MusicIcon,
  PenIcon,
  RocketIcon,
  SupportIcon,
  WhatsappIcon,
  WrenchIcon,
} from "@/components";
import BannerModule from "@/modules/BannerModule";
import { layoutConfig } from "@/utils/LayoutConfig";
import { Box, Container, Grid } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const layouts = layoutConfig;

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
      <BannerModule />
      <Container>
        <Box
          sx={{
            whiteSpace: "nowrap",
            display: "flex",
            my: 8,
            overflow: "scroll",
          }}
        >
          {layouts?.map((i, idx) => (
            <Box px={2} key={idx}>
              <Link href={`/detail?layoutid=${i.layoutid}`}>
                <Image
                  key={i.name}
                  src={i.images[0]}
                  alt={i.name}
                  width={248}
                  height={480}
                />
              </Link>
            </Box>
          ))}
        </Box>
      </Container>
      <Box
        sx={{
          background: "#eeece1",
          fontSize: "16px",
          textAlign: "justify",
          textAlignLast: "center",
          lineHeight: "1.5em",
          mt: 6,
          py: 4,
        }}
      >
        <Container>
          Try our digital invitation card for <b>FREE</b> !
          <br />
          Check out our designs and create your dream digital invitation card
          now
        </Container>
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
      <Container>
        <Box mt={6}>
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
              <WrenchIcon size="40" />
              <p style={{ marginTop: "8px" }}>Customizable</p>
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
              <RocketIcon size="40" />
              <p style={{ marginTop: "8px" }}>Quick setup</p>
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
              <p style={{ marginTop: "8px" }}>Share wishes</p>
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
              <p style={{ marginTop: "8px" }}>RSVP</p>
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
              <p style={{ marginTop: "8px" }}>Live Support</p>
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
              <MusicIcon size="40" />
              <p style={{ marginTop: "8px" }}>Choose Music</p>
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
              <MapIcon size="40" />
              <p style={{ marginTop: "8px" }}>Add Location</p>
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
              <WhatsappIcon size="40" />
              <p style={{ marginTop: "8px" }}>Link to Whatsapp</p>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
