import { BoxContainer } from "@/components";
import Login from "@/modules/Login";
import useCheckauth from "@/utils/useCheckAuth";

export default function Home() {
  const { isAuth } = useCheckauth();

  return <BoxContainer>{!isAuth && <Login />}</BoxContainer>;
}
