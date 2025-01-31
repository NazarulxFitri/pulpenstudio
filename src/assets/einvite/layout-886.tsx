// Aisyah

import { Box, Grid, List, Paper, styled } from "@mui/material";
import {
  Allura,
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
const allura = Allura({ subsets: ["latin"], weight: ["400"] });
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
  fontFamily: `${allura.style.fontFamily} !important` || "auto",
  fontSize: "24px",
  textAlign: "center",
}));

const Title = styled("h1")(() => ({
  lineHeight: "1.15em",
  fontFamily: `${cormorant.style.fontFamily} !important` || "auto",
  fontSize: "48px",
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

const Layout886: React.FC = () => {
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
      <Door lailyDinie color="transparent" {...{ clickOpen, setClickOpen }}>
        <Title
          sx={{ fontSize: "24px", textShadow: "1px 1px 10px skyblue" }}
          dangerouslySetInnerHTML={{
            __html: `<span style="color: #ee7f97">L</span>aily`,
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
            __html: `<span style="color: #ee7f97">D</span>inie`,
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
          // url={"https://www.youtube.com/watch?v=Qe2G6Vs1V_Q&t=20s"}
          playing={musicStart}
          loop={true}
          width="1%"
          height="1%"
          controls={true}
        />
      </Box>
      <Box
        sx={{
          height: "100vh",
          position: "relative",
          display: clickOpen ? "block" : "none",
        }}
      >
        <Box sx={{ position: "absolute", left: "50%", transform: "translate(-50%)", top: "16px" }}>
          <Image src="/media/animation/ribbon.png" alt="Laily Dinie" width={50} height={80} style={{ height: "100%", width: "auto" }} />
        </Box>

        <Box sx={{ position: "absolute", left: "0", bottom: "500px" }}>
          <Image src="/media/animation/flower-bottom.jpg" alt="Laily Dinie" width={120} height={900} style={{ height: "100%", width: "auto", transform: "scaleX(-1)" }} />
        </Box>
        <Box sx={{ position: "absolute", left: "0", bottom: "300px" }}>
          <Image src="/media/animation/flower-bottom.jpg" alt="Laily Dinie" width={120} height={900} style={{ height: "100%", width: "auto", transform: "scaleX(-1)" }} />
        </Box>
        <Box sx={{ position: "absolute", left: "0", bottom: "100px" }}>
          <Image src="/media/animation/flower-bottom.jpg" alt="Laily Dinie" width={120} height={900} style={{ height: "100%", width: "auto", transform: "scaleX(-1)" }} />
        </Box>

        <Box sx={{ position: "absolute", bottom: "-68px", left: "0", transform: "rotate(285deg)" }}>
          <Image src="/media/animation/flower-bottom.jpg" alt="Laily Dinie" width={160} height={900} style={{ height: "auto", transform: "scaleX(-1)" }} />
        </Box>
        <Box sx={{ position: "absolute", bottom: "-118px", right: "0", transform: "rotate(285deg)" }}>
          <Image src="/media/animation/flower-bottom.jpg" alt="Laily Dinie" width={160} height={900} style={{ height: "auto", transform: "scaleY(-1)" }} />
        </Box>

        <Box sx={{ position: "absolute", right: "0", bottom: "500px" }}>
          <Image src="/media/animation/flower-bottom.jpg" alt="Laily Dinie" width={120} height={900} style={{ height: "100%", width: "auto" }} />
        </Box>
        <Box sx={{ position: "absolute", right: "0", bottom: "300px" }}>
          <Image src="/media/animation/flower-bottom.jpg" alt="Laily Dinie" width={120} height={900} style={{ height: "100%", width: "auto" }} />
        </Box>
        <Box sx={{ position: "absolute", right: "0", bottom: "100px" }}>
          <Image src="/media/animation/flower-bottom.jpg" alt="Laily Dinie" width={120} height={900} style={{ height: "100%", width: "auto" }} />
        </Box>

        <Box sx={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", opacity: "0.1", width: "280px" }}>
          <Image src="/media/animation/LD.jpg" alt="Laily Dinie" width={800} height={800} style={{ height: "auto", width: "100%" }} />
        </Box>


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
            <Title
              className="animate__animated animate__fadeIn animate__delay-1s animate__slower"
              sx={{ fontSize: "16px" }}
              dangerouslySetInnerHTML={{
                __html: "Majlis Perkahwinan",
              }}
            />
            <Box
              className="animate__animated animate__fadeIn animate__delay-2s animate__slower"
              sx={{
                position: "relative",
                my: 5,
              }}
            >
              <Title
                className={scrolled ? "scrolled" : ""}
                style={{ transition: "color 0.5s ease", marginLeft: "-40px" }}
                dangerouslySetInnerHTML={{
                  __html: `<span style="color: #ee7f97">L</span>aily`,
                }}
              />
              <Title
                dangerouslySetInnerHTML={{ __html: "dan" }}
                sx={{ my: 2, fontSize: "16px" }}
              />
              <Title
                className={scrolled ? "scrolled" : ""}
                style={{ transition: "color 0.5s ease", marginRight: "-40px" }}
                dangerouslySetInnerHTML={{
                  __html: `<span style="color: #ee7f97">D</span>inie`,
                }}
              />
            </Box>
            <Title
              className="animate__animated animate__fadeIn animate__delay-3s animate__slower"
              sx={{
                fontSize: "16px",
                padding: "0 16px",
                lineHeight: "1.25em"
              }}
              dangerouslySetInnerHTML={{
                __html: "Sebening Embun <br />Garden Event Hall",
              }}
            />
            <Box
              justifyContent="center"
              gap={1}
              my={1}
              className="animate__animated animate__fadeIn animate__delay-3s animate__slower"
            >
              <Box mt={3}>
                <Title
                  sx={{ fontSize: "16px" }}
                  dangerouslySetInnerHTML={{
                    __html: "Sabtu",
                  }}
                />
              </Box>
              <Box mt={1}>
                <Title
                  sx={{ fontSize: "16px" }}
                  dangerouslySetInnerHTML={{
                    __html: `5 . 4 . 2025`,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Box
          mx={"auto"}
          sx={{
            pt: 7,
            pb: 4,
            px: 4,
            position: "relative",
          }}
        >
          <Box sx={{ position: "absolute", left: "0" }}>
            <Image src="/media/animation/flower-bottom.png" alt="Laily Dinie" width={120} height={900} style={{ height: "100%", width: "auto" }} />
          </Box>

          <Box sx={{ position: "absolute", left: "0", bottom: "300px" }}>
            <Image src="/media/animation/flower-bottom.png" alt="Laily Dinie" width={120} height={900} style={{ height: "100%", width: "auto", transform: "scaleX(-1)" }} />
          </Box>

          <Box sx={{ zIndex: "2" }}>
            <Box textAlign={"center"}>
              <Image
                src="/media/animation/bis-img.png"
                width={180}
                alt="Pulpen Studio"
                height={40}
                style={{ marginBottom: "16px" }}
              />
            </Box>
            <Title
              sx={{ mb: 3, mt: 3, fontSize: "16px" }}
              dangerouslySetInnerHTML={{
                __html: "Assalamualaikum WBT <br> Salam Sejahtera",
              }}
            />
            <SubTitle
              sx={{ fontWeight: "700", mb: 3 }}
              dangerouslySetInnerHTML={{
                __html:
                  "Nama ayah<br>&<br>Nama ibu",
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
                __html: `Laily <br>&<br>Dinie `,
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

          <Box sx={{ position: "absolute", bottom: "0", right: "0px" }}>
            <Image src="/media/animation/flower-bottom.png" alt="Laily Dinie" width={120} height={900} style={{ height: "100%", width: "auto" }} />
          </Box>

          <Box sx={{ position: "absolute", right: "0px", bottom: "20px" }}>
            <Image src="/media/animation/flower-bottom.png" alt="Laily Dinie" width={120} height={900} style={{ height: "100%", width: "auto", transform: "scaleX(-1)" }} />
          </Box>

          <Box sx={{ display: "inline-flex" }}>
            <SubTitle
              sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
              dangerouslySetInnerHTML={{
                __html: "Atur Cara Majlis",
              }}
            />
          </Box>
          <Box sx={{ display: "inline-flex" }}>
            <SubTitle
              sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
              dangerouslySetInnerHTML={{
                __html: "<b>1130 - 1600</b>",
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
                __html: "<b>1230</b>",
              }}
            />
            <SubTitle
              sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
              dangerouslySetInnerHTML={{
                __html: "Ketibaan Pengantin",
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
          <Box sx={{ position: "absolute", bottom: "0", left: "0" }}>
            <Image src="/media/animation/flower-bottom.png" alt="Laily Dinie" width={120} height={900} style={{ height: "100%", width: "auto" }} />
          </Box>

          <Box sx={{ position: "absolute", left: "0", bottom: "20px" }}>
            <Image src="/media/animation/flower-bottom.png" alt="Laily Dinie" width={120} height={900} style={{ height: "100%", width: "auto", transform: "scaleX(-1)" }} />
          </Box>
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
                boxShadow: "1px 10px 10px -10px #ee7f97",
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
            sx={{ pb: 2, fontWeight: "bold" }}
          />
          <SubTitle
            dangerouslySetInnerHTML={{
              __html: "#Laily&Dinie",
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
          giftImage={"/media/animation/qr-asiyah-effi.jpeg"}
          includePhoneNumber={true}
          includeOrigin={false}
          language={item?.language!}
          iconColor="#666"
          color="#f6e8ed"
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

export default Layout886;
