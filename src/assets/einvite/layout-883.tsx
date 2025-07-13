// Qayyum & Amirah card

import { Box, Grid, List, Paper, styled } from "@mui/material";
import {
  Playfair_Display,
  Antic_Didone,
  Bellefair
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
import Head from "next/head";

const bellefair = Bellefair({
  subsets: ['latin'],
  weight: '400',
});
const anticDidone = Antic_Didone({
  subsets: ['latin'],
  weight: '400',
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface DateTimeConfig {
  countdownTimer: {
    d: number;
    h: number;
    m: number;
    s: number;
  };
}

const MainTitle = styled("h1")(() => ({
  fontSize: "22px",
  fontWeight: "300",
  fontFamily: `${anticDidone.style.fontFamily} !important` || "auto",
  textAlign: "center",
  letterSpacing: "0.2em",
  color: "#c7ad7e",
}));

const Title = styled("h1")(() => ({
  lineHeight: "0.75em",
  fontFamily: `${bellefair.style.fontFamily} !important` || "auto",
  fontSize: "40px",
  textAlign: "center",
  fontWeight: "lighter",
  color: "#c7ad7e",
  letterSpacing: "0.2em",
}));

const SubTitle = styled("p")(() => ({
  fontSize: "14px",
  fontWeight: "300",
  fontFamily: `${bellefair.style.fontFamily} !important` || "auto",
  textAlign: "center",
  letterSpacing: "0.2em",
  color: "#c7ad7e",
}));

const Text = styled("p")(() => ({
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
  fontSize: "16px",
  textAlign: "center",
  color: "#c7ad7e",
}));

const Layout883: React.FC = () => {
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
    <>
    <Head>
  <title>Wedding of Qayyum & Amirah</title>

  {/* Override Open Graph tags */}
  <meta property="og:title" content="Qayyum & Amirah's Wedding Invitation" />
  <meta
    property="og:description"
    content="Join us to celebrate the wedding of Qayyum & Amirah. Tap to view the invitation."
  />
  <meta
    property="og:image"
    content="https://www.pulpenstudio.com/media/qayyum-amirah/og-preview.jpg"
  />
  <meta
    property="og:url"
    content="https://www.pulpenstudio.com/e-invite/live/wedding-of-qayyum-and-amirah"
  />
  <meta property="og:type" content="website" />

  {/* Optional: Twitter card override */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Qayyum & Amirah's Wedding Invitation" />
  <meta
    name="twitter:description"
    content="Join us to celebrate the wedding of Qayyum & Amirah. Tap to view the invitation."
  />
  <meta
    name="twitter:image"
    content="https://www.pulpenstudio.com/media/qayyum-amirah/og-preview.jpg"
  />
</Head>
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
      <Door forQayyum color="#FFF" {...{ clickOpen, setClickOpen }}>
        <Image
          src="/media/qayyum-amirah/883-qa-logo.png"
          alt="Pulpen Studio"
          width={220}
          height={220}
          style={{ width: "50%", height: "auto" }}
        />
        <Text
          sx={{
            marginBottom: "-12px",
            marginTop: "-12px",
            fontSize: "12px",
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
          backgroundImage: 'url("/media/qayyum-amirah/883-main-bg.png")',
          height: "100vh",
          position: "relative",
          display: clickOpen ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{
          border: "1px solid #c7ad7e",
          position: "absolute",
          height: "94%",
          width: "90%",
        }} />
        <Box sx={{
          color: "#c7ad7e", textAlign: "center"
        }}>

          <Box position="relative" width="100%" height="100%">
            <Image
              src="/media/qayyum-amirah/883-ornament.webp"
              alt="Pulpen Studio"
              height={400}
              width={100}
              style={{ width: "100%", height: "100%" }}
              className="animate__animated animate__fadeIn animate__delay-1s animate__slower"
            />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              sx={{
                transform: "translate(-50%, -44%)",
                width: "45%",
              }}
            >
              <Image
                src="/media/qayyum-amirah/883-qa-logo.png"
                alt="Pulpen Studio"
                width={400}
                height={400}
                style={{ width: "100%", height: "auto" }}
                className="animate__animated animate__fadeIn animate__delay-1s animate__slower"
              />
            </Box>
          </Box>

          <Title className="animate__animated animate__fadeIn animate__delay-2s animate__slower"
            sx={{ fontSize: { xs: "14px", md: "16px" }, mt: 2 }} dangerouslySetInnerHTML={{ __html: "MAHLIGAI KASIH" }} />
          <Box sx={{ my: 3 }}>
            <MainTitle className="animate__animated animate__fadeIn animate__delay-3s animate__slower" sx={{ fontWeight: "700" }} dangerouslySetInnerHTML={{ __html: "QAYYUM & AMIRAH" }} />
          </Box>
          <Title id="delay-5s" className={bellefair.className} sx={{ fontSize: { xs: "14px", md: "16px" } }} dangerouslySetInnerHTML={{ __html: "20 . 09 . 2025" }} />
          <Title id="delay-6s" sx={{ fontSize: { xs: "14px", md: "16px" }, mt: 1 }} dangerouslySetInnerHTML={{ __html: "SABTU" }} />
          <Title id="delay-7s" sx={{ fontSize: { xs: "14px", md: "16px" }, mt: 3, lineHeight: "1.045em" }} dangerouslySetInnerHTML={{ __html: "SEKAMAT GRAND PALACE" }} />
        </Box>

      </Box>


      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "100%",
          backgroundImage: 'url("/media/qayyum-amirah/883-main-bg.png")',
          overflow: "auto",
          color: "#FFF"
        }}
      >
        <Box
          mx={"auto"}
          sx={{
            pt: 7,
            // pb: 4,
            px: 2,
            position: "relative",
          }}
        >
          <Box dir="rtl" textAlign="center" fontSize="22px" fontFamily="'Amiri Quran', sans-serif" color="#B79B64">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </Box>
          <Box>
            <SubTitle
              sx={{ mb: 3, mt: 3 }}
              dangerouslySetInnerHTML={{
                __html: "Assalamualaikum & Salam Sejahtera",
              }}
            />
            <SubTitle
              sx={{ mb: 3 }}
              dangerouslySetInnerHTML={{
                __html:
                  "Mengarak bunga rampai bertabur harum,<br>Mengiringi restu dari segenap penjuru,<br>Kami,",
              }}
            />
            <SubTitle
              sx={{ mb: 3, lineHeight: "1.5em", fontWeight: "700" }}
              dangerouslySetInnerHTML={{
                __html: `AHMAD TAQUWA<br>&<br>NOR FAIZAH</span>`,
              }}
            />
            <SubTitle
              sx={{ mb: 3 }}
              dangerouslySetInnerHTML={{
                __html:
                  "Menjemput dengan penuh adab dan kasih,<br>Dato’, Datin, Tuan, Puan, Encik & Cik<br>ke majlis perkahwinan putera kami,",
              }}
            />
          </Box>
        </Box>


        <SubTitle
          sx={{ mb: 3, lineHeight: "1.5em", fontWeight: "700" }}
          dangerouslySetInnerHTML={{
            __html: `QAYYUM<br>&<br>AMIRAH</span>`,
          }}
        />

        <SubTitle
          dangerouslySetInnerHTML={{
            __html:
              "Semoga Qayyum & Amirah berjaya dan<br>bahagia di dunia akhirat",
          }}
        />

        <Box
          sx={{
            textAlign: "center",
            padding: "0 32px",
            mt: 2,
            mb: 4,
            position: "relative",
          }}
        >
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
            sx={{ pb: 2 }}
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
          // showGift={true}
          // giftImage={"/media/alif-natasha/alif-qr.jpeg"}
          includePhoneNumber={true}
          includeOrigin={false}
          language={item?.language!}
          textInsideColor="#121212"
          iconColor="#B79B64"
          color="rgba(0, 0, 0, 0.4)"
          location={{ text: "Sekamat Grand Palace Event Hall, Jalan Sungai Sekamat, Kampung Sungai Sekamat, 43000 Kajang, Selangor", mapUrl: item?.mapUrl! }}
          contact={{
            number1: "0126169632",
            number2: "0122703717",
            name1: "En Taquwa (Ayah)",
            name2: "Puan Faizah (Ibu)",
          }}
        />
      </Box>
    </Box>
    </>
  );
};

export default Layout883;
