// @ts-nocheck
import useGetEinvite from "@/data/useGetEinvite";
import useListLayout from "@/data/useListLayout";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Head from "next/head";
import AdminModule from "@/modules/AdminModule";
import useCheckauth from "@/utils/useCheckAuth";
import { BoxContainer } from "@/components";
import HeadContent from "@/modules/HeadContent";

interface EinviteAdminProps {}

const EinviteAdmin: React.FC<EinviteAdminProps> = () => {
  const router = useRouter();
  const { auth } = useCheckauth();
  const eInviteId = router.query.eInviteId;
  const { data } = useGetEinvite(eInviteId as string);

  if (auth !== data?.userId)
    return (
      <BoxContainer>
        <p style={{ fontSize: "24px", fontWeight: "700", marginTop: "80px" }}>
          404 Error
        </p>
        <p style={{ marginTop: "24px" }}>
          Unexpected error. Please contact admin for support.
        </p>
      </BoxContainer>
    );

  return (
    <Box>
      <HeadContent
        title="Admin"
        description="Pulpen Studio Admin Dashboard for our client to view the card activity"
      />
      <AdminModule {...{ data }} />
    </Box>
  );
};

export default EinviteAdmin;
