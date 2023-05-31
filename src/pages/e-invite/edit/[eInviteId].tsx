import { useState } from "react";
import {
  BoxContainer,
  FirstCardForm,
  InformationForm,
  Popup,
  TopContentForm,
  WidgetForm,
  WishForm,
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
  const [showPopup, setShowPopup] = useState(false);

  const [firstIntro, setFirstIntro] = useState("﷽");
  const [secondIntro, setSecondIntro] = useState("WALIMATULURUS");
  const [title, setTitle] = useState("Nazarul Fitri & Nurul Izzati");
  const [date, setDate] = useState("22 Februari 2022");
  const [countdownDate, setCountdownDate] = useState();
  const [day, setDay] = useState("Saturday");
  const [time, setTime] = useState("11.00am until 4.00pm");
  const [location, setLocation] = useState("GlassHall Cheras");

  const [descTitle, setDescTitle] = useState(
    "Mohd Azman & Lily Rusnah serta Mohd Rafie & Aidah"
  );
  const [descOne, setDescOne] = useState(
    "Assalamualaikum w.b.t & Salam sejahtera"
  );
  const [descTwo, setDescTwo] = useState(
    "Dengan rasa rendah diri, kami sekeluarga menjemput Dato' / Datin / Tuan / Puan / Encik / Cik untuk hadir ke Majlis Perkahwinan anakanda kami"
  );
  const [descThree, setDescThree] = useState("Description three");

  const [infoTitle, setInfoTitle] = useState("Alamat & Cara hubungi kami");
  const [infoAddress, setInfoAddress] = useState(
    "GlassHall Cheras, Lot 3071, Bandar Mahkota Cheras, 43200 Cheras, Selangor"
  );
  const [infoAddressMap, setInfoAddressMap] = useState(
    "https://www.google.com/maps?q=46,+Jalan+Damai+Perdana+7/1b,+Bandar+Damai+Perdana,+56000+Kuala+Lumpur,+Selangor,+Malaysia&ftid=0x31cc3515e374827b:0x53deac970632fb2b&hl=en-MY&gl=my&entry=gps&g_ep=CAISBjYuNjMuMhgAINeCA0ICU0c%3D&g_st=iw"
  );
  const [infoFirstPhoneName, setInfoFirstPhoneName] =
    useState("Fitri ( Abang )");
  const [infoFirstPhoneNum, setInfoFirstPhoneNum] = useState("01156271776");
  const [infoSecondPhoneName, setInfoSecondPhoneName] =
    useState("Izzati ( Adik )");
  const [infoSecondPhoneNum, setInfoSecondPhoneNum] = useState("01156271776");

  const [wishTitleForm, setWishFormTitle] = useState("Ruangan Ucapan");
  const [wishDescForm, setWishFormDesc] = useState("Letak je apa apa");

  const [widgetColor, setWidgetColor] = useState("black");
  const [widgetBgColor, setWidgetBgColor] = useState("white");

  const listLayout = useListLayout(
    firstIntro,
    secondIntro,
    title,
    date,
    countdownDate,
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
            position: "fixed",
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
            <Grid item xs={12}>
              <WidgetForm
                accordionTitle="Widget Section"
                {...{
                  setWidgetBgColor,
                  setWidgetColor,
                  widgetBgColor,
                  widgetColor,
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
        <Popup
          title="e-Invite"
          message="Congratulations ! You have successfully submitted your design."
          disclaimer="Check out your live eInvite now !"
          itemName={eInviteId as string}
          live={true}
        />
      )}
    </BoxContainer>
  );
};

export default EinviteId;
