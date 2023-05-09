import type { AssetLayoutProps } from "@/type";
import { Box, Grid } from "@mui/material";
import {
  FlowerArtTheme,
  LightningTheme,
  Love,
  ThunderMusicBody,
} from "./components";
import LoveBody from "./components/theme/body/Love";
import { ChatIcon, ClockIcon, MapIcon, WhatsappIcon } from "@/components";

const Layout1: React.FC<AssetLayoutProps> = ({
  fontFamily,
  textFontFamily,
  bgColor,
  headerImage,
  bodyImage,
  widgetBgColor,
  widgetColor,
  widgetWsCta,
  widgetMapCta,
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
  description1TopSpacing,
  description1BotSpacing,
  description2,
  description2Color,
  description2Size,
  description2Pos,
  description2TopSpacing,
  description2BotSpacing,
  description3,
  description3Color,
  description3Size,
  description3Pos,
  description3TopSpacing,
  description3BotSpacing,
  description4,
  description4Color,
  description4Size,
  description4Pos,
  description4TopSpacing,
  description4BotSpacing,
}) => {
  return (
    <Box
      px={10}
      py={6}
      sx={{
        background: bgColor,
        height: "100vh",
        position: "relative",
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
          sx={{
            mx: "264px",
            wordWrap: "break-word",
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
            dangerouslySetInnerHTML={{ __html: title1! }}
          />

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
            dangerouslySetInnerHTML={{ __html: title2! }}
          />
        </Box>
        <Box
          sx={{
            py: 6,
            wordWrap: "break-word",
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
              marginTop: description1TopSpacing + "px",
              marginBottom: description1BotSpacing + "px",
            }}
            dangerouslySetInnerHTML={{ __html: description1! }}
          />
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
              marginTop: description2TopSpacing + "px",
              marginBottom: description2BotSpacing + "px",
            }}
            dangerouslySetInnerHTML={{ __html: description2! }}
          />
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
              marginTop: description3TopSpacing + "px",
              marginBottom: description3BotSpacing + "px",
            }}
            dangerouslySetInnerHTML={{ __html: description3! }}
          />
          <p
            style={{
              color: description4Color,
              fontSize: `${description4Size}px`,
              // @ts-ignore
              textAlign:
                description4Pos === "center-Description-four"
                  ? "center"
                  : description4Pos === "left-Description-four"
                  ? "left"
                  : description4Pos === "right-Description-four"
                  ? "right"
                  : "center",
              marginTop: description4TopSpacing + "px",
              marginBottom: description4BotSpacing + "px",
            }}
            dangerouslySetInnerHTML={{ __html: description4! }}
          />
        </Box>
      </Box>
      <Grid
        container
        rowGap={6}
        flexDirection="column"
        sx={{
          boxShadow: "1px 1px 10px",
          position: "fixed",
          p: "48px 24px",
          background: widgetBgColor || "transparent",
          borderTopLeftRadius: "24px",
          borderBottomLeftRadius: "24px",
          top: "32%",
          right: 0,
          width: "fit-content",
        }}
      >
        <Grid item>
          <WhatsappIcon color={widgetColor} size="32" />
        </Grid>
        <Grid>
          <MapIcon color={widgetColor} size="32" />
        </Grid>
        <Grid>
          <ChatIcon color={widgetColor} size="32" />
        </Grid>
        <Grid>
          <ClockIcon color={widgetColor} size="32" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout1;
