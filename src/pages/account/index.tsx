import { BoxContainer, RibbonBanner } from "@/components";
import AccountModule from "@/components/AccountModule";
import Login from "@/modules/Login";

import useCheckauth from "@/utils/useCheckAuth";
import { useRouter } from "next/router";

const Account = () => {
  const { auth } = useCheckauth();
  const router = useRouter();
  const fromLogin = !!router.query.target;

  if (!auth)
    return (
      <BoxContainer>
        {!fromLogin && (
          <RibbonBanner message="Please login first to access this feature" />
        )}
        <Login />
      </BoxContainer>
    );

  return <AccountModule />;
};

export default Account;
