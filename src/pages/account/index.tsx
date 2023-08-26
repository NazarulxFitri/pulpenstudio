import AccountModule from "@/components/AccountModule";
import Login from "@/modules/Login";

import useCheckauth from "@/utils/useCheckAuth";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

const Account = () => {
  const { auth } = useCheckauth();
  const router = useRouter();

  if (!auth)
    return (
      <Box sx={{ minHeight: "76vh" }}>
        <Login />
      </Box>
    );

  return <AccountModule />;
};

export default Account;
