import { Box } from "@mui/material";
import Image from "next/image";

const FlowePurpleTheme = () => {
  return (
    <>
      <Box position="absolute" sx={{ right: "0", transform: "rotate(180deg)" }}>
        <Image
          src="/media/theme/header/flowerRedBody.png"
          width={500}
          height={100}
          alt="Lumie | Flower theme"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        position="absolute"
        sx={{ left: "0", transform: "scaleX(-1) rotate(180deg)" }}
      >
        <Image
          src="/media/theme/header/flowerRedBody.png"
          width={200}
          height={200}
          alt="Lumie | Flower theme"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </>
  );
};

export default FlowePurpleTheme;
