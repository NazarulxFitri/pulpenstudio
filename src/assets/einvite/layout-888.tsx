// Client Khairina

import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Allura,
  Cormorant_SC,
  Lora,
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
const cormorant = Cormorant_SC({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });

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
  color: "#ad998f",
}));

const Title = styled("h1")(() => ({
  color: "#ad998f",
  lineHeight: "0.75em",
  fontFamily: `${cormorant.style.fontFamily} !important` || "auto",
  fontSize: "36px",
  textAlign: "center",
  fontWeight: "lighter",
}));

const SubTitle = styled("p")(() => ({
  fontSize: "14px",
  fontWeight: "300",
  color: "#ad998f",
  fontFamily: `${cormorant.style.fontFamily} !important` || "auto",
  textAlign: "center",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
}));

const Text = styled("p")(() => ({
  fontFamily: `${lora.style.fontFamily} !important` || "auto",
  fontSize: "16px",
  textAlign: "center",
  color: "#ad998f",
}));

const MiniText = styled("p")(() => ({
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
  fontSize: "14px",
  textAlign: "center",
  letterSpacing: "0.1em",
  color: "#ad998f",
}));

const UbuntuText = styled("p")(() => ({
  fontFamily: `${ubuntu.style.fontFamily} !important` || "auto",
  fontWeight: "700",
  fontSize: "16px",
  textAlign: "center",
  color: "#ad998f",
}));

const Layout888: React.FC = () => {
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
        background: "#f6f4f5",
        boxShadow: "1px 1px 10px #fbcccd",
        m: "auto",
        position: "relative",
        overflow: "hidden",
        height: clickOpen ? "100%" : "100vh",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => setMusicStart(true)}
    >
      <Door color="transparent" {...{ clickOpen, setClickOpen }}>
        <Title
          sx={{ fontSize: "24px", textShadow: "1px 1px 10px #fff9ea" }}
          dangerouslySetInnerHTML={{
            __html: `Khairina`,
          }}
        />
        <Title
          sx={{ fontSize: "24px", display: "block", my: "10px" }}
          dangerouslySetInnerHTML={{
            __html: `&`,
          }}
        />
        <Title
          sx={{ fontSize: "24px", textShadow: "1px 1px 10px #fff9ea" }}
          dangerouslySetInnerHTML={{
            __html: "Sabri",
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
      <Box
        sx={{
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box>
          <Image
            src="/media/animation/khairina-sabri.svg"
            alt="Khairina Sabri"
            width={400}
            height={800}
            style={{ display: "block", width: "100%" }}
          />
        </Box>
      </Box>

      <Box sx={{ minHeight: "100vh", background: "#f6f4f5" }}>
        <Box
          mb={8}
          mx="auto"
          sx={{
            p: { xs: "24px 16px", md: 3 },
          }}
        >
          <Box
            sx={{
              display: "block",
              width: "fit-content",
              margin: "0 auto",
              pb: 1,
              mt: 5
            }}
          >
            <Image
              src="/media/animation/bis-img.png"
              alt="Pulpen Studio Morning in Autumn"
              width={140}
              height={40}
            />
          </Box>

          <SubTitle
            sx={{ mb: 3, textTransform: "none", mt: 3 }}
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_INTRO,
            }}
          />
          <SubTitle
            sx={{ fontWeight: "700", mb: 3 }}
            dangerouslySetInnerHTML={{
              __html:
                "Mohamad Khalid Bin Kamaruddin<br>&<br>Kamariah Binti Aziz",
            }}
          />
          <SubTitle
            sx={{ mb: 3, textTransform: "none" }}
            dangerouslySetInnerHTML={{
              __html:
                "Dengan segala hormatnya kami menjemput Dato | Datin | Tuan | Puan | Encik | Cik hadir ke majlis perkahwinan puteri kami",
            }}
          />
          <SubTitle
            sx={{
              fontWeight: "700",
              mb: 1,
              mt: 3
            }}
            dangerouslySetInnerHTML={{
              __html: `Nurkhairina binti Mohamad Khalid <br>&<br> Sabri Bin Azman`,
            }}
          />

          <SubTitle
            sx={{ textTransform: "none", mt: 6 }}
            dangerouslySetInnerHTML={{
              __html:
                "Semoga dengan kehadiran hadirin sekalian akan menyerikan lagi majlis kami dan diberkati Allah S.W.T hendaknya. Sekian, Terima Kasih",
            }}
          />
        </Box>

        <Box
          sx={{
            mx: -2,
            mt: 2,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              mx: 2,
            }}
          >
            <Box
              sx={{
                textAlign: "left",
                padding: "10px 86px 58px",
              }}
            >
              <SubTitle
                sx={{ fontSize: "14px" }}
                dangerouslySetInnerHTML={{
                  __html: "<b>ATUR CARA MAJLIS</b>",
                }}
              />

              <Box mt={3}>
                <SubTitle
                  sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
                  dangerouslySetInnerHTML={{
                    __html: "<b>Ketibaan Pengantin</b>",
                  }}
                />
                <SubTitle
                  sx={{ fontSize: "12px", my: 0.5, textAlign: "center" }}
                  dangerouslySetInnerHTML={{
                    __html: "3.00 pm",
                  }}
                />
              </Box>

              <Box mt={1}>
                <SubTitle
                  sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
                  dangerouslySetInnerHTML={{
                    __html: "<b>Akad Nikah</b>",
                  }}
                />
                <SubTitle
                  sx={{ fontSize: "12px", my: 0.5, textAlign: "center" }}
                  dangerouslySetInnerHTML={{
                    __html: "3.30 pm",
                  }}
                />
              </Box>

              <Box mt={1}>
                <SubTitle
                  sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
                  dangerouslySetInnerHTML={{
                    __html: "<b>Jamuan Makan</b>",
                  }}
                />
                <SubTitle
                  sx={{ fontSize: "12px", my: 0.5, textAlign: "center" }}
                  dangerouslySetInnerHTML={{
                    __html: "4.00 pm",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            px: 2,
            py: 2,
          }}
        >
          <SubTitle
            dangerouslySetInnerHTML={{
              __html: "<b>MENGHITUNG HARI</b> | <i>COUNTING THE DAYS</i>",
            }}
            sx={{ pb: 2, fontSize: "14px" }}
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
                sx={{ fontSize: "14px", fontWeight: "bold" }}
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
                boxShadow: "1px 10px 10px -10px #fbcccd",
                pb: 1,
                width: "fit-content",
                mx: "auto",
                display: "flex",
              }}
            >
              <Box>
                <SubTitle
                  style={{ fontSize: "48px" }}
                  dangerouslySetInnerHTML={{
                    __html: `${countdownTimer?.countdownTimer.d} `,
                  }}
                />
              </Box>
              <Box>
                <SubTitle
                  style={{ fontSize: "24px" }}
                  dangerouslySetInnerHTML={{
                    __html: `${countdownTimer?.countdownTimer.h
                      } <span style="font-size: 12px">${locale?.[item?.language!]?.COUNTDOWN_HOUR
                      }</span>`,
                  }}
                />
                <SubTitle
                  style={{ fontSize: "24px" }}
                  dangerouslySetInnerHTML={{
                    __html: `${countdownTimer?.countdownTimer.m
                      } <span style="font-size: 12px">${locale?.[item?.language!]?.COUNTDOWN_MINUTE
                      }</span>`,
                  }}
                />
              </Box>
              <Box>
                <SubTitle
                  style={{ fontSize: "48px", color: "#d2dbe7", width: "50px" }}
                  dangerouslySetInnerHTML={{
                    __html: `${countdownTimer?.countdownTimer.s} `,
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Container>
        <Box
          id="comment"
          mb={2}
          sx={{
            px: 2,
            pb: 10,
            mt: 8,
          }}
        >
          <SubTitle
            dangerouslySetInnerHTML={{
              __html: "<b>Ucapan</b> | <i>Wishes</i>",
            }}
            sx={{ pb: 2, fontSize: "16px" }}
          />
          <Grid container>
            <Grid item xs={12}>
              <Paper
                sx={{
                  background: "#fff",
                  boxShadow: "#fbcccd",
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
                      textColor="#131313"
                    />
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box>
        <Widget
          language={item?.language!}
          iconColor="#131313"
          color="#fbcccd"
          location={{ text: "Nafoura Shaftsbury, Putrajaya", mapUrl: item?.mapUrl! }}
          contact={{
            number1: "0173211494",
            number2: "0173490527",
            number3: " 0176190492",
            name1: "Khalid",
            name2: "⁠Kamariah",
            name3: "Ain",
          }}
        />
      </Box>
    </Box>
  );
};

export default Layout888;
