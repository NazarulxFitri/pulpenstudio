import { Box, Grid, List, Paper, keyframes } from "@mui/material";
import {
  Allura,
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
import { styled } from "@mui/material";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const allura = Allura({ subsets: ["latin"], weight: ["400"] });

interface DateTimeConfig {
  countdownTimer: {
    d: number;
    h: number;
    m: number;
    s: number;
  };
}

const Special = styled("p")(() => ({
  color: "#293927",
  fontFamily: `${allura.style.fontFamily} !important` || "auto",
  fontSize: "24px",
  textAlign: "center",
}));

const Title = styled("h1")(() => ({
  color: "#293927",
  lineHeight: "0.75em",
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
  fontSize: "32px",
  textAlign: "center",
  fontWeight: "lighter",
}));

const SubTitle = styled("p")(() => ({
  color: "#293927",
  fontSize: "14px",
  fontWeight: "300",
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
  textAlign: "center",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
}));

const Text = styled("p")(() => ({
  color: "#293927",
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
  fontSize: "12px",
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

// Hardcoded data for Ashraf & Natasha
const MUSIC_URL = "https://youtu.be/mHpTdsBbYRM?si=u1i-vEacu7SYRDZb";
const DATE_TIME = "2026-04-26T12:00:00";
const LOCATION_TEXT =
  "No 86 Batu 28 3/4, Jalan Kemakmuran, Jalan Ipoh,\nKota Lama Kiri, 33000 Kuala Kangsar, Perak";
const MAP_URL = "https://maps.app.goo.gl/ciEdzertdqx4Rnhf9";
const LANGUAGE = "bm";

const leafWave = keyframes`
  0%, 100% { transform: rotate(-0.5deg); }
  50% { transform: rotate(0.5deg); }
`;

const Layout16: React.FC = () => {
  const router = useRouter();
  const eInviteId = router.query.eInviteId;
  const [countdownTimer, setCountdownTimer] = useState<DateTimeConfig>();
  const { data } = useGetEinvite(eInviteId as string);
  const listComments = data?.comments && [...data?.comments!].reverse();

  const dateJs = new Date(DATE_TIME);
  const monthsList = [
    "Jan", "Feb", "Mar", "April", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ];
  const monthText = monthsList[dateJs.getMonth()];
  const dateText = dateJs.getDate();
  const yearText = dateJs.getFullYear();
  const dayText = daysOfWeek[dateJs.getDay()];

  const currentDate = new Date().getTime();
  const selectedDate = dateJs.getTime();
  const isCounting = currentDate < selectedDate;
  const countdownTimerParam: DateTimeConfig = useGetCountDownTimer(DATE_TIME);
  const [musicStart, setMusicStart] = useState(false);
  const [clickOpen, setClickOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCountdownTimer(countdownTimerParam);
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownTimerParam]);

  return (
    <Box
      maxWidth="400px"
      sx={{
        backgroundImage: "url('/media/animation/layout1-background.webp')",
        backgroundSize: "cover",
        boxShadow: "1px 1px 10px #b4bca9",
        m: "auto",
        position: "relative",
        overflow: "hidden",
        height: clickOpen ? "100%" : "100vh",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => setMusicStart(true)}
    >
      <Door color="#b4bca9" ashrafNatasha {...{ clickOpen, setClickOpen }}>
        <Box sx={{ width: "100px", height: "84px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <SubTitle dangerouslySetInnerHTML={{ __html: "Ashraf" }} sx={{ fontSize: "16px", my: 0 }} />
          <SubTitle dangerouslySetInnerHTML={{ __html: "&" }} sx={{ fontSize: "12px", my: 0 }} />
          <SubTitle dangerouslySetInnerHTML={{ __html: "Natasha" }} sx={{ fontSize: "16px", my: 0 }} />
          <SubTitle dangerouslySetInnerHTML={{ __html: "Klik disini" }} sx={{ fontSize: "8px", mt: 1, mb: 0 }} />
        </Box>
      </Door>
      <Box sx={{ visibility: "hidden", position: "absolute" }}>
        <ReactPlayer
          url={MUSIC_URL}
          playing={musicStart}
          loop={true}
          width="1%"
          height="1%"
          controls={true}
        />
      </Box>
      <Box sx={{ height: "100vh", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0%",
            marginTop: "-60px",
            opacity: "0.5",
          }}
        >
          <Image src="/media/animation/layout12-art.webp" alt="Pulpen Studio Green Leaf" width={400} height={400} />
        </Box>
        <Box sx={{ position: "absolute", top: "-200px", transformOrigin: "top center", animation: clickOpen ? `${leafWave} 3s ease-in-out infinite` : "none" }}>
          <Box className="animate__animated animate__zoomIn animate__slow" sx={{ transform: "rotate(220deg)" }}>
            <Image src="/media/animation/layout12-flower.webp" alt="Pulpen Studio Green Leaf" width={231} height={441} />
          </Box>
        </Box>
        <Box sx={{ position: "absolute", top: "-160px", right: "-60px", opacity: "0.8", transformOrigin: "top center", animation: clickOpen ? `${leafWave} 3s ease-in-out infinite 0.5s` : "none" }}>
          <Box className="animate__animated animate__zoomIn animate__slow" sx={{ transform: "rotate(140deg) scaleX(-1)" }}>
            <Image src="/media/animation/layout12-flower.webp" alt="Pulpen Studio Green Leaf" width={231} height={441} />
          </Box>
        </Box>
        <Box sx={{ position: "absolute", bottom: "-80px", right: "-80px", opacity: "0.8", transformOrigin: "bottom center", animation: clickOpen ? `${leafWave} 3s ease-in-out infinite` : "none" }}>
          <Box className="animate__animated animate__zoomIn animate__slow" sx={{ transform: "rotate(40deg)" }}>
            <Image src="/media/animation/layout12-flower.webp" alt="Pulpen Studio Green Leaf" width={231} height={441} />
          </Box>
        </Box>
        <Box sx={{ position: "absolute", bottom: "-80px", left: "-80px", opacity: "0.8", transformOrigin: "bottom center", animation: clickOpen ? `${leafWave} 3s ease-in-out infinite 0.5s` : "none" }}>
          <Box className="animate__animated animate__zoomIn animate__slow" sx={{ transform: "rotate(-40deg) scaleX(-1)" }}>
            <Image src="/media/animation/layout12-flower.webp" alt="Pulpen Studio Green Leaf" width={231} height={441} />
          </Box>
        </Box>
        <Box
          sx={{
            display: clickOpen ? "block" : "none",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Box>
            <SubTitle
              className="animate__animated animate__zoomIn animate__slow"
              dangerouslySetInnerHTML={{
                __html: locale?.[LANGUAGE]?.INTRO_FIRST,
              }}
              sx={{ mb: 5 }}
            />
            <Box
              mb={4}
              className="animate__animated animate__zoomIn animate__slow animate__delay-1s"
            >
              <SubTitle
                dangerouslySetInnerHTML={{
                  __html: `Ashraf`,
                }}
                sx={{ fontSize: "28px", textShadow: "1px 1px 10px #d1d3bb" }}
              />
              <SubTitle
                dangerouslySetInnerHTML={{
                  __html: "&",
                }}
                sx={{ fontSize: "16px" }}
              />
              <SubTitle
                dangerouslySetInnerHTML={{
                  __html: `Natasha`,
                }}
                sx={{ fontSize: "28px", textShadow: "1px 1px 10px #d1d3bb" }}
              />
            </Box>
            <Box
              sx={{ mb: 1 }}
              className="animate__animated animate__zoomIn animate__slow animate__delay-2s"
            >
              <SubTitle
                sx={{ fontSize: "12px" }}
                dangerouslySetInnerHTML={{
                  __html: `Ahad, <span style="font-size: 32px">${dateText}</span> ${monthText} ${yearText}`,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          my={5}
          mx="auto"
          sx={{
            p: { xs: "24px 16px", md: 8 },
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "0",
              right: "-102px",
              opacity: "0.8",
            }}
          >
            <Image
              src="/media/animation/layout-12-leaf.gif"
              alt="Pulpen Studio - Flourish Gloom"
              width={160}
              height={280}
            />
          </Box>
          <Box
            sx={{
              display: "block",
              width: "fit-content",
              margin: "0 auto",
              pb: 4,
            }}
          >
            <Image
              src="/media/animation/bis-img.png"
              alt="Pulpen Studio Morning in Autumn"
              width={180}
              height={50}
            />
          </Box>
          <Text
            sx={{ mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: locale?.[LANGUAGE]?.CARD_INTRO,
            }}
          />
          <Text
            sx={{ fontWeight: "bolder", mb: 3, fontSize: "14px" }}
            dangerouslySetInnerHTML={{
              __html: "MOHAMAD HAMIL BIN BASIRON<br>&<br>ROZITA BINTI ABDUL RAHIM",
            }}
          />
          <Text
            sx={{ mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: "Dengan segala hormatnya kami menjemput Tuan Puan hadir ke majlis perkahwinan anakanda kami",
            }}
          />
          <Text
            sx={{
              fontWeight: "bolder",
              fontSize: "14px",
              color: "#293927",
              mb: 3,
            }}
            dangerouslySetInnerHTML={{
              __html: `MUHAMMAD ASHRAF BIN MOHAMAD HAMIL<br>&<br>NURUL NATASHA IZZATI BINTI MAT NAZARI`,
            }}
          />
          <Text
            dangerouslySetInnerHTML={{
              __html: `Semoga dengan kehadiran hadirin sekalian
akan menyerikan lagi majlis kami dan diberkati Allah S.W.T hendaknya.
Sekian, Terima Kasih`,
            }}
          />
        </Box>

        <Box
          sx={{
            px: 4,
            py: 8,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "-100px",
              opacity: "0.8",
            }}
          >
            <Image
              src="/media/animation/layout-12-leaf.gif"
              alt="Pulpen Studio - Flourish Gloom"
              width={160}
              height={280}
            />
          </Box>
          <Box sx={{ textAlign: "left", padding: "0 32px" }}>
            <Text
              sx={{ fontSize: "12px" }}
              dangerouslySetInnerHTML={{
                __html:
                  "<b>ATUR CARA</b> | <i>TENTATIVES</i><br><br>12pm - 4pm<br><br>",
              }}
            />
            <Box sx={{ display: "inline-flex" }}>
              <Text
                sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
                dangerouslySetInnerHTML={{
                  __html: "<b>12.00pm</b>",
                }}
              />
              <Text
                sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
                dangerouslySetInnerHTML={{
                  __html: "<b>Majlis bermula</b>",
                }}
              />
            </Box>
            <Box sx={{ display: "inline-flex" }}>
              <Text
                sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
                dangerouslySetInnerHTML={{
                  __html: "<b>12.30pm</b>",
                }}
              />
              <Text
                sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
                dangerouslySetInnerHTML={{
                  __html: "<b>Ketibaan pengantin</b>",
                }}
              />
            </Box>
            <Box sx={{ display: "inline-flex" }}>
              <Text
                sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
                dangerouslySetInnerHTML={{
                  __html: "<b>4.00pm</b>",
                }}
              />
              <Text
                sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
                dangerouslySetInnerHTML={{
                  __html: "<b>Majlis bersurai</b>",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ px: 2, py: 4 }}>
          <Text
            dangerouslySetInnerHTML={{
              __html: locale?.[LANGUAGE]?.CARD_COUNTDOWN_TITLE,
            }}
            sx={{ pb: 2 }}
          />
          {mounted && !isCounting ? (
            <Box
              id="countdown"
              columnGap={2}
              sx={{ mx: "auto", width: "fit-content" }}
            >
              <SubTitle
                dangerouslySetInnerHTML={{
                  __html: locale?.[LANGUAGE]?.CARD_COUNTDOWN_FINISH_TEXT,
                }}
              />
            </Box>
          ) : mounted ? (
            <Box
              id="countdown"
              columnGap={2}
              sx={{
                boxShadow: "1px 10px 10px -10px #ac6e29",
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
                    __html: `${countdownTimer?.countdownTimer.h} <span style="font-size: 12px">${locale?.[LANGUAGE]?.COUNTDOWN_HOUR}</span>`,
                  }}
                />
                <Text
                  style={{ fontSize: "24px" }}
                  dangerouslySetInnerHTML={{
                    __html: `${countdownTimer?.countdownTimer.m} <span style="font-size: 12px">${locale?.[LANGUAGE]?.COUNTDOWN_MINUTE}</span>`,
                  }}
                />
              </Box>
              <Box>
                <Text
                  style={{ fontSize: "48px", color: "#293927", width: "50px" }}
                  dangerouslySetInnerHTML={{
                    __html: `${countdownTimer?.countdownTimer.s} `,
                  }}
                />
              </Box>
            </Box>
          ) : null}
        </Box>

        <Box
          id="comment"
          mb={2}
          sx={{ px: 2, pt: 4, pb: 10 }}
        >
          <Text
            dangerouslySetInnerHTML={{
              __html: locale?.[LANGUAGE]?.CARD_WISH_TITLE,
            }}
            sx={{ pb: 2 }}
          />
          <Grid container>
            <Grid item xs={12}>
              <Paper
                sx={{
                  background: "transparent",
                  boxShadow: "unset",
                  maxHeight: "400px",
                }}
              >
                <List sx={{ p: 0, mb: 4 }}>
                  {/* @ts-ignore */}
                  {listComments?.map((comment: any, idx: string) => (
                    <CommentList
                      {...{ comment, idx }}
                      key={idx}
                      bgColor="#b4bca9"
                      textColor="#131313"
                    />
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box display={clickOpen ? "block" : "none"}>
        <Widget
          hideRsvp
          language={LANGUAGE}
          iconColor="#131313"
          color="#b4bca9"
          location={{
            text: LOCATION_TEXT,
            mapUrl: MAP_URL,
          }}
          contact={{
            number1: "0175766405",
            number2: "0103949471",
            name1: "Mohamad Hamil",
            name2: "Rozita",
          }}
        />
      </Box>
    </Box>
  );
};

export default Layout16;
