import { useRouter } from "next/router";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import {
  BoxContainer,
  CardSelection,
  ErrorMessage,
  ListNumber,
  Popup,
} from "@/components";
import Button from "@/components/Button";
import usePostAddEinvite from "@/data/postAddEinvite";
import useCheckWhiteSpace from "@/utils/useCheckWhiteSpace";
import useCheckCapitalCase from "@/utils/useCheckCapitalCase";
import { Box, Grid, TextField } from "@mui/material";
import useGetEinvite from "@/data/useGetEinvite";
import useCheckExistence from "@/utils/useCheckExistence";
import BreadcrumbModule from "../BreadcrumbModule";

const cardData = [
  {
    name: "light-pink",
    id: "001",
    src: "/media/cardSelection/light-pink.png",
  },
];

const EInviteModule = () => {
  const router = useRouter();
  const { layoutid } = router.query;

  const currDate = new Date();

  const [itemName, setName] = useState<string>("");
  const [title1Groom, setTitle1Groom] = useState<string>("");
  const [title1Bride, setTitle1Bride] = useState<string>("");
  const [title2, setTitle2] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [dateTime, setDateTime] = useState<string>("");

  const [namePerson1, setNamePerson1] = useState<string>("");
  const [namePerson2, setNamePerson2] = useState<string>("");
  const [phonePerson1, setPhonePerson1] = useState<string>("");
  const [phonePerson2, setPhonePerson2] = useState<string>("");
  const [mapUrl, setMapUrl] = useState<string>("");
  const [musicUrl, setMusicUrl] = useState<string>("");

  const { data } = useGetEinvite();
  const { action } = usePostAddEinvite(itemName, layoutid as string);
  const [showPopup, setShowPopup] = useState(false);

  // @ts-ignore
  const existence = useCheckExistence(data, itemName);
  const whiteSpace = useCheckWhiteSpace(itemName);
  const capitalCase = useCheckCapitalCase(itemName);
  const emptyField =
    !itemName ||
    !title1Bride ||
    !title1Groom ||
    !title2 ||
    !location ||
    !dateTime ||
    !namePerson1 ||
    !namePerson2 ||
    !phonePerson1 ||
    !phonePerson2 ||
    !mapUrl;
  const disabled =
    !!whiteSpace || !!capitalCase || !layoutid || !!existence || !!emptyField;

  async function handleClickButton() {
    if (disabled) return null;
    await action(
      {
        itemName,
        title1Groom,
        title1Bride,
        title2,
        location,
        dateTime,
        namePerson1,
        namePerson2,
        phonePerson1,
        phonePerson2,
        mapUrl,
        musicUrl,
      },
      currDate.toString()
    );

    setShowPopup(true);
    window.scrollTo({ top: 100, behavior: "smooth" });
  }

  return (
    <BoxContainer>
      <h1 style={{ fontSize: "24px", marginTop: "40px" }}>e-Invite</h1>
      <Box mt={2}>
        <BreadcrumbModule
          text1="Home"
          cta1="/"
          text2="e-Invite"
          cta2="/e-invite"
          level="two"
        />
      </Box>
      <p style={{ marginTop: "24px" }}>
        Let&apos;s start create your e-Invite. Choose your selections below !
      </p>
      <Box>
        <Box display="flex" mt={3}>
          <ListNumber circle={true} number={1} />
          <h4>Create card name (url)</h4>
        </Box>
        <Box mt={1}>
          <TextField
            sx={{ width: { xs: "100%", md: "20%" } }}
            id="standard-basic"
            label="eg. kahwin-luwixmini , majlis-berbuka-puasa"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          {!!whiteSpace && (
            <ErrorMessage message="Please make sure no whitespace" />
          )}
          {!!capitalCase && (
            <ErrorMessage message="Please make sure no capital case" />
          )}
          {!!existence && (
            <ErrorMessage message="Please try a different name. This name has been used" />
          )}
        </Box>
      </Box>
      <Grid container spacing={4} flexDirection={{ xs: "column", md: "row" }}>
        <Grid item xs={12} md={6}>
          <Box display="flex" mt={4}>
            <ListNumber circle={true} number={2} />
            <h4>Card content</h4>
          </Box>
          <Box mt={2} gap={2} sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              id="standard-basic"
              placeholder="Judika"
              label="Title : Nama pengantin Lelaki"
              variant="standard"
              sx={{ width: { xs: "100%", md: "50%" } }}
              onChange={(e) => setTitle1Groom(e.currentTarget.value)}
            />
            <TextField
              id="standard-basic"
              placeholder="Mahalini"
              label="Title : Nama pengantin Perempuan"
              variant="standard"
              sx={{ width: { xs: "100%", md: "50%" } }}
              onChange={(e) => setTitle1Bride(e.currentTarget.value)}
            />
            <TextField
              id="standard-basic"
              placeholder="Leo Messi & Angelia serta Paul Robert & Marissa"
              label="Nama wakil penganjur"
              variant="standard"
              sx={{ width: { xs: "100%", md: "50%" } }}
              onChange={(e) => setTitle2(e.currentTarget.value)}
            />
            <TextField
              id="standard-basic"
              placeholder="Glass Hall, Forest Valley, Cheras"
              label="Lokasi"
              variant="standard"
              sx={{ width: { xs: "100%", md: "50%" } }}
              onChange={(e) => setLocation(e.currentTarget.value)}
            />
            <DateTimePicker
              sx={{ m: "16px 0", width: "50%" }}
              label="Tarikh & Masa"
              // @ts-ignore
              onChange={(e) => setDateTime(e.$d.toString())}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" mt={4}>
            <ListNumber circle={true} number={3} />
            <h4>Widget configuration</h4>
          </Box>
          <Box mt={2} gap={2} sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              id="standard-basic"
              placeholder="Zack"
              label="Nama orang untuk dihubungi 1"
              variant="standard"
              sx={{ width: { xs: "100%", md: "50%" } }}
              onChange={(e) => setNamePerson1(e.currentTarget.value)}
            />
            <TextField
              id="standard-basic"
              placeholder="01156271776"
              label="Nombor orang untuk dihubungi telefon 1"
              variant="standard"
              sx={{ width: { xs: "100%", md: "50%" } }}
              onChange={(e) => setPhonePerson1(e.currentTarget.value)}
            />
            <TextField
              id="standard-basic"
              placeholder="Wendy"
              label="Nama orang untuk dihubungi 2"
              variant="standard"
              sx={{ width: { xs: "100%", md: "50%" } }}
              onChange={(e) => setNamePerson2(e.currentTarget.value)}
            />
            <TextField
              id="standard-basic"
              placeholder="01156271776"
              label="Nombor orang untuk dihubungi telefon 2"
              variant="standard"
              sx={{ width: { xs: "100%", md: "50%" } }}
              onChange={(e) => setPhonePerson2(e.currentTarget.value)}
            />
            <TextField
              id="standard-basic"
              placeholder="https://www.google.com/maps/dir//glasshall+forest+valley/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cc358ea1ca26ff:0xed9060ff23e7def2?sa=X&ved=2ahUKEwi7nsWm3cyAAxU_wTgGHUmXCJEQ9Rd6BAhOEAA&ved=2ahUKEwi7nsWm3cyAAxU_wTgGHUmXCJEQ9Rd6BAhWEAQ"
              label="Google Map URL"
              variant="standard"
              sx={{ width: { xs: "100%", md: "50%" } }}
              onChange={(e) => setMapUrl(e.currentTarget.value)}
            />
            <TextField
              id="standard-basic"
              placeholder="https://www.google.com/maps/dir//glasshall+forest+valley/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cc358ea1ca26ff:0xed9060ff23e7def2?sa=X&ved=2ahUKEwi7nsWm3cyAAxU_wTgGHUmXCJEQ9Rd6BAhOEAA&ved=2ahUKEwi7nsWm3cyAAxU_wTgGHUmXCJEQ9Rd6BAhWEAQ"
              label="Pilihan lagu (youtube)"
              variant="standard"
              sx={{ width: { xs: "100%", md: "50%" } }}
              onChange={(e) => setMusicUrl(e.currentTarget.value)}
            />
          </Box>
        </Grid>
      </Grid>

      <Box
        onClick={handleClickButton}
        sx={{ m: "64px auto", width: "fit-content" }}
      >
        <Button disabled={disabled}>Proceed</Button>
      </Box>
      {!!showPopup && (
        <Popup
          title="e-Invite"
          message="Congratulations ! You have successfully created your e-Invite."
          disclaimer="Thank you"
          {...{ itemName }}
        />
      )}
    </BoxContainer>
  );
};
export default EInviteModule;
