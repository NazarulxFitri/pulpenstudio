import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Allura,
  Cormorant_SC,
  Great_Vibes,
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
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const cormorant = Cormorant_SC({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
const imperialScript = Imperial_Script({ subsets: ["latin"], weight: ["400"] });

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
  color: "#a96b4e",
  lineHeight: "0.75em",
  fontFamily: `${allura.style.fontFamily} !important` || "auto",
  fontSize: "36px",
  textAlign: "center",
  fontWeight: "lighter",
}));

const SubTitle = styled("p")(() => ({
  fontSize: "14px",
  fontWeight: "300",
  fontFamily: `${cormorant.style.fontFamily} !important` || "auto",
  textAlign: "center",
  letterSpacing: "0.15em",
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

const Layout15: React.FC = () => {
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
        boxShadow: "1px 1px 10px #ccc4bb",
        m: "auto",
        position: "relative",
        overflow: "hidden",
        height: clickOpen ? "100%" : "100vh",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => setMusicStart(true)}
    >
      <Door color="#b45769" {...{ clickOpen, setClickOpen }}>
        <Title
          sx={{
            color: "#FFF",
            fontSize: "32px",
            fontWeight: "100",
            padding: "0 30px 0 20px",
          }}
          dangerouslySetInnerHTML={{
            __html: "Asyiqin",
          }}
        />
        <Title
          sx={{
            color: "#FFF",
            fontSize: "12px",
            my: "12px",
            fontWeight: "100",
          }}
          dangerouslySetInnerHTML={{
            __html: "&",
          }}
        />
        <Title
          sx={{ color: "#FFF", fontSize: "32px", fontWeight: "100" }}
          dangerouslySetInnerHTML={{
            __html: "Asyraf",
          }}
        />
        <Text
          sx={{
            color: "#FFF",
            fontSize: "12px",
            fontWeight: "100",
            marginTop: "12px",
          }}
          dangerouslySetInnerHTML={{
            __html: "BUKA",
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
        display={clickOpen ? "block" : "none"}
        sx={{
          background: "#ccc4bb",
          height: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-20px",
            left: "-100px",
            transform: "scaleX(-1)",
            zIndex: "1",
            opacity: "0.8",
          }}
        >
          <Image
            src="/media/animation/layout-15-stem.png"
            alt="Pulpen Studio Morning in Autumn"
            width={250}
            height={220}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "80px",
            right: "-100px",
            transform: "scaleX(-1)",
            opacity: "0.8",
            zIndex: "1",
          }}
        >
          <Image
            src="/media/animation/layout-15-flower.png"
            alt="Pulpen Studio Morning in Autumn"
            width={200}
            height={300}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            left: "-80px",
            opacity: "0.8",
            zIndex: "1",
          }}
        >
          <Image
            src="/media/animation/layout-15-flower.png"
            alt="Pulpen Studio Morning in Autumn"
            width={200}
            height={300}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "20px",
            right: "-140px",
            transform: "rotate(-58deg)",
            zIndex: "1",
            opacity: "0.8",
          }}
        >
          <Image
            src="/media/animation/layout-15-stem.png"
            alt="Pulpen Studio Morning in Autumn"
            width={250}
            height={220}
          />
        </Box>
        <Box
          sx={{
            backgroundImage: "url('/media/animation/layout-15-bg.webp')",
            backgroundSize: "contain",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            marginTop: "-40px",
            height: "70%",
            width: "80%",
            border: "1px solid #b45769",
            boxShadow: "1px 1px 10px #FFF",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <SubTitle
              className="animate__animated animate__fadeInDown animate__slow "
              sx={{ fontWeight: "bolder", fontSize: "14px" }}
              dangerouslySetInnerHTML={{
                __html: "WALIMATUL URUS",
              }}
            />
            <Box sx={{ my: 3 }}>
              <Title
                sx={{
                  color: "#b45769",
                  fontSize: "48px",
                  textWrap: "nowrap",
                  textShadow: "1px 1px 6px white",
                }}
                className="animate__animated animate__fadeInDown animate__slow animate__delay-1s"
                dangerouslySetInnerHTML={{ __html: "Asyiqin" }}
              />
              <Title
                dangerouslySetInnerHTML={{ __html: "&" }}
                sx={{
                  my: 2,
                  color: "#b45769",
                  fontWeight: "light",
                  fontSize: "20px",
                  textShadow: "1px 1px 6px white",
                }}
              />
              <Title
                sx={{
                  color: "#b45769",
                  fontSize: "48px",
                  textWrap: "nowrap",
                  textShadow: "1px 1px 6px white",
                }}
                className="animate__animated animate__fadeInDown animate__slow animate__delay-1s"
                dangerouslySetInnerHTML={{ __html: "Asyraf" }}
              />
            </Box>

            <SubTitle
              className="animate__animated animate__fadeInDown animate__slow animate__delay-2s"
              sx={{ fontSize: "12px", fontWeight: "600", width: "300px" }}
              dangerouslySetInnerHTML={{
                __html:
                  "<span style='font-weight: 500'><i>Lokasi</i></span><br>De Majlis Event space<br>B-6-7 Block B, Jalan Ostia Utama, Ostia Bangi Bussiness Park, 43650 Bandar Baru Bangi, Selangor",
              }}
            />
            <Box
              justifyContent="center"
              gap={1}
              sx={{ width: "100%", textWrap: "nowrap" }}
              mt={3}
              className="animate__animated animate__fadeInDown animate__slow animate__delay-3s"
            >
              <SubTitle
                sx={{ fontSize: "14px", fontWeight: "600" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<span style='font-size: 16px;'>Ahad</span><br>06 Oktober 2024<br>3 Rabiulakhir 1446 AH",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        mb={8}
        mx="auto"
        sx={{
          p: { xs: "24px 16px", md: 1 },
        }}
      >
        <Box sx={{ display: "block", width: "fit-content", margin: "0 auto" }}>
          <Image
            src="/media/animation/salam-logo.png"
            alt="Pulpen Studio Morning in Autumn"
            width={150}
            height={150}
          />
        </Box>

        <SubTitle
          sx={{ mb: 3 }}
          dangerouslySetInnerHTML={{
            __html: locale?.[item?.language!]?.CARD_INTRO,
          }}
        />
        <SubTitle
          sx={{ fontWeight: "700", mb: 3 }}
          dangerouslySetInnerHTML={{
            __html: item?.title2!,
          }}
        />
        <SubTitle
          sx={{ mb: 3 }}
          dangerouslySetInnerHTML={{
            __html:
              "Dengan segala hormatnya kami menjemput Dato | Datin | Tuan | Puan | Encik | Cik hadir ke majlis perkahwinan puteri kami",
          }}
        />
        <SubTitle
          sx={{
            fontWeight: "700",
            mb: 3,
          }}
          dangerouslySetInnerHTML={{
            __html: `${item?.fullNameGroom} <br>&<br> ${item?.fullNameBride}`,
          }}
        />

        <SubTitle
          sx={{ mb: 3 }}
          dangerouslySetInnerHTML={{
            __html:
              "Semoga dengan kehadiran hadirin sekalian akan menyerikan lagi majlis kami dan diberkati Allah S.W.T hendaknya. Sekian, Terima Kasih",
          }}
        />
      </Box>

      <Box
        sx={{
          mx: -3,
          mt: 2,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-20px",
            left: "-60px",
            opacity: "0.2",
          }}
        >
          <Image
            src="/media/animation/layout-15-flower.png"
            alt="Pulpen Studio Morning in Autumn"
            width={200}
            height={300}
          />
        </Box>
        <Box
          sx={{
            mx: 2,
          }}
        >
          <Box
            sx={{
              textAlign: "left",
              padding: "10px 86px 58px",
              background: "#ccc4bb",
            }}
          >
            <Text
              sx={{ fontSize: "14px", mt: 6 }}
              dangerouslySetInnerHTML={{
                __html: "<b>ATUR CARA MAJLIS</b>",
              }}
            />

            <Box mt={1}>
              <Text
                sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
                dangerouslySetInnerHTML={{
                  __html: "<b>Jamuan Makan</b>",
                }}
              />
              <Text
                sx={{ fontSize: "12px", my: 0.5, textAlign: "center" }}
                dangerouslySetInnerHTML={{
                  __html: "11.00 pagi - 4.00 petang",
                }}
              />
            </Box>

            <Box mt={1}>
              <Text
                sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
                dangerouslySetInnerHTML={{
                  __html: "<b>Ketibaan Pengantin</b>",
                }}
              />
              <Text
                sx={{ fontSize: "12px", my: 0.5, textAlign: "center" }}
                dangerouslySetInnerHTML={{
                  __html: "12.30 tengah hari",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          px: 2,
          mt: 2,
          py: 4,
        }}
      >
        <Text
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
            <Text
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
              boxShadow: "1px 10px 10px -10px #b45769",
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
                style={{ fontSize: "48px", color: "#b45769", width: "50px" }}
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
        <Text
          dangerouslySetInnerHTML={{
            __html: "<b>UCAPAN</b> | <i>WISHES</i>",
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
                overflow: "scroll",
              }}
            >
              <List sx={{ p: 0, mb: 4 }}>
                {/* @ts-ignore */}
                {listComments?.map((comment: any, idx: string) => (
                  <CommentList
                    {...{ comment, idx }}
                    key={idx}
                    bgColor="#f9dab2"
                    textColor="#131313"
                  />
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Widget
          language={item?.language!}
          iconColor="#131313"
          color="#ccc4bb"
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

export default Layout15;
