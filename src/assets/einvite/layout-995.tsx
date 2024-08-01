// Aiman Aina

import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Allura,
  Cormorant_SC,
  Ephesis,
  Imperial_Script,
  Oooh_Baby,
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
  textShadow: "1px 1px 10px",
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

const Layout995: React.FC = () => {
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
        backgroundImage: "url('/media/animation/layout-995-bg.png')",
        backgroundSize: "cover",
        boxShadow: "1px 1px 10px #5e4463",
        m: "auto",
        position: "relative",
        overflow: "hidden",
        height: clickOpen ? "100%" : "100vh",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => setMusicStart(true)}
    >
      <Door
        color="transparent"
        {...{ clickOpen, setClickOpen }}
        specialBg={true}
      >
        <Title
          sx={{ fontSize: "24px", textShadow: "1px 1px 10px skyblue" }}
          dangerouslySetInnerHTML={{
            __html: `Klik untuk buka`,
          }}
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

      <Box sx={{ display: clickOpen ? "block" : "none" }}>
        <Image
          src="/media/animation/aiman-1.jpeg"
          alt="Aiman Hafiz"
          width={400}
          height={600}
          style={{ display: "block" }}
        />
        <Image
          src="/media/animation/aiman-2.jpeg"
          alt="Aiman Hafiz"
          width={400}
          height={600}
          style={{ display: "block" }}
        />
      </Box>
      <Box
        sx={{
          px: 2,
          py: 4,
          position: "relative",
        }}
      >
        <SubTitle
          dangerouslySetInnerHTML={{
            __html: locale?.[item?.language!]?.CARD_COUNTDOWN_TITLE,
          }}
          sx={{ pb: 2, fontWeight: "bold", color: "#e1c1a6" }}
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
              boxShadow: "1px 10px 10px -10px #e1c1a6",
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
                style={{ fontSize: "48px", color: "#e1c1a6", width: "50px" }}
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
          sx={{ pb: 2, fontWeight: "bold", color: "#e1c1a6" }}
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

      <Box>
        <Widget
          includePhoneNumber={true}
          includeOrigin={false}
          language={item?.language!}
          iconColor="#e1c1a6"
          color="#684f6f"
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

export default Layout995;
