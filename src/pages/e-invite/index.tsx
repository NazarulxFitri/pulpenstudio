import EInviteModule from "@/modules/eInviteModule";
import useCheckauth from "@/utils/useCheckAuth";

const EInvite = () => {
  const { auth } = useCheckauth();

  return <EInviteModule />;
};
export default EInvite;
