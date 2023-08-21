import { BoxContainer, RibbonBanner } from "@/components";
import Login from "@/modules/Login";
import AccountModule from "@/modules/AccountModule";
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
