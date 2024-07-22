// OPENDAY TERATAK CENOR DRENJIS

import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Allura,
  Cormorant_SC,
  Ephesis,
  Imperial_Script,
  Montserrat,
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
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "500"],
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
  fontFamily: `${montserrat.style.fontFamily} !important` || "auto",
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

const Layout994: React.FC = () => {
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
      <Door removePadding color="#FFF" {...{ clickOpen, setClickOpen }}>
        <Image
          src="/media/animation/teratak-cenor.webp"
          width={180}
          alt={"Teratak Ce'Nor"}
          height={180}
        />
      </Door>
      <Box sx={{ visibility: "hidden", position: "absolute" }}>
        <ReactPlayer
          url={musicUrl}
          playing={musicStart}
          loop={true}
          width="1%"
          height="1%"
          controls={false}
        />
      </Box>

      <Box sx={{ display: clickOpen ? "block" : "none", position: "relative" }}>
        <Box
          className="animate__animated animate__zoomIn animate__slow"
          sx={{
            position: "absolute",
            left: "-125px",
            top: "20px",
            zIndex: "2",
          }}
        >
          <Image
            src={`/media/animation/coconut-tree.webp`}
            width={180}
            alt="Teratak Ce'Nor"
            height={200}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>
        <Box
          className="animate__animated animate__zoomIn animate__slow"
          sx={{
            position: "absolute",
            left: "-60px",
            bottom: "20px",
            zIndex: "2",
          }}
        >
          <Image
            src={`/media/animation/coconut-tree.webp`}
            width={180}
            alt="Teratak Ce'Nor"
            height={200}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>
        <Box
          className="animate__animated animate__zoomIn animate__slow"
          sx={{
            position: "absolute",
            right: "-105px",
            top: "600px",
            transform: "scaleX(-1)",
          }}
        >
          <Image
            src={`/media/animation/coconut-tree.webp`}
            width={180}
            alt="Teratak Ce'Nor"
            height={200}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Box>
        <Box>
          <Image
            src={`/media/animation/tc-1.png`}
            width={400}
            alt="Teratak Ce'Nor"
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Box>
        <Box>
          <Image
            src={`/media/animation/tc-2.png`}
            width={400}
            alt="Teratak Ce'Nor"
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Box>
      </Box>

      <Box>
        <Widget
          hideEdit
          hidePhoneNumber
          hideBoxShadow
          hideRsvp
          includeOrigin={false}
          language={item?.language!}
          iconColor="#333"
          color="#f2e6da"
          location={{ text: "Teratak Ce'Nor", mapUrl: item?.mapUrl! }}
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

export default Layout994;
