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
          name="description"
          content="Pulpen Studio My Account is a for user to see their personal information and card that they have made"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/media/general/pulpenstudioxicon.png" />
      </Head>
      <AccountModule />
    </Box>
  );
};

export default Account;
