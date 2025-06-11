// Qayyum & Amirah

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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';

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
  fontFamily: `${cormorant.style.fontFamily} !important` || "auto",
  textAlign: "center",
  letterSpacing: "0.25em",
  color: "#B79B64",
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

  const listImages = [
    {
      path: "/media/alif-natasha/alif-1.jpeg"
    },
    {
      path: "/media/alif-natasha/alif-2.jpeg"
    },
    {
      path: "/media/alif-natasha/alif-3.jpeg"
    },
    {
      path: "/media/alif-natasha/alif-4.jpeg"
    },
    {
      path: "/media/alif-natasha/alif-5.jpeg"
    },
    {
      path: "/media/alif-natasha/alif-6.jpeg"
    },
    {
      path: "/media/alif-natasha/alif-7.jpeg"
    },
    {
      path: "/media/alif-natasha/alif-8.jpeg"
    },
    {
      path: "/media/alif-natasha/alif-9.jpeg"
    }
  ]

  return (
    <Box
      maxWidth="400px"
      sx={{
        boxShadow: "1px 1px 10px #efefef",
        m: "auto",
        position: "relative",
        // overflow: "hidden",
        height: clickOpen ? "100%" : "100vh",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => setMusicStart(true)}
    >
      <Door color="#FFF" {...{ clickOpen, setClickOpen }}>
        <Title
          sx={{ fontSize: "24px", textShadow: "1px 1px 10px #efefef" }}
          dangerouslySetInnerHTML={{
            __html: `<span>Q</span>ayyum`,
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
            __html: `<span">A</span>mirah`,
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
          backgroundImage: 'url("/media/qayyum-amirah/883-main-bg.png")',
          height: "100vh",
          position: "relative",
          display: clickOpen ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{
          border: "1px solid #B79B64",
          position: "absolute",
          height: "94%",
          width: "90%",
        }} />
        <Box sx={{ color: "#B79B64", textAlign: "center" }}>
          <Image
            src="/media/qayyum-amirah/883-ornament.webp"
            alt="Pulpen Studio"
            height={400}
            width={100}
            style={{ width: "100%", height: "100%" }}
            className="animate__animated animate__fadeIn animate__delay-1s animate__slower"
          />
          <Title className="animate__animated animate__fadeIn animate__delay-2s animate__slower"
            sx={{ fontSize: { xs: "14px", md: "16px" } }} dangerouslySetInnerHTML={{ __html: "MAHLIGAI KASIH" }} />
          <Box sx={{ my: 3 }}>
            <Title className="animate__animated animate__fadeIn animate__delay-3s animate__slower" sx={{ fontSize: { xs: "34px", md: "40px" } }} dangerouslySetInnerHTML={{ __html: "Qayyum & Amirah" }} />
          </Box>
          <Title id="delay-5s" sx={{ fontSize: { xs: "14px", md: "16px" }, letterSpacing: "0.15em" }} dangerouslySetInnerHTML={{ __html: "20 . 09 . 2025" }} />
          <Title id="delay-6s" sx={{ fontSize: { xs: "14px", md: "16px" }, letterSpacing: "0.15em", mt: 1 }} dangerouslySetInnerHTML={{ __html: "SABTU" }} />
          <Title id="delay-7s" sx={{ fontSize: { xs: "14px", md: "16px" }, letterSpacing: "0.15em", mt: 3, lineHeight: "1.045em" }} dangerouslySetInnerHTML={{ __html: "SEKAMAT GRAND PALACE" }} />
          <Title id="delay-7s" sx={{ fontSize: { xs: "14px", md: "16px" }, letterSpacing: "0.15em", mt: 1, lineHeight: "1.045em" }} dangerouslySetInnerHTML={{ __html: "JLN. SG. SEKAMAT" }} />
          <Title id="delay-7s" sx={{ fontSize: { xs: "14px", md: "16px" }, letterSpacing: "0.15em", mt: 1, lineHeight: "1.045em" }} dangerouslySetInnerHTML={{ __html: "KG. SEKAMAT, 43000 KAJANG," }} />
          <Title id="delay-7s" sx={{ fontSize: { xs: "14px", md: "16px" }, letterSpacing: "0.15em", mt: 1, lineHeight: "1.045em" }} dangerouslySetInnerHTML={{ __html: "SELANGOR" }} />
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
            pb: 4,
            px: 2,
            position: "relative",
          }}
        >
          <Box sx={{ zIndex: "2" }}>
            <SubTitle
              sx={{ mb: 3, mt: 3 }}
              dangerouslySetInnerHTML={{
                __html: "Assalamualaikum & Salam Sejahtera",
              }}
            />
            <SubTitle
              sx={{ mb: 3, px: 2 }}
              dangerouslySetInnerHTML={{
                __html:
                  "Mengarak bunga rampai bertabur harum, Mengiringi restu dari segenap penjuru, Kami,",
              }}
            />
            <SubTitle
              sx={{
                fontWeight: "700",
                mb: 3,
              }}
              dangerouslySetInnerHTML={{
                __html: `AHMAD TAQUWA<br>&<br>NOR FAIZAH</span>`,
              }}
            />
          </Box>
        </Box>
        <SubTitle
          sx={{ mb: 3, px: 2 }}
          dangerouslySetInnerHTML={{
            __html:
              "Mengarak bunga rampai bertabur harum, Mengiringi restu dari segenap penjuru, Kami,",
          }}
        />

        <SubTitle
          sx={{
            fontWeight: "700",
            mb: 3,
          }}
          dangerouslySetInnerHTML={{
            __html: `AHMAD TAQUWA<br>&<br>NOR FAIZAH</span>`,
          }}
        />

        <SubTitle
          sx={{ mb: 3, px: 2 }}
          dangerouslySetInnerHTML={{
            __html:
              "Semoga Qayyum & Amirah berjaya dan bahagia di dunia akhirat",
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
          hideRsvp
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

export default Layout883;
