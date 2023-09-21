// @ts-nocheck
import useGetEinvite from "@/data/useGetEinvite";
import useListLayout from "@/data/useListLayout";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import Head from "next/head";
import { RibbonBanner } from "@/components";
import Link from "next/link";
import HeadContent from "@/modules/HeadContent";

interface EinviteLiveProps {}

const EinviteLive: React.FC<EinviteLiveProps> = () => {
  const router = useRouter();
  const eInviteId = router.query.eInviteId;
  const { data, isLoading } = useGetEinvite(eInviteId as string);
  const listLayout = useListLayout();

  return (
    <Box>
      <Head>
        <title>Pulpen Studio | Live</title>
        <meta
          name="description"
          content="Pulpen Studio Live - Finished product for our client's guest. Enjoy the card !"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/media/general/pulpenstudioxicon.png" />
      </Head>
      <Grid item xs={12}>
        {!isLoading && !data?.paid && (
          <Box
            sx={{
              background: "rgba(238,236,225,0.6)",
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
