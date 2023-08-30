import { useRouter } from "next/router";
import { useState } from "react";
import { BoxContainer, Popup, TickIcon } from "@/components";
import usePostAddEinvite from "@/data/postAddEinvite";
import useCheckWhiteSpace from "@/utils/useCheckWhiteSpace";
import useCheckCapitalCase from "@/utils/useCheckCapitalCase";
import { Box } from "@mui/material";
import useGetEinvite from "@/data/useGetEinvite";
import useCheckExistence from "@/utils/useCheckExistence";
import BreadcrumbModule from "../BreadcrumbModule";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

const EInviteModule = () => {
  const router = useRouter();
  const { layoutid } = router.query;
  const currDate = new Date();
  const [curTab, setCurTab] = useState<number>(0);

  const [itemName, setName] = useState<string>("");
  const [language, setLanguage] = useState<string>("bm");

  const [title1Groom, setTitle1Groom] = useState<string>("");
  console.log("xxx title1", title1Groom);
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

  async function handleSubmit() {
    if (disabled) return null;
    await action(
      {
        itemName,
        language,
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

      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          my: 6,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "unset" },
          }}
        >
          <Box mr={1}>
            {curTab > 0 ? (
              <TickIcon color={curTab < 1 ? "#A9A9A9" : "unset"} />
            ) : (
              ""
            )}
          </Box>
          <p
            style={{
              color: curTab < 1 ? "#A9A9A9" : "unset",
              fontWeight: curTab < 1 ? "300" : "700",
              padding: "0 8px 0 0",
            }}
            dangerouslySetInnerHTML={{ __html: "General" }}
          />
          <Box
            display={{ xs: "none", md: "block" }}
            sx={{
              background: curTab > 0 ? "#000000" : "#A9A9A9",
              width: "100px",
              height: "2px",
              m: "auto",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "unset" },
            mt: { xs: 1, md: "unset" },
          }}
        >
          <Box mx={1}>
            {curTab > 1 ? (
              <TickIcon color={curTab < 2 ? "#A9A9A9" : "unset"} />
            ) : (
              ""
            )}
          </Box>
          <p
            style={{
              color: curTab < 2 ? "#A9A9A9" : "unset",
              fontWeight: curTab < 2 ? "300" : "700",
              padding: "0 8px 0 0",
            }}
            dangerouslySetInnerHTML={{ __html: "Event Details" }}
          />
          <Box
            display={{ xs: "none", md: "block" }}
            sx={{
              background: curTab > 1 ? "#000000" : "#A9A9A9",
              width: "100px",
              height: "2px",
              m: "auto",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "unset" },
            mt: { xs: 1, md: "unset" },
          }}
        >
          <Box mx={1}>
            {curTab > 2 ? (
              <TickIcon color={curTab < 3 ? "#A9A9A9" : "unset"} />
            ) : (
              ""
            )}
          </Box>
          <p
            style={{
              color: curTab < 3 ? "#A9A9A9" : "unset",
              fontWeight: curTab < 3 ? "300" : "700",
              padding: "0 8px 0 0",
            }}
            dangerouslySetInnerHTML={{ __html: "Content" }}
          />
        </Box>
      </Box>

      {curTab === 0 ? (
        <FirstStep
          {...{
            whiteSpace,
            capitalCase,
            existence,
            setName,
            setLanguage,
            curTab,
            setCurTab,
          }}
        />
      ) : curTab === 1 ? (
        <SecondStep
          {...{
            setTitle1Groom,
            setTitle1Bride,
            setTitle2,
            setLocation,
            setDateTime,
            curTab,
            setCurTab,
          }}
        />
      ) : curTab === 2 ? (
        <ThirdStep
          {...{
            setNamePerson1,
            setPhonePerson1,
            setNamePerson2,
            setPhonePerson2,
            setMapUrl,
            setMusicUrl,
            curTab,
            setCurTab,
            handleSubmit,
          }}
        />
      ) : null}

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
