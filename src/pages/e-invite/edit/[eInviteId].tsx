import { useEffect, useState } from "react";
import {
  BoxContainer,
  FirstCardForm,
  InformationForm,
  Popup,
  TopContentForm,
  WishForm,
} from "@/components";
import { useRouter } from "next/router";
import { Box, Grid, Skeleton } from "@mui/material";
import useGetEinvite from "@/data/useGetEinvite";
import useListLayout from "@/data/useListLayout";
import usePostUpdateEinvite from "@/data/postUpdateEinvite";
import useGetUserId from "@/utils/useGetUserId";

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
  const userId = useGetUserId();
  const { data: item, isLoading } = useGetEinvite(eInviteId as string);
  const [showPopup, setShowPopup] = useState(false);
  // @ts-ignore
  const addedItem = item?.data;

  const [firstIntro, setFirstIntro] = useState<string>("");
  const [secondIntro, setSecondIntro] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [countdownDate, setCountdownDate] = useState({
    d: "--",
    h: "--",
    m: "--",
  });
  const [dateTime, setDateTime] = useState<any>();
  const [day, setDay] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const [descTitle, setDescTitle] = useState<string>("");
  const [descOne, setDescOne] = useState<string>("");
  const [descTwo, setDescTwo] = useState<string>("");
  const [descThree, setDescThree] = useState<string>("");

  const [infoTitle, setInfoTitle] = useState<string>("");
  const [infoAddress, setInfoAddress] = useState<string>("");
  const [infoAddressMap, setInfoAddressMap] = useState<string>("");
  const [infoFirstPhoneName, setInfoFirstPhoneName] = useState<string>("");
  const [infoFirstPhoneNum, setInfoFirstPhoneNum] = useState<string>("");
  const [infoSecondPhoneName, setInfoSecondPhoneName] = useState<string>("");
  const [infoSecondPhoneNum, setInfoSecondPhoneNum] = useState<string>("");

  const [wishTitleForm, setWishFormTitle] = useState<string>("");
  const [wishDescForm, setWishFormDesc] = useState<string>("");

  const [widgetColor, setWidgetColor] = useState<string>("");
  const [widgetBgColor, setWidgetBgColor] = useState<string>("");

  if (!isLoading && userId !== item?.userId) return null;

  const listLayout = useListLayout(
    firstIntro,
    secondIntro,
    title,
    date,
    countdownDate,
    dateTime,
    day,
    time,
    location,
    descTitle,
    descOne,
    descTwo,
    descThree,
    infoTitle,
    infoAddress,
    infoAddressMap,
    infoFirstPhoneName,
    infoFirstPhoneNum,
    infoSecondPhoneName,
    infoSecondPhoneNum,
    wishTitleForm,
    wishDescForm,
    widgetBgColor,
    widgetColor
  );

  const { action } = usePostUpdateEinvite(
    // @ts-ignore
    item?.layout,
    eInviteId as string
  );

  function handleSubmit() {
    action({
      firstIntro,
      secondIntro,
      title,
      date,
      countdownDate,
      dateTime,
      day,
      time,
      location,
      descTitle,
      descOne,
      descTwo,
      descThree,
      infoTitle,
      infoAddress,
      infoAddressMap,
      infoFirstPhoneName,
      infoFirstPhoneNum,
      infoSecondPhoneName,
      infoSecondPhoneNum,
      wishTitleForm,
      wishDescForm,
      widgetBgColor,
      widgetColor,
    });
    setShowPopup(true);
    window.scrollTo({ top: 100, behavior: "smooth" });
  }

  return (
    <BoxContainer fullWidth={true}>
      <Grid container>
        <Grid
          item
          xs={2}
          p={2}
          sx={{
            height: "100vh",
            position: "absolute",
          }}
        >
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <TopContentForm
                accordionTitle="Wallpaper"
                {...{
                  setFirstIntro,
                  setSecondIntro,
                  setTitle,
                  setDate,
                  setCountdownDate,
                  setDateTime,
                  dateTime,
                  setDay,
                  setTime,
                  setLocation,
                  firstIntro,
                  secondIntro,
                  title,
                  date,
                  day,
                  time,
                  location,
                  addedItem,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FirstCardForm
                accordionTitle="First Card"
                {...{
                  setDescTitle,
                  setDescOne,
                  setDescTwo,
                  setDescThree,
                  descTitle,
                  descOne,
                  descTwo,
                  descThree,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <InformationForm
                accordionTitle="Information"
                {...{
                  setInfoTitle,
                  setInfoAddress,
                  setInfoAddressMap,
                  setInfoFirstPhoneName,
                  setInfoFirstPhoneNum,
                  setInfoSecondPhoneName,
                  setInfoSecondPhoneNum,
                  infoTitle,
                  infoAddress,
                  infoAddressMap,
                  infoFirstPhoneName,
                  infoFirstPhoneNum,
                  infoSecondPhoneName,
                  infoSecondPhoneNum,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <WishForm
                accordionTitle="Wish Section"
                {...{
                  setWishFormTitle,
                  setWishFormDesc,
                  wishTitleForm,
                  wishDescForm,
                }}
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
              cursor: "pointer",
              fontWeight: "600",
              mt: 8,
              py: 2,
              "&:hover": {
                background: "#fff",
                color: "#1976d2",
              },
            }}
            onClick={handleSubmit}
          >
            Submit
          </Grid>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={10} borderLeft="1px solid #F0F0F0">
          {/* @ts-ignore */}
          {listLayout[item?.layout]}
        </Grid>
      </Grid>
      {!!showPopup && (
        <Box id="popup">
          <Popup
            title="e-Invite"
            message="Congratulations ! You have successfully submitted your design."
            disclaimer="Check out your live eInvite now !"
            itemName={eInviteId as string}
            live={true}
          />
        </Box>
      )}
    </BoxContainer>
  );
};

export default EinviteId;
