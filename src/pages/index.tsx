import {
  BoxContainer,
  ChatIcon,
  GiftIcon,
  PenIcon,
  SupportIcon,
} from "@/components";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <BoxContainer>
      <Box sx={{ textAlign: "center" }}>
        <Image
          src="/media/cardSelection/light-pink.png"
          alt="Pulpen Studio | Light Pink"
          height={288}
          width={496}
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
          mt: 6,
          mx: "-48px",
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
        <Grid container mt={3} spacing={1}>
          <Grid
            item
            sx={{
              p: 2,
              textAlign: "center",
            }}
            xs={3}
          >
            <ChatIcon size="48" />
            <p style={{ fontWeight: "700" }}>Real time comment</p>
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
            xs={3}
          >
            <PenIcon size="48" />
            <p style={{ fontWeight: "700" }}>Configure widgets</p>
            <p style={{ marginTop: "16px" }}>
              Not only designing, you also able to attach widgets like map,
              whatsapp number to assist your guest to reach you
            </p>
          </Grid>
          <Grid
            item
            sx={{
              p: 2,
              textAlign: "center",
            }}
            xs={3}
          >
            <SupportIcon size="48" />
            <p style={{ fontWeight: "700" }}>Live Support</p>
            <p style={{ marginTop: "16px" }}>
              Our support will assist you to translate your imagination into a
              full fledge design
            </p>
          </Grid>
          <Grid
            item
            sx={{
              p: 2,
              textAlign: "center",
            }}
            xs={3}
          >
            <GiftIcon size="48" />
            <p style={{ fontWeight: "700" }}>Gift for you</p>
            <p style={{ marginTop: "16px" }}>
              Not only a card in form of website, you will also be getting a
              softcopy in PDF format from your card design as a gift for the
              event you are working on
            </p>
          </Grid>
        </Grid>
      </Box>
    </BoxContainer>
  );
}
