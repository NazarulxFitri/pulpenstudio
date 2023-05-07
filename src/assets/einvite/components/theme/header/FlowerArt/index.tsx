import { Box } from "@mui/material";
import Image from "next/image";

const FlowerArtTheme = () => {
  return (
    <>
      <Box position="absolute" sx={{ left: "0", transform: "scaleX(-1)" }}>
        <Image
          src="/media/theme/header/flowerart.webp"
          width={300}
          height={300}
          alt="Lumie | Flower theme"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box position="absolute" sx={{ right: "0" }}>
        <Image
          src="/media/theme/header/flowerart.webp"
          width={300}
          height={300}
          alt="Lumie | Flower theme"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </>
  );
};

export default FlowerArtTheme;
