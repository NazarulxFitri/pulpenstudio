import { Box } from "@mui/material";
import Image from "next/image";

interface ThunderMusicBodyProps {
  left: boolean;
  right: boolean;
}

const ThunderMusicBody: React.FC<ThunderMusicBodyProps> = ({ left, right }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: right ? "0" : "unset",
        left: left ? "0" : "unset",
        top: "100%",
      }}
    >
      <Image
        id="music"
        src="/media/theme/body/lightning.png"
        alt="Music"
        width={100}
        height={600}
      />
    </Box>
  );
};

export default ThunderMusicBody;
