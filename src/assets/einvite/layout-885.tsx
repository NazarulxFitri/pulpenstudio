// Alif Nathasya

import { Box, Grid, List, Paper, styled } from "@mui/material";
import {
  Allura,
  Corinthia,
  Cormorant_SC,
  Imperial_Script,
  Playfair_Display,
  Poppins,
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
const coronthia = Corinthia({ subsets: ["latin"], weight: ["400", "700"] });
const imperialScript = Imperial_Script({ subsets: ["latin"], weight: ["400"] });
const cormorant = Cormorant_SC({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
const poppin = Poppins({ subsets: ["latin"], weight: ["300", "500", "700"] });

interface DateTimeConfig {
  countdownTimer: {
    d: number;
    h: number;
    m: number;
    s: number;
  };
}

const Special = styled("p")(() => ({
  fontFamily: `${coronthia.style.fontFamily} !important` || "auto",
  fontSize: "56px",
  textAlign: "center",
}));

const Title = styled("h1")(() => ({
  lineHeight: "0.75em",
  fontFamily: `${cormorant.style.fontFamily} !important` || "auto",
  fontSize: "40px",
  textAlign: "center",
  fontWeight: "lighter",
}));

const SubTitle = styled("p")(() => ({
  fontSize: "12px",
  fontWeight: "300",
  fontFamily: `${poppin.style.fontFamily} !important` || "auto",
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

const Layout885: React.FC = () => {
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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        // adjust this value as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <Door color="#FFF" {...{ clickOpen, setClickOpen }}>
        <Title
          sx={{ fontSize: "24px", textShadow: "1px 1px 10px #efefef" }}
          dangerouslySetInnerHTML={{
            __html: `<span>A</span>lif`,
          }}
        />
        <Title
          sx={{ fontSize: "24px", display: "block", my: "10px" }}
          dangerouslySetInnerHTML={{
            __html: `&`,
          }}
        />
        <Title
          sx={{ fontSize: "24px", textShadow: "1px 1px 10px #efefef" }}
          dangerouslySetInnerHTML={{
            __html: `<span">N</span>athasya`,
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
          background: "#121212",
          height: "100vh",
          position: "relative",
          display: clickOpen ? "block" : "none",
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url("/media/alif-natasha/background.png")',
            height: "100%",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: "0.04",
            mt: -2,
            mr: -2
          }}
        />
        <Box sx={{ position: "absolute", top: "0", right: { xs: "-104px", sm: "-60px", md: "-50px" } }}>
          <Image
            src="/media/alif-natasha/9368-removebg-preview.png"
            alt="Pulpen Studio"
            height={400}
            width={100}
            style={{ width: "100%", height: "100vh" }}
          />
        </Box>

        <Box sx={{ position: "absolute", top: "26%", left: "5%", color: "#FFF" }}>
          <Title id="delay-4s"
            sx={{ textAlign: "left", fontSize: "16px", letterSpacing: "0.15em", color: "gold" }} dangerouslySetInnerHTML={{ __html: "THE WEDDING OF" }} />
          <Box sx={{ my: 6 }}>
            <Title className="animate__animated animate__fadeIn animate__delay-1s animate__slower" sx={{ textAlign: "left" }} dangerouslySetInnerHTML={{ __html: "<span style='color: gold;'>A</span>lif Asyraf" }} />
            <Title className="animate__animated animate__fadeIn animate__delay-1s animate__slower" sx={{ fontSize: "24px", textAlign: "left", my: "4px", mx: "16px" }} dangerouslySetInnerHTML={{ __html: "&" }} />
            <Title className="animate__animated animate__fadeIn animate__delay-1s animate__slower" sx={{ textAlign: "left" }} dangerouslySetInnerHTML={{ __html: "Nor <span style='color: gold;'>N</span>athasya" }} />
          </Box>
          <Title id="delay-5s" sx={{ textAlign: "left", fontSize: "16px", letterSpacing: "0.15em" }} dangerouslySetInnerHTML={{ __html: "14 . 06 . 2025" }} />
          <Title id="delay-6s" sx={{ textAlign: "left", fontSize: "16px", letterSpacing: "0.15em", mt: 1.5 }} dangerouslySetInnerHTML={{ __html: "8pm - 11pm" }} />
          <Title id="delay-7s" sx={{ textAlign: "left", fontSize: "16px", letterSpacing: "0.15em", mt: 1.5, maxWidth: "260px", lineHeight: "1.045em" }} dangerouslySetInnerHTML={{ __html: "391, Jalan Batik 1/7, Taman Batik, 08000 Sungai Petani, Kedah" }} />

          <Title id="delay-8s" sx={{ textAlign: "left", fontSize: "16px", letterSpacing: "0.15em", mt: 4, color: "gold" }} dangerouslySetInnerHTML={{ __html: "#ALIFeBeginsWithNathasya" }} />
        </Box>

      </Box>


      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "100%",
          backgroundColor: "#121212",
          overflow: "hidden",
          color: "#FFF"
        }}
      >
        {/* Background image with opacity */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            mt: -2.2,
            width: "100%",
            backgroundImage: 'url("/media/alif-natasha/background.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0.04,
            zIndex: 0,
          }}
        />


        <Box
          mx={"auto"}
          sx={{
            pt: 7,
            pb: 4,
            px: 2,
            position: "relative",
          }}
        >
          <Box sx={{ zIndex: "2" }}>
            <SubTitle
              sx={{ mb: 3, mt: 3 }}
              dangerouslySetInnerHTML={{
                __html: "Assalamualaikum WBT <br> Salam Sejahtera",
              }}
            />
            <SubTitle
              sx={{ fontWeight: "700", mb: 3 }}
              dangerouslySetInnerHTML={{
                __html:
                  "Mohd Nasruddin Awang Kechik & Nafishah Inson",
              }}
            />
            <SubTitle
              sx={{ mb: 3, px: 2 }}
              dangerouslySetInnerHTML={{
                __html:
                  "DENGAN PENUH RASA KESYUKURAN KE HADRAT ILAHI KAMI MENJEMPUT DATO' / DATIN' / TUAN' / PUAN' / ENCIK / CIK KE MAJLIS PERKAHWINAN PUTERA KAMI",
              }}
            />
            <SubTitle
              sx={{
                fontWeight: "700",
                mb: 3,
              }}
              dangerouslySetInnerHTML={{
                __html: `<span style='color: gold'>Muhammad Alif Asyraf bin Badrulhisham</span><br>&<br><span style='color: gold'>Nor Nathasya Syaqila binti Noor Iskhandar</span>`,
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
              sx={{ fontSize: "12px", my: 0.5, textAlign: "left", color: "gold" }}
              dangerouslySetInnerHTML={{
                __html: "Atur Cara Majlis",
              }}
            />
          </Box>
          <Box sx={{ display: "block" }}>
            <SubTitle
              sx={{ fontSize: "12px", my: 0.5, textAlign: "center" }}
              dangerouslySetInnerHTML={{
                __html: "14 . 06 . 2025",
              }}
            />
          </Box>
          <Box sx={{ display: "inline-flex" }}>
            <SubTitle
              sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
              dangerouslySetInnerHTML={{
                __html: "<b>8.00pm - 11.00pm</b>",
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
                __html: "<b>8.30pm</b>",
              }}
            />
            <SubTitle
              sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
              dangerouslySetInnerHTML={{
                __html: "Ketibaan Pengantin",
              }}
            />
          </Box>

          <Box sx={{ mt: 4 }}>
            <SubTitle
              sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2, color: "gold" }}
              dangerouslySetInnerHTML={{
                __html: "Lokasi",
              }}
            />
            <SubTitle
              sx={{ fontSize: "12px", my: 0.5, textAlign: "center" }}
              dangerouslySetInnerHTML={{
                __html: "391, Jalan Batik 1/7, Taman Batik, 08000 Sungai Petani, Kedah",
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
                    __html: `${countdownTimer?.countdownTimer.h
                      } <span style="font-size: 12px">${locale?.[item?.language!]?.COUNTDOWN_HOUR
                      }</span>`,
                  }}
                />
                <Text
                  style={{ fontSize: "24px" }}
                  dangerouslySetInnerHTML={{
                    __html: `${countdownTimer?.countdownTimer.m
                      } <span style="font-size: 12px">${locale?.[item?.language!]?.COUNTDOWN_MINUTE
                      }</span>`,
                  }}
                />
              </Box>
              <Box>
                <Text
                  style={{ fontSize: "48px", width: "50px" }}
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
            sx={{ pb: 2, fontSize: "12px" }}
          />
          <Title
            dangerouslySetInnerHTML={{
              __html: "#ALIFeBeginsWithNathasya",
            }}
            sx={{ pb: 2, fontSize: "14px" }}
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
                      textColor="#121212"
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
          showGift
          giftImage={"/media/alif-natasha/alif-qr.jpeg"}
          includePhoneNumber={true}
          includeOrigin={false}
          language={item?.language!}
          textInsideColor="#121212"
          iconColor="#efefef"
          color="#1b1b1b"
          location={{ text: "391, Jalan Batik 1/7, Taman Batik, 08000 Sungai Petani, Kedah", mapUrl: item?.mapUrl! }}
          contact={{
            number1: "0176715337",
            number2: "0173144726",
            number3: "0194104233",
            name1: "Nafishah Inson",
            name2: "Aida Nabila",
            name3: "Nasruddin",
          }}
        />
      </Box>
    </Box>
  );
};

export default Layout885;
