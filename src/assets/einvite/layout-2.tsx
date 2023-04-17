import type { AssetLayoutProps } from "@/type";
import { Box } from "@mui/material";
import { Righteous } from "next/font/google";
import Image from "next/image";

const righteous = Righteous({ subsets: ["latin"], weight: "400" });

const Layout2: React.FC<AssetLayoutProps> = ({
  title1,
  title1Color,
  title2,
  title2Color,
  description1,
  description2,
  description3,
}) => {
  return (
    <Box
      sx={{
        fontFamily: righteous.style.fontFamily,
        backgroundImage:
          "linear-gradient(to bottom, #fa93c3, #fd94d0, #fe96de, #fc98ec, #f99cfc)",
        height: "100vh",
      }}
    >
      <Box sx={{ py: 6, textAlign: "center" }}>
        <h1
          style={{
            color: title1Color,
            fontSize: "56px",
            textShadow: "6px 4px 4px #000",
          }}
        >
          {title1}
        </h1>
        <h1
          style={{
            color: title2Color,
            fontSize: "56px",
            textShadow: "6px 4px 0 #000",
          }}
        >
          {title2}
        </h1>
      </Box>
      <Box sx={{ fontSize: "24px", margin: "0 auto", width: "fit-content" }}>
        <p style={{ fontSize: "24px" }}>{description1}</p>
        <p style={{ fontSize: "24px" }}>{description2}</p>
        <p style={{ fontSize: "24px" }}>{description3}</p>
      </Box>
    </Box>
  );
};

export default Layout2;
