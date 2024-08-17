// Khairu Amira & Zolekfli

import { Box, Grid, List, Paper, styled } from "@mui/material";
import {
  Allura,
  Cormorant_SC,
  Imperial_Script,
  Playfair_Display,
  Ubuntu,
} from "next/font/google";
import useGetEinvite from "@/data/useGetEinvite";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useGetCountDownTimer from "@/data/useGetCountDownTimer";
import Widget from "@/components/Widget";
import ReactPlayer from "react-player";
import { CommentList, Door } from "@/components";
import Image from "next/image";
import { locale } from "@/utils/Locale";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const allura = Allura({ subsets: ["latin"], weight: ["400"] });
const imperialScript = Imperial_Script({ subsets: ["latin"], weight: ["400"] });
const cormorant = Cormorant_SC({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

interface DateTimeConfig {
  countdownTimer: {
    d: number;
    h: number;
    m: number;
    s: number;
  };
}

const Special = styled("p")(() => ({
  fontFamily: `${allura.style.fontFamily} !important` || "auto",
  fontSize: "24px",
  textAlign: "center",
}));

const Title = styled("h1")(() => ({
  color: "#dc9c14",
  lineHeight: "0.75em",
  fontFamily: `${imperialScript.style.fontFamily} !important` || "auto",
  fontSize: "48px",
  textAlign: "center",
  fontWeight: "lighter",
}));

const SubTitle = styled("p")(() => ({
  fontSize: "12px",
  fontWeight: "300",
  fontFamily: `${cormorant.style.fontFamily} !important` || "auto",
  textAlign: "center",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
}));

const Text = styled("p")(() => ({
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
  fontSize: "16px",
  textAlign: "center",
}));

const MiniText = styled("p")(() => ({
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
  fontSize: "14px",
  textAlign: "center",
  letterSpacing: "0.1em",
}));

const UbuntuText = styled("p")(() => ({
  fontFamily: `${ubuntu.style.fontFamily} !important` || "auto",
  fontWeight: "700",
  fontSize: "16px",
  textAlign: "center",
}));

const Layout993: React.FC = () => {
  const router = useRouter();
  const eInviteId = router.query.eInviteId;
  const [countdownTimer, setCountdownTimer] = useState<DateTimeConfig>();
  const { data } = useGetEinvite(eInviteId as string);
  const item = data?.data;
  const listComments = data?.comments && [...data?.comments!].reverse();
  const musicUrl = item?.musicUrl;
  const dateJs = new Date(item?.dateTime!);
  const fullDate = dateJs?.toLocaleString("ms-MY", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  const timeStart = dateJs.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const dayRaw = dateJs.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayText = daysOfWeek[dayRaw];

  const monthRaw = dateJs.getMonth();
  const monthsList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthText = monthsList[monthRaw];
  const dateText = dateJs.getDate();
  const yearText = dateJs.getFullYear();

  const currentDate = new Date().getTime();
  const selectedDate = dateJs.getTime();
  const isCounting = currentDate < selectedDate;
  const countdownTimerParam: DateTimeConfig = useGetCountDownTimer(
    item?.dateTime
  );
  const [musicStart, setMusicStart] = useState(false);

  const [clickOpen, setClickOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownTimer(countdownTimerParam);
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownTimerParam]);

  return (
    <Box
      maxWidth="400px"
      sx={{
        boxShadow: "1px 1px 10px #efefef",
        m: "auto",
        position: "relative",
        overflow: "hidden",
        height: clickOpen ? "100%" : "100vh",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => setMusicStart(true)}
    >
      <Door khairuAmira color="transparent" {...{ clickOpen, setClickOpen }}>
        <Title
          sx={{ fontSize: "24px", textShadow: "1px 1px 10px skyblue" }}
          dangerouslySetInnerHTML={{
            __html: `Khairu Amira`,
          }}
        />
        <Title
          sx={{ fontSize: "24px", display: "block", my: "10px" }}
          dangerouslySetInnerHTML={{
            __html: `&`,
          }}
        />
        <Title
          sx={{ fontSize: "24px", textShadow: "1px 1px 10px skyblue" }}
          dangerouslySetInnerHTML={{
            __html: "Zolkefli",
          }}
        />
        <SubTitle
          sx={{
            marginBottom: "-12px",
            marginTop: "12px",
            fontSize: "8px",
            textAlign: "center",
          }}
          dangerouslySetInnerHTML={{ __html: `Sila Klik` }}
        />
      </Door>
      <Box sx={{ visibility: "hidden", position: "absolute" }}>
        <ReactPlayer
          url={musicUrl}
          playing={musicStart}
          loop={true}
          width="1%"
          height="1%"
          controls={true}
        />
      </Box>
      <Box
        sx={{
          backgroundImage: "url('/media/animation/993-bg.jpg')",
          backgroundSize: "cover",
          height: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            marginTop: "-30px",
            height: "70%",
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "100%",
            }}
          >
            <SubTitle
              sx={{ fontWeight: "bolder" }}
              dangerouslySetInnerHTML={{
                __html: locale?.[item?.language!]?.INTRO_FIRST,
              }}
            />
            <Box
              sx={{
                position: "relative",
                my: 4,
              }}
            >
              <Title dangerouslySetInnerHTML={{ __html: "Khairu Amira" }} />
              <Title
                dangerouslySetInnerHTML={{ __html: "&" }}
                sx={{ my: 2, fontSize: "40px" }}
              />
              <Title dangerouslySetInnerHTML={{ __html: "Zolkefli" }} />
            </Box>
            <SubTitle
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                padding: "0 16px",
              }}
              dangerouslySetInnerHTML={{
                __html: "Teratak Ce'Nor , Shah Alam",
              }}
            />
            <Box display="flex" justifyContent="center" gap={1} my={1}>
              <SubTitle
                sx={{ fontWeight: "lighter", fontSize: "12px" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<b>15 September 2024 <br> Ahad <br> 11pagi - 4petang</b>",
                }}
              />
            </Box>
            <SubTitle
              sx={{
                paddingTop: "16px",
                fontWeight: "lighter",
                fontSize: "12px",
              }}
              dangerouslySetInnerHTML={{
                __html: `<i>"Dan Kami menciptakan kamu <br>berpasang-pasangan"</i><br>78:8`,
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            backgroundImage: "url('/media/animation/993-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            opacity: 0.6,
            position: "absolute",
            display: "block",
            top: 0,
            bottom: "334px",
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: -1,
            transform: "scaleX(-1)", // Flip horizontally
          }}
        />
        <Box
          mx={"auto"}
          sx={{
            pt: 5,
            pb: 4,
            px: 2,
            position: "relative",
          }}
        >
          {/* <Box
            sx={{
              position: "absolute",
              right: "-46px",
              top: "145px",
              opacity: "0.75",
            }}
          >
            <Image
              src="/media/animation/993-image.webp"
              width={120}
              alt="Pulpen Studio"
              height={140}
              style={{ width: "auto", height: "100%" }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              left: "-70px",
              bottom: "-20px",
              opacity: "0.75",
            }}
          >
            <Image
              src="/media/animation/993-image.webp"
              width={120}
              alt="Pulpen Studio"
              height={140}
              style={{ width: "auto", height: "100%" }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              left: "-60px",
              top: "-50px",
              opacity: "0.75",
            }}
          >
            <Image
              src="/media/animation/993-image.webp"
              width={120}
              alt="Pulpen Studio"
              height={140}
              style={{ width: "auto", height: "100%" }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              left: "-60px",
              top: "-20px",
              opacity: "0.75",
            }}
          >
            <Image
              src="/media/animation/993-image.webp"
              width={120}
              alt="Pulpen Studio"
              height={140}
              style={{ width: "auto", height: "100%" }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              left: "-60px",
              top: "20px",
              opacity: "0.75",
            }}
          >
            <Image
              src="/media/animation/993-image.webp"
              width={120}
              alt="Pulpen Studio"
              height={140}
              style={{ width: "auto", height: "100%" }}
            />
          </Box> */}

          <Box sx={{ zIndex: "2" }}>
            <Box textAlign={"center"}>
              <Image
                src="/media/animation/bis-img.png"
                width={200}
                alt="Pulpen Studio"
                height={50}
                style={{ marginBottom: "16px" }}
              />
            </Box>
            <SubTitle
              sx={{ mb: 3 }}
              dangerouslySetInnerHTML={{
                __html: "Assalamualaikum WBT <br> Salam Sejahtera",
              }}
            />
            <SubTitle
              sx={{ fontWeight: "700", mb: 3 }}
              dangerouslySetInnerHTML={{
                __html: "Mohd Sabri bin Hamzah <br>&<br> Rosenani bin Yaakub",
              }}
            />
            <SubTitle
              sx={{ mb: 3, px: 2 }}
              dangerouslySetInnerHTML={{
                __html:
                  "DENGAN PENUH RASA KESYUKURAN KE HADRAT ILAHI KAMI MENJEMPUT DATO' / DATIN' / TUAN' / PUAN' / ENCIK / CIK KE MAJLIS PERKAHWINAN PUTERI KAMI",
              }}
            />
            <SubTitle
              sx={{
                fontWeight: "700",
                mb: 3,
              }}
              dangerouslySetInnerHTML={{
                __html: `Khairu Amira binti Mohd Sabri <br>&<br> ${item?.fullNameGroom}`,
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            textAlign: "center",
            padding: "0 32px",
            mt: 2,
            mb: 4,
            position: "relative",
          }}
        >
          <Box sx={{ display: "inline-flex" }}>
            <SubTitle
              sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
              dangerouslySetInnerHTML={{
                __html: "<b>11am - 4pm</b>",
              }}
            />
            <SubTitle
              sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
              dangerouslySetInnerHTML={{
                __html: "Jamuan Makan",
              }}
            />
          </Box>
          <Box sx={{ display: "inline-flex" }}>
            <SubTitle
              sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
              dangerouslySetInnerHTML={{
                __html: "<b>12.30pm</b>",
              }}
            />
            <SubTitle
              sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
              dangerouslySetInnerHTML={{
                __html: "Ketibaan Pengantin",
              }}
            />
          </Box>
          <Box sx={{ display: "inline-flex" }}>
            <SubTitle
              sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
              dangerouslySetInnerHTML={{
                __html: "Tema : Busana Orang Kampung",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            px: 2,
            py: 4,
            position: "relative",
          }}
        >
          {/* <Box
            sx={{
              position: "absolute",
              left: "-58px",
              top: "0",
              opacity: "0.8",
              transform: "rotate(20deg)",
            }}
          >
            <Image
              src="/media/animation/layout-993-gif.gif"
              width={140}
              alt="Pulpen Studio"
              height={180}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              right: "-58px",
              top: "0",
              opacity: "0.8",
              transform: "rotate(20deg) scaleY(-1)",
            }}
          >
            <Image
              src="/media/animation/layout-993-gif.gif"
              width={140}
              alt="Pulpen Studio"
              height={180}
            />
          </Box> */}
          <SubTitle
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_COUNTDOWN_TITLE,
            }}
            sx={{ pb: 2, fontWeight: "bold" }}
          />
          {!isCounting ? (
            <Box
              id="countdown"
              columnGap={2}
              sx={{
                mx: "auto",
                width: "fit-content",
              }}
            >
              <SubTitle
                dangerouslySetInnerHTML={{
                  __html: locale?.[item?.language!]?.CARD_COUNTDOWN_FINISH_TEXT,
                }}
              />
            </Box>
          ) : (
            <Box
              id="countdown"
              columnGap={2}
              sx={{
                boxShadow: "1px 10px 10px -10px #dc9c14",
                pb: 1,
                width: "fit-content",
                mx: "auto",
                display: "flex",
              }}
            >
              <Box>
                <Text
                  style={{ fontSize: "48px" }}
                  dangerouslySetInnerHTML={{
                    __html: `${countdownTimer?.countdownTimer.d} `,
                  }}
                />
              </Box>
              <Box>
                <Text
                  style={{ fontSize: "24px" }}
                  dangerouslySetInnerHTML={{
                    __html: `${
                      countdownTimer?.countdownTimer.h
                    } <span style="font-size: 12px">${
                      locale?.[item?.language!]?.COUNTDOWN_HOUR
                    }</span>`,
                  }}
                />
                <Text
                  style={{ fontSize: "24px" }}
                  dangerouslySetInnerHTML={{
                    __html: `${
                      countdownTimer?.countdownTimer.m
                    } <span style="font-size: 12px">${
                      locale?.[item?.language!]?.COUNTDOWN_MINUTE
                    }</span>`,
                  }}
                />
              </Box>
              <Box>
                <Text
                  style={{ fontSize: "48px", color: "#dc9c14", width: "50px" }}
                  dangerouslySetInnerHTML={{
                    __html: `${countdownTimer?.countdownTimer.s} `,
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
        <Box
          id="comment"
          mb={2}
          sx={{
            px: 2,
            pt: 4,
            pb: 10,
          }}
        >
          <SubTitle
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_WISH_TITLE,
            }}
            sx={{ pb: 2, fontWeight: "bold" }}
          />
          <SubTitle
            dangerouslySetInnerHTML={{
              __html: "#ATOZLOVESTORY",
            }}
            sx={{ pb: 2, fontWeight: "bold" }}
          />
          <Grid container>
            <Grid item py={2} xs={12}>
              <Paper
                sx={{
                  background: "#FFF",
                  boxShadow: "unset",
                  height: "100%",
                  maxHeight: "400px",
                  overflow: "scroll",
                }}
              >
                <List sx={{ p: 0, mb: 4 }}>
                  {/* @ts-ignore */}
                  {listComments?.map((comment: any, idx: string) => (
                    <CommentList
                      {...{ comment, idx }}
                      key={idx}
                      bgColor="#fff"
                      textColor="#5a0819"
                    />
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box>
        <Widget
          includePhoneNumber={true}
          includeOrigin={false}
          language={item?.language!}
          iconColor="#635949"
          color="#ffeeda"
          location={{ text: item?.location!, mapUrl: item?.mapUrl! }}
          contact={{
            number1: item?.phonePerson1!,
            number2: item?.phonePerson2!,
            name1: item?.namePerson1!,
            name2: item?.namePerson2!,
          }}
        />
      </Box>
    </Box>
  );
};

export default Layout993;
