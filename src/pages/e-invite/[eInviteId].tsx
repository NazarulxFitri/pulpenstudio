import { useState } from "react";
import {
  BoxContainer,
  TitleForm,
  DescriptionForm,
  StylingForm,
} from "@/components";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import useGetEinvite from "@/data/useGetEinvite";
import useListLayout from "@/data/useListLayout";

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
  const [bgColor, setBgColor] = useState("");
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
  const [description2, setDescription2] = useState("");
  const [description2Color, setDescription2Color] = useState("");
  const [description2Size, setDescription2Size] = useState("");
  const [description2Pos, setDescription2Pos] = useState("");
  const [description3, setDescription3] = useState("");
  const [description3Color, setDescription3Color] = useState("");
  const [description3Size, setDescription3Size] = useState("");
  const [description3Pos, setDescription3Pos] = useState("");
  const listLayout = useListLayout(
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
    description3Pos
  );

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
                {...{ setFontFamily, setBgColor }}
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
              />
            </Grid>
            <Grid item xs={12}>
              <DescriptionForm
                accordionTitle="Description-two"
                setDescription={setDescription2}
                setDescriptionColor={setDescription2Color}
                setDescriptionSize={setDescription2Size}
                setDescriptionPos={setDescription2Pos}
              />
            </Grid>
            <Grid item xs={12}>
              <DescriptionForm
                accordionTitle="Description-three"
                setDescription={setDescription3}
                setDescriptionColor={setDescription3Color}
                setDescriptionSize={setDescription3Size}
                setDescriptionPos={setDescription3Pos}
              />
            </Grid>
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
