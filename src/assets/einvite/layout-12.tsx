import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Allura,
  Bodoni_Moda,
  Cormorant_SC,
  Moon_Dance,
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

const Layout12: React.FC = () => {
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
    month: "long",
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
      <Door color="#b4bca9" {...{ clickOpen, setClickOpen }} asyiqinasyraf>
        <SubTitle
          dangerouslySetInnerHTML={{
            __html: item?.title1Bride!,
          }}
        />
        <SubTitle
          dangerouslySetInnerHTML={{
            __html: item?.title1Groom!,
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
          <Image
            src="/media/animation/layout12-art.webp"
            alt="Pulpen Studio Green Leaf"
            width={400}
            height={400}
          />
        </Box>
        <Box
          className="animate__animated animate__zoomIn animate__slow"
          sx={{
            position: "absolute",
            top: "-200px",
            transform: "rotate(220deg)",
          }}
        >
          <Image
            src="/media/animation/layout12-flower.webp"
            alt="Pulpen Studio Green Leaf"
            width={231}
            height={441}
          />
        </Box>
        <Box
          className="animate__animated animate__zoomIn animate__slow"
          sx={{
            position: "absolute",
            top: "-160px",
            right: "-60px",
            transform: "rotate(140deg) scaleX(-1)",
            opacity: "0.8",
          }}
        >
          <Image
            src="/media/animation/layout12-flower.webp"
            alt="Pulpen Studio Green Leaf"
            width={231}
            height={441}
          />
        </Box>
        <Box
          className="animate__animated animate__zoomIn animate__slow"
          sx={{
            position: "absolute",
            bottom: "-80px",
            transform: "rotate(40deg)",
            right: "-80px",
            opacity: "0.8",
          }}
        >
          <Image
            src="/media/animation/layout12-flower.webp"
            alt="Pulpen Studio Green Leaf"
            width={231}
            height={441}
          />
        </Box>
        <Box
          className="animate__animated animate__zoomIn animate__slow"
          sx={{
            position: "absolute",
            bottom: "-80px",
            transform: "rotate(-40deg) scaleX(-1)",
            left: "-80px",
            opacity: "0.8",
          }}
        >
          <Image
            src="/media/animation/layout12-flower.webp"
            alt="Pulpen Studio Green Leaf"
            width={231}
            height={441}
          />
        </Box>
        <Box
          sx={{
            display: clickOpen ? "block" : "none",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            marginTop: "-60px",
          }}
        >
          <Box>
            <SubTitle
              className="animate__animated animate__zoomIn animate__slow"
              dangerouslySetInnerHTML={{
                __html: locale?.[item?.language!]?.INTRO_FIRST,
              }}
              sx={{ mb: 5 }}
            />
            <Box
              mb={4}
              className="animate__animated animate__zoomIn animate__slow animate__delay-1s"
            >
              <SubTitle
                dangerouslySetInnerHTML={{
                  __html: `Asyraf`,
                }}
                sx={{ fontSize: "28px", textShadow: "1px 1px 10px #d1d3bb" }}
              />
              <SubTitle
                dangerouslySetInnerHTML={{
                  __html: "<3",
                }}
                sx={{ fontSize: "16px" }}
              />
              <SubTitle
                dangerouslySetInnerHTML={{
                  __html: `Asyiqin`,
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
                  __html: `Sabtu, <span style="font-size: 32px">${dateText}</span> ${monthText} ${yearText}`,
                }}
              />
            </Box>
            <SubTitle
              sx={{ fontSize: "12px" }}
              dangerouslySetInnerHTML={{
                __html: `HOMESTAY DAMAI 
<br>LOT 843, JALAN SUNGAI JAGONG, SUNGAI LAYAR, 08000 SUNGAI PETANI KEDAH`,
              }}
              className="animate__animated animate__zoomIn animate__slow animate__delay-3s"
            />
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
              __html: locale?.[item?.language!]?.CARD_INTRO,
            }}
          />
          <Text
            sx={{ fontWeight: "bolder", mb: 3, fontSize: "14px" }}
            dangerouslySetInnerHTML={{
              __html: "MOHD ASRI BIN AWANG<br>&<br>ROSILAH BINTI ABU BAKAR",
            }}
          />
          <Text
            sx={{ mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_TEXT,
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
              __html: `MUHAMMAD ASYRAF BIN MOHD ASRI<br>&<br>NUR ASYIQIN BINTI RAMZI`,
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
                  "<b>ATUR CARA</b> | <i>TENTATIVES</i><br><br>12pm - 4pm",
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
                  __html: "<b>Ketibaan tetamu & Ahli keluarga</b>",
                }}
              />
            </Box>

            <Box sx={{ display: "inline-flex" }}>
              <Text
                sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
                dangerouslySetInnerHTML={{
                  __html: "<b>1.30pm</b>",
                }}
              />
              <Text
                sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<b>Ketibaan pengantin & pengantin bersanding di pelamin</b>",
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
                  __html:
                    "<b>Bersurai & sesi pengantin bergambar (outdoor)</b>",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            px: 2,
            py: 4,
          }}
        >
          <Text
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_COUNTDOWN_TITLE,
            }}
            sx={{ pb: 2 }}
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
                  style={{ fontSize: "48px", color: "#293927", width: "50px" }}
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
              __html: locale?.[item?.language!]?.CARD_WISH_TITLE,
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
          showGift
          giftImage="/media/animation/wedding-of-asyiqin-asyraf.png"
          language={item?.language!}
          iconColor="#131313"
          color="#b4bca9"
          location={{
            text: `HOMESTAY DAMAI 
LOT 843, JALAN SUNGAI JAGONG, SUNGAI LAYAR, 08000 SUNGAI PETANI KEDAH `,
            mapUrl: item?.mapUrl!,
          }}
          contact={{
            number1: "0199104160",
            number2: "0174553889",
            number3: "01133000417",
            number4: "0164288190",
            name1: "Asri",
            name2: "Ayu",
            name3: "Izyan",
            name4: "Iffah",
          }}
        />
      </Box>
    </Box>
  );
};

export default Layout12;
