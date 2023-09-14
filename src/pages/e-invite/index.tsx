import { BoxContainer } from "@/components";
import Login from "@/modules/Login";
import EInviteModule from "@/modules/eInviteModule";
import useCheckauth from "@/utils/useCheckAuth";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import HeadContent from "@/modules/HeadContent";

const EInvite = () => {
  const { auth } = useCheckauth();
  const router = useRouter();
  const layout = router.query.layoutid;

  if (!layout)
    return (
      <BoxContainer>
        <HeadContent
          title=" e-Invite"
          description="Create your digital invitation card now. Follow the 3 easy steps given and your card will be ready in the blink of eye"
        />
        <Grid container mt={8} rowGap={4}>
          <Grid item xs={12} md={6}>
            <p style={{ fontSize: "24px", fontWeight: "700" }}>
              Oops, something is missing ...
            </p>
            <p
              style={{
                fontSize: "16px",
                margin: "24px 0",
                textAlign: "justify",
                lineHeight: "1.25em",
              }}
            >
              Good news, we know what is the missing part. Looks like you
              reached here before selecting any design. Let us help you. Click
              on below button to navigate to our catalogue. You can choose your
              design there. See you there !
            </p>
            <Box
              sx={{
                background: "#eeece1",
                borderRadius: "8px",
                cursor: "pointer",
                textAlign: "center",
                mt: 3,
                padding: "12px 0",
                width: "100%",
              }}
            >
              <Link
                href="/catalogue"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: "700",
                }}
              >
                Go to Catalogue
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box overflow="scroll" display="flex">
              <Image
                src="/media/cardSelection/card-3/main.png"
                alt="Pulpen Studio Digital Invitation Card"
                height={496}
                width={288}
              />
              <Image
                src="/media/cardSelection/card-3/2-image.png"
                alt="Pulpen Studio Digital Invitation Card"
                height={496}
                width={288}
              />
            </Box>
          </Grid>
        </Grid>
      </BoxContainer>
    );

  if (!auth)
    return (
      <Box sx={{ minHeight: "76vh" }}>
        <HeadContent
          title=" e-Invite"
          description="Create your digital invitation card now. Follow the 3 easy steps given and your card will be ready in the blink of eye"
        />
        <Login />
      </Box>
    );

  return (
    <Box>
      <HeadContent
        title=" e-Invite"
        description="Create your digital invitation card now. Follow the 3 easy steps given and your card will be ready in the blink of eye"
      />
      <EInviteModule />
    </Box>
  );
};
export default EInvite;
