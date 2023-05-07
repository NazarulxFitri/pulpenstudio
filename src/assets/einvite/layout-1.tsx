import type { AssetLayoutProps } from "@/type";
import { Box } from "@mui/material";
import {
  FlowePurpleTheme,
  FlowerArtTheme,
  LightningTheme,
  Love,
  ThunderMusicBody,
} from "./components";
import LoveBody from "./components/theme/body/Love";

const Layout1: React.FC<AssetLayoutProps> = ({
  fontFamily,
  bgColor,
  title1,
  title1Color,
  title1Size,
  title1Pos,
  title1Shadow,
  title2,
  title2Color,
  title2Size,
  title2Pos,
  title2Shadow,
  description1,
  description1Color,
  description1Size,
  description1Pos,
  description2,
  description2Color,
  description2Size,
  description2Pos,
  description3,
  description3Color,
  description3Size,
  description3Pos,
}) => {
  return (
    <Box
      px={20}
      sx={{
        fontFamily: `${fontFamily?.style?.fontFamily} !important` || "auto",
        background: bgColor,
        height: "100vh",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <FlowerArtTheme />
        <FlowePurpleTheme />
        <LightningTheme />
        <Love />
        <LoveBody left={true} right={false} />
        <LoveBody left={false} right={true} />
        <ThunderMusicBody left={false} right={true} />
        <ThunderMusicBody left={true} right={false} />
        <Box sx={{ py: 6, textAlign: "center" }}>
          <h1
            style={{
              color: title1Color,
              fontSize: !!title1Size ? `${title1Size}px` : "56px",
              textShadow:
                title1Shadow === "on-Title-one" ? "6px 4px 4px #EEEE" : "unset",
              // @ts-ignore
              textAlign:
                title1Pos === "center-Title-one"
                  ? "center"
                  : title1Pos === "left-Title-one"
                  ? "left"
                  : title1Pos === "right-Title-one"
                  ? "right"
                  : "center",
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
              // @ts-ignore
              textAlign:
                title2Pos === "center-Title-two"
                  ? "center"
                  : title2Pos === "left-Title-two"
                  ? "left"
                  : title2Pos === "right-Title-two"
                  ? "right"
                  : "center",
            }}
          >
            {title2}
          </h1>
        </Box>
        <Box sx={{ py: 6, textAlign: "center" }}>
          <p
            style={{
              color: description1Color,
              fontSize: `${description1Size}px`,
              // @ts-ignore
              textAlign:
                description1Pos === "center-Description-one"
                  ? "center"
                  : description1Pos === "left-Description-one"
                  ? "left"
                  : description1Pos === "right-Description-one"
                  ? "right"
                  : "center",
            }}
          >
            {description1}
          </p>
          <p
            style={{
              color: description2Color,
              fontSize: `${description2Size}px`,
              // @ts-ignore
              textAlign:
                description2Pos === "center-Description-two"
                  ? "center"
                  : description2Pos === "left-Description-two"
                  ? "left"
                  : description2Pos === "right-Description-two"
                  ? "right"
                  : "center",
            }}
          >
            {description2}
          </p>
          <p
            style={{
              color: description3Color,
              fontSize: `${description3Size}px`,
              // @ts-ignore
              textAlign:
                description3Pos === "center-Description-three"
                  ? "center"
                  : description3Pos === "left-Description-three"
                  ? "left"
                  : description3Pos === "right-Description-three"
                  ? "right"
                  : "center",
            }}
          >
            {description3}
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout1;
