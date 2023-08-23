// @ts-nocheck
import useGetEinvite from "@/data/useGetEinvite";
import useListLayout from "@/data/useListLayout";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";

interface EinviteLiveProps {}

const EinviteLive: React.FC<EinviteLiveProps> = () => {
  const router = useRouter();
  const eInviteId = router.query.eInviteId;
  const { data } = useGetEinvite(eInviteId as string);

  console.log("xxx daa", data?.layout);

  const listLayout = useListLayout();

  return (
    <Grid item xs={12}>
      {listLayout[data?.layout]}
    </Grid>
  );
};

export default EinviteLive;
