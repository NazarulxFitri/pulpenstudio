import { Box } from "@mui/material";
import Image from "next/image";

interface LoveBodyProps {
  left: boolean;
  right: boolean;
}

const LoveBody: React.FC<LoveBodyProps> = ({ left, right }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: right ? "0" : "unset",
        left: left ? "0" : "unset",
        top: "28vh",
      }}
    >
      <Image
        src="/media/theme/body/love.png"
        alt="Love"
        width={100}
        height={350}
      />
    </Box>
  );
};

export default LoveBody;
