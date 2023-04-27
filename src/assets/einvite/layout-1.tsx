import type { AssetLayoutProps } from "@/type";
import { Box } from "@mui/material";

const Layout1: React.FC<AssetLayoutProps> = ({
  fontFamily,
  title1,
  title1Color,
  title1Size,
  title1Shadow,
  title2,
  title2Color,
  title2Size,
  title2Shadow,
  description1,
  description1Color,
  description1Size,
  description2,
  description2Color,
  description2Size,
  description3,
  description3Color,
  description3Size,
}) => {
  return (
    <Box
      p={2}
      sx={{
        fontFamily: `${fontFamily?.style?.fontFamily} !important` || "auto",
        backgroundImage:
          "linear-gradient(to bottom, #fa93c3, #fd94d0, #fe96de, #fc98ec, #f99cfc)",
        height: "100vh",
      }}
    >
      <Box sx={{ py: 6, textAlign: "center" }}>
        <h1
          style={{
            color: title1Color,
            fontSize: !!title1Size ? `${title1Size}px` : "56px",
            textShadow:
              title1Shadow === "on-Title-one" ? "6px 4px 4px #EEEE" : "unset",
          }}
        >
          {title1}
        </h1>
        <h1
          style={{
            color: title2Color,
            fontSize: `${title2Size}px`,
            textShadow:
              title2Shadow === "on-Title-two" ? "6px 4px 4px #EEEE" : "unset",
          }}
        >
          {title2}
        </h1>
      </Box>
      <Box sx={{ margin: "0 auto", width: "fit-content" }}>
        <p
          style={{
            color: description1Color,
            fontSize: `${description1Size}px`,
          }}
        >
          {description1}
        </p>
        <p
          style={{
            color: description2Color,
            fontSize: `${description1Size}px`,
          }}
        >
          {description2}
        </p>
        <p
          style={{
            color: description3Color,
            fontSize: `${description1Size}px`,
          }}
        >
          {description3}
        </p>
      </Box>
    </Box>
  );
};

export default Layout1;
