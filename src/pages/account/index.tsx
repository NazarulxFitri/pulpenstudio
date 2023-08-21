import { BoxContainer, RibbonBanner } from "@/components";
import AccountModule from "@/components/AccountModule";
import Login from "@/modules/Login";

import useCheckauth from "@/utils/useCheckAuth";

const Account = () => {
  const { auth } = useCheckauth();

  if (!auth)
    return (
      <BoxContainer>
        <RibbonBanner message="Please login first to access this feature" />
        <Login />
      </BoxContainer>
    );

  return <AccountModule />;
};

export default Account;
