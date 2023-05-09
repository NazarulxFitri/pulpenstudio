// @ts-nocheck
import useGetEinvite from "@/data/useGetEinvite";
import useListLayout from "@/data/useListLayout";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";

interface EinviteLiveProps {}

const EinviteLive: React.FC<EinviteLiveProps> = () => {
  const router = useRouter();
  const eInviteId = router.query.eInviteId;
  const { data } = useGetEinvite(eInviteId as string);

  const fontFamily = data?.data?.fontFamily;
  const textFontFamily = data?.data?.textFontFamily;
  const bgColor = data?.data?.bgColor;
  const headerImage = data?.headerImage;
  const bodyImage = data?.data?.bodyImage;
  const widgetBgColor = data?.data?.widgetBgColor;
  const widgetColor = data?.data?.widgetColor;
  const widgetWsCta = data?.data?.widgetWsCta;
  const widgetMapCta = data?.data?.widgetMapCta;
  const title1 = data?.data?.title1;
  const title1Color = data?.data?.title1Color;
  const title1Size = data?.data?.title1Size;
  const title1Pos = data?.data?.title1Pos;
  const title1Shadow = data?.data?.title1Shadow;
  const title2 = data?.data?.title2;
  const title2Color = data?.data?.title2Color;
  const title2Size = data?.data?.title2Size;
  const title2Pos = data?.data?.title2Pos;
  const title2Shadow = data?.data?.title2Shadow;
  const description1 = data?.data?.description1;
  const description1Color = data?.data?.description1Color;
  const description1Size = data?.data?.description1Size;
  const description1Pos = data?.data?.description1Pos;
  const description1TopSpacing = data?.data?.description1TopSpacing;
  const description1BotSpacing = data?.data?.description1BotSpacing;
  const description2 = data?.data?.description2;
  const description2Color = data?.data?.description2Color;
  const description2Size = data?.data?.description2Size;
  const description2Pos = data?.data?.description2Pos;
  const description2TopSpacing = data?.data?.description2TopSpacing;
  const description2BotSpacing = data?.data?.description2BotSpacing;
  const description3 = data?.data?.description3;
  const description3Color = data?.data?.description3Color;
  const description3Size = data?.data?.description3Size;
  const description3Pos = data?.data?.description3Pos;
  const description3TopSpacing = data?.data?.description3TopSpacing;
  const description3BotSpacing = data?.data?.description3BotSpacing;
  const description4 = data?.data?.description4;
  const description4Color = data?.data?.description4Color;
  const description4Size = data?.data?.description4Size;
  const description4Pos = data?.data?.description4Pos;
  const description4TopSpacing = data?.data?.description4TopSpacing;
  const description4BotSpacing = data?.data?.description4BotSpacing;

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

  return (
    <Grid item xs={12}>
      {listLayout[data?.layout]}
    </Grid>
  );
};

export default EinviteLive;
