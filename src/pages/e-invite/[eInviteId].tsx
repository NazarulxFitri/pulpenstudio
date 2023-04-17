import { BoxContainer } from "@/components";
import { useRouter } from "next/router";
import { Box, Grid, TextField } from "@mui/material";
import useGetTest from "@/data/useGetTest";
import Layout1 from "@/assets/einvite/layout-1";
import Layout2 from "@/assets/einvite/layout-2";
import Layout3 from "@/assets/einvite/layout-3";
import { useState } from "react";

const EinviteId = () => {
  const router = useRouter();
  const eInviteId = router.query.eInviteId;
  const { data } = useGetTest();
  // @ts-ignore
  const item = data?.find((i) => i.itemName === eInviteId);

  const [title1, setTitle1] = useState("");
  const [title1Color, setTitle1Color] = useState("");
  const [title2, setTitle2] = useState("");
  const [title2Color, setTitle2Color] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [description3, setDescription3] = useState("");

  const listLayout = {
    "001": (
      <Layout1
        {...{
          title1,
          title1Color,
          title2,
          title2Color,
          description1,
          description2,
          description3,
        }}
      />
    ),
    "002": (
      <Layout2
        {...{
          title1,
          title1Color,
          title2,
          title2Color,
          description1,
          description2,
          description3,
        }}
      />
    ),
    "003": (
      <Layout3
        {...{
          title1,
          title1Color,
          title2,
          title2Color,
          description1,
          description2,
          description3,
        }}
      />
    ),
  };

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
              <TextField
                label="Title 1"
                fullWidth
                onChange={(e) => {
                  setTitle1(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Title 1 Color (Enter color code)"
                fullWidth
                onChange={(e) => {
                  setTitle1Color(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Title 2"
                fullWidth
                onChange={(e) => {
                  setTitle2(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Title 2 Color (Enter color code)"
                fullWidth
                onChange={(e) => {
                  setTitle2Color(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Desciption 1"
                fullWidth
                onChange={(e) => {
                  setDescription1(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Desciption 2"
                fullWidth
                onChange={(e) => {
                  setDescription2(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Desciption 3"
                fullWidth
                onChange={(e) => {
                  setDescription3(e.target.value);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          {/* @ts-ignore */}
          {listLayout[item?.itemLayout]}
        </Grid>
      </Grid>
    </BoxContainer>
  );
};

export default EinviteId;
