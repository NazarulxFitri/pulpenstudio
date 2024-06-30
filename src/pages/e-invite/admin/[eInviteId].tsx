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

  console.log("xxx auth", eInviteId);
  console.log("xxx uid", data);

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
      <Head>
        <title>Pulpen Studio | Admin</title>
        <meta
          name="description"
          content="Pulpen Studio Admin Dashboard for our client to view the card activity"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pulpenstudioxicon.png" />
      </Head>
      <AdminModule {...{ data }} />
    </Box>
  );
};

export default EinviteAdmin;
