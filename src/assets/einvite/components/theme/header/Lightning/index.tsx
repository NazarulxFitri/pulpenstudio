import { Box } from "@mui/material";
import Image from "next/image";

const LightningTheme = () => {
  return (
    <>
      <Box
        position="absolute"
        sx={{ left: "0", transform: "scaleX(-1)", maxWidth: "264px" }}
      >
        <Image
          src="/media/theme/header/thunderMusic.png"
          width={150}
          height={500}
          alt="Lumie | Flower theme"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box position="absolute" sx={{ right: "0", maxWidth: "264px" }}>
        <Image
          src="/media/theme/header/thunderMusic.png"
          width={150}
          height={500}
          alt="Lumie | Flower theme"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </>
  );
};

export default LightningTheme;
