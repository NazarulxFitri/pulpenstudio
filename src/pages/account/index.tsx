import AccountModule from "@/components/AccountModule";
import Login from "@/modules/Login";

import useCheckauth from "@/utils/useCheckAuth";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Head from "next/head";

const Account = () => {
  const { auth } = useCheckauth();
  const router = useRouter();

  if (!auth)
    return (
      <Box sx={{ minHeight: "76vh" }}>
        <Login />
      </Box>
    );

  return (
    <Box>
      <Head>
        <title>Pulpen Studio | My Account</title>
        <meta
          name="Pulpen Studio - My Account"
          content="Check out design created by you and personal information regarding your Pulpen Studio account"
        />
      </Head>
      <AccountModule />
    </Box>
  );
};

export default Account;
