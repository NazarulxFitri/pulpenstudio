import type { AssetLayoutProps } from "@/type";
import { Box } from "@mui/material";
import {
  FlowerArtTheme,
  LightningTheme,
  Love,
  ThunderMusicBody,
} from "./components";
import LoveBody from "./components/theme/body/Love";

const Layout1: React.FC<AssetLayoutProps> = ({
  fontFamily,
  textFontFamily,
  bgColor,
  headerImage,
  bodyImage,
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
      px={10}
      py={6}
      sx={{
        background: bgColor,
        height: "100vh",
      }}
    >
      <Box sx={{ position: "relative" }}>
        {headerImage === "Flower" && <FlowerArtTheme />}
        {headerImage === "Music" && <LightningTheme />}
        {headerImage === "Love" && <Love />}

        {bodyImage === "Love" && (
          <>
            <LoveBody left={true} right={false} />
            <LoveBody left={false} right={true} />
          </>
        )}
        {bodyImage === "Thunder" && (
          <>
            <ThunderMusicBody left={true} right={false} />
            <ThunderMusicBody left={false} right={true} />
          </>
        )}

        <Box
          className="box"
          sx={{
            mx: "264px",
            pt: 6,
            textAlign: "center",
            fontFamily: `${fontFamily?.style?.fontFamily} !important` || "auto",
          }}
        >
          <h1
            style={{
              borderTop: "2px solid",
              borderLeft: "2px solid",
              borderImage:
                "linear-gradient(0.25turn, #800080, #FFC0CB, #FFFF00)",
              borderImageSlice: "1",
              color: title1Color,
              fontSize: !!title1Size ? `${title1Size}px` : "56px",
              paddingTop: "16px",
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
              borderBottom: "2px solid",
              borderRight: "2px solid",
              borderImage:
                "linear-gradient(0.25turn, #FFFF00, #FFC0CB, #800080)",
              borderImageSlice: "1",
              color: title2Color,
              fontSize: !!title2Size ? `${title2Size}px` : "56px",
              paddingBottom: "16px",
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
        <Box
          sx={{
            py: 6,
            mx: "264px",
            textAlign: "center",
            fontFamily:
              `${textFontFamily?.style?.fontFamily} !important` || "auto",
          }}
        >
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
