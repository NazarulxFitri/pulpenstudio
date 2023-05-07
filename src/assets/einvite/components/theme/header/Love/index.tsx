import { Box } from "@mui/material";
import Image from "next/image";

const Love = () => {
  return (
    <>
      <Box position="absolute" sx={{ left: "0" }}>
        <Image
          src="/media/theme/header/loveButton.webp"
          width={100}
          height={200}
          alt="Lumie | Flower theme"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box position="absolute" sx={{ right: "0" }}>
        <Image
          src="/media/theme/header/loveButton.webp"
          width={100}
          height={200}
          alt="Lumie | Flower theme"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </>
  );
};

export default Love;
