import { BoxContainer, RibbonBanner } from "@/components";
import Login from "@/modules/Login";
import EInviteModule from "@/modules/eInviteModule";
import useCheckauth from "@/utils/useCheckAuth";

const EInvite = () => {
  const { auth } = useCheckauth();

  if (!auth)
    return (
      <BoxContainer>
        <RibbonBanner message="Please login first to access this feature" />
        <Login />
      </BoxContainer>
    );

  return <EInviteModule />;
};
export default EInvite;
