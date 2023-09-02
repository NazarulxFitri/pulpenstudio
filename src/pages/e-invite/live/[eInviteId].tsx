// @ts-nocheck
import useGetEinvite from "@/data/useGetEinvite";
import useListLayout from "@/data/useListLayout";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import Head from "next/head";

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
        {listLayout[data?.layout]}
      </Grid>
    </Box>
  );
};

export default EinviteLive;
