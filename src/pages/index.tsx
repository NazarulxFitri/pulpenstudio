import { BoxContainer } from "@/components";
import Login from "@/modules/Login";
import useCheckauth from "@/utils/useCheckAuth";
import useRemoveAuth from "@/utils/useRemoveAuth";
import { Box } from "@mui/material";

export default function Home() {
  const { auth, loading } = useCheckauth();

  if (loading) return "null";

  return (
    <BoxContainer>
      {!auth && <Login />}
      <Box onClick={useRemoveAuth}>Loogout</Box>
    </BoxContainer>
  );
}
