import {
  BoxContainer,
  ChatIcon,
  GiftIcon,
  PenIcon,
  RocketIcon,
  SupportIcon,
} from "@/components";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <BoxContainer>
      <Box sx={{ textAlign: "center", mt: { xs: 3, md: 5 } }}>
        <Image
          src="/media/cardSelection/light-pink.png"
          alt="Pulpen Studio | Light Pink"
          height={496}
          width={288}
        />
      </Box>
      <Box
        sx={{
          background: "#DDD0C8",
          fontSize: "16px",
          fontWeight: "700",
          textAlign: "justify",
          textAlignLast: "center",
          lineHeight: "1.5em",
          mt: { xs: 4, md: 6 },
          mx: { xs: "-16px", md: "-48px" },
          py: 4,
        }}
      >
        <Box sx={{ mx: 6 }}>
          Create your own digital invitation card. Pulpen Studio will help you
          with variety tools we provided. Let your creativity colors your dream
        </Box>
        <Link
          href="/e-invite"
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

      <Box mt={6}>
        <h4
          style={{ fontSize: "32px", fontWeight: "700", textAlign: "center" }}
        >
          Features +
        </h4>
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
            <p style={{ marginTop: "16px" }}>
              Create your dream e-invite card as quick as you can. You can view
              the finished product without any charges.
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
            <p style={{ marginTop: "16px" }}>
              Enjoy the realtime live comment with other guest and share your
              fun or thought at the provided space
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
              For your guest
            </p>
            <p style={{ marginTop: "16px" }}>
              Choose your music, insert your whatsapp link and enter map
              location to help and entertain your guest !
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
            <p style={{ marginTop: "16px" }}>
              Our live support will always be there for you from the starting
              creation of your design until your event day !
            </p>
          </Grid>
        </Grid>
      </Box>
    </BoxContainer>
  );
}
