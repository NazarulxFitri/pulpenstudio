import { useState } from "react";
import {
  BoxContainer,
  TitleForm,
  DescriptionForm,
  StylingForm,
  WidgetForm,
} from "@/components";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import useGetEinvite from "@/data/useGetEinvite";
import useListLayout from "@/data/useListLayout";
import usePostUpdateEinvite from "@/data/postUpdateEinvite";

export interface FontFamilyConfig {
  className: string;
  style: {
    fontFamily: string;
    fontStyle: string;
    fontWeight: number;
  };
}

const EinviteId = () => {
  const router = useRouter();
  const eInviteId = router.query.eInviteId;
  const { data: item } = useGetEinvite(eInviteId as string);

  const [fontFamily, setFontFamily] = useState<FontFamilyConfig>();
  const [textFontFamily, setTextFontFamily] = useState<FontFamilyConfig>();
  const [bgColor, setBgColor] = useState("");
  const [headerImage, setHeaderImage] = useState("");
  const [bodyImage, setBodyImage] = useState("");
  const [widgetBgColor, setWidgetBgColor] = useState("");
  const [widgetColor, setWidgetColor] = useState("");
  const [widgetWsCta, setWidgetWsCta] = useState("");
  const [widgetMapCta, setWidgetMapCta] = useState("");
  // const [widgetCountdown, setWidgetCountdown] = useState("");
  const [title1, setTitle1] = useState("");
  const [title1Color, setTitle1Color] = useState("");
  const [title1Size, setTitle1Size] = useState("");
  const [title1Pos, setTitle1Pos] = useState("");
  const [title1Shadow, setTitle1Shadow] = useState("");
  const [title2, setTitle2] = useState("");
  const [title2Color, setTitle2Color] = useState("");
  const [title2Size, setTitle2Size] = useState("");
  const [title2Pos, setTitle2Pos] = useState("");
  const [title2Shadow, setTitle2Shadow] = useState("");
  const [description1, setDescription1] = useState("");
  const [description1Color, setDescription1Color] = useState("");
  const [description1Size, setDescription1Size] = useState("");
  const [description1Pos, setDescription1Pos] = useState("");
  const [description1TopSpacing, setDescription1TopSpacing] = useState("");
  const [description1BotSpacing, setDescription1BotSpacing] = useState("");
  const [description2, setDescription2] = useState("");
  const [description2Color, setDescription2Color] = useState("");
  const [description2Size, setDescription2Size] = useState("");
  const [description2Pos, setDescription2Pos] = useState("");
  const [description2TopSpacing, setDescription2TopSpacing] = useState("");
  const [description2BotSpacing, setDescription2BotSpacing] = useState("");
  const [description3, setDescription3] = useState("");
  const [description3Color, setDescription3Color] = useState("");
  const [description3Size, setDescription3Size] = useState("");
  const [description3Pos, setDescription3Pos] = useState("");
  const [description3TopSpacing, setDescription3TopSpacing] = useState("");
  const [description3BotSpacing, setDescription3BotSpacing] = useState("");
  const [description4, setDescription4] = useState("");
  const [description4Color, setDescription4Color] = useState("");
  const [description4Size, setDescription4Size] = useState("");
  const [description4Pos, setDescription4Pos] = useState("");
  const [description4TopSpacing, setDescription4TopSpacing] = useState("");
  const [description4BotSpacing, setDescription4BotSpacing] = useState("");
  const [success, setSuccess] = useState(false);
  const listLayout = useListLayout(
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
    description4BotSpacing
  );

  const { action } = usePostUpdateEinvite(
    {
      // @ts-ignore
      fontFamily,
      // @ts-ignore
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
    },
    // @ts-ignore
    item?.layout,
    eInviteId as string
  );

  function handleSubmit() {
    action();
    setSuccess(true);
  }

  return (
    <BoxContainer fullWidth={true}>
      <Grid container>
        <Grid
          item
          xs={2}
          p={2}
          sx={{ border: "4px solid #EFEFEF", height: "100vh" }}
        >
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <StylingForm
                accordionTitle="General"
                {...{
                  setFontFamily,
                  setTextFontFamily,
                  setBgColor,
                  setHeaderImage,
                  setBodyImage,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <WidgetForm
                accordionTitle="Widget Form"
                {...{
                  setWidgetBgColor,
                  setWidgetColor,
                  setWidgetWsCta,
                  setWidgetMapCta,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TitleForm
                accordionTitle="Title-one"
                setTitle={setTitle1}
                setTitleColor={setTitle1Color}
                setTitleSize={setTitle1Size}
                setTitleShadow={setTitle1Shadow}
                setTitlePos={setTitle1Pos}
              />
            </Grid>
            <Grid item xs={12}>
              <TitleForm
                accordionTitle="Title-two"
                setTitle={setTitle2}
                setTitleColor={setTitle2Color}
                setTitleSize={setTitle2Size}
                setTitleShadow={setTitle2Shadow}
                setTitlePos={setTitle2Pos}
              />
            </Grid>

            <Grid item xs={12}>
              <DescriptionForm
                accordionTitle="Description-one"
                setDescription={setDescription1}
                setDescriptionColor={setDescription1Color}
                setDescriptionSize={setDescription1Size}
                setDescriptionPos={setDescription1Pos}
                setDescriptionTopSpacing={setDescription1TopSpacing}
                setDescriptionBotSpacing={setDescription1BotSpacing}
              />
            </Grid>
            <Grid item xs={12}>
              <DescriptionForm
                accordionTitle="Description-two"
                setDescription={setDescription2}
                setDescriptionColor={setDescription2Color}
                setDescriptionSize={setDescription2Size}
                setDescriptionPos={setDescription2Pos}
                setDescriptionTopSpacing={setDescription2TopSpacing}
                setDescriptionBotSpacing={setDescription2BotSpacing}
              />
            </Grid>
            <Grid item xs={12}>
              <DescriptionForm
                accordionTitle="Description-three"
                setDescription={setDescription3}
                setDescriptionColor={setDescription3Color}
                setDescriptionSize={setDescription3Size}
                setDescriptionPos={setDescription3Pos}
                setDescriptionTopSpacing={setDescription3TopSpacing}
                setDescriptionBotSpacing={setDescription3BotSpacing}
              />
            </Grid>
            <Grid item xs={12}>
              <DescriptionForm
                accordionTitle="Description-four"
                setDescription={setDescription4}
                setDescriptionColor={setDescription4Color}
                setDescriptionSize={setDescription4Size}
                setDescriptionPos={setDescription4Pos}
                setDescriptionTopSpacing={setDescription4TopSpacing}
                setDescriptionBotSpacing={setDescription4BotSpacing}
              />
            </Grid>
          </Grid>
          <Grid
            item
            textAlign="center"
            sx={{
              backgroundColor: "#1976d2",
              borderRadius: "24px",
              boxShadow: "1px 1px 10px #333",
              color: "#FFF",
              fontWeight: "600",
              mt: 8,
              py: 2,
            }}
            onClick={handleSubmit}
          >
            Submit
          </Grid>
        </Grid>
        <Grid item xs={10}>
          {/* @ts-ignore */}
          {listLayout[item?.layout]}
        </Grid>
      </Grid>
    </BoxContainer>
  );
};

export default EinviteId;
