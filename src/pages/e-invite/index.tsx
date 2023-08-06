import EInviteModule from "@/modules/eInviteModule";
import useCheckauth from "@/utils/useCheckAuth";

const EInvite = () => {
  const { auth } = useCheckauth();

  if (!auth) return null;

  return <EInviteModule />;
};
export default EInvite;
