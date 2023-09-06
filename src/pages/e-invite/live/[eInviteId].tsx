// @ts-nocheck
import useGetEinvite from "@/data/useGetEinvite";
import useListLayout from "@/data/useListLayout";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import Head from "next/head";
import { RibbonBanner } from "@/components";
import Link from "next/link";

interface EinviteLiveProps {}

const EinviteLive: React.FC<EinviteLiveProps> = () => {
  const router = useRouter();
  const eInviteId = router.query.eInviteId;
  const { data } = useGetEinvite(eInviteId as string);
  const listLayout = useListLayout();

  return (
    <Box>
      <Head>
        <title>Pulpen Studio | Live</title>
        <meta
          name="Pulpen Studio - Live digital invitation card"
          content="Live digital invitation card"
        />
      </Head>
      <Grid item xs={12}>
        {!data?.paid && (
          <Box
            sx={{
              background: "rgba(238,236,225,0.8)",
              fontWeight: "600",
              position: "fixed",
              width: "400px",
              zIndex: "3",
              left: "50%",
              transform: "translate(-50%)",
            }}
          >
            <Link
              target="_blank"
              href={`https://wa.me/601156271776?text=Hi%20Pulpen%20Studio%20,%20saya%20ingin%20membuat%20bayaran%20untuk%20-%20Digital%20Card:%20${data?.name}%20User%20ID:${data?.userId}`}
              style={{ color: "#333", textDecoration: "none" }}
            >
              <RibbonBanner message="The card is now ready. Please click here to confirm the card and proceed with payment." />
            </Link>
          </Box>
        )}
        {listLayout[data?.layout]}
      </Grid>
    </Box>
  );
};

export default EinviteLive;
