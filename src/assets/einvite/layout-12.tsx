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
      <Door color="#b4bca9" {...{ clickOpen, setClickOpen }}>
        <Special
          sx={{ color: "#FFF" }}
          dangerouslySetInnerHTML={{
            __html: item?.title1Groom!,
          }}
        />
        <Special
          sx={{ color: "#FFF" }}
          dangerouslySetInnerHTML={{
            __html: item?.title1Bride!,
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
      <Box sx={{   height: "100vh", position: "relative" }}>
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
            opacity: "0.8"
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
            opacity: "0.8"
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
            opacity: "0.8"
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
              mb={5}
              className="animate__animated animate__zoomIn animate__slow animate__delay-1s"
            >
              <Special
                dangerouslySetInnerHTML={{
                  __html: `${item?.title1Groom}`,
                }}
                sx={{  ml: -4, fontSize: "40px" , color: "#ac6e29"}}
              />
              <Title
                dangerouslySetInnerHTML={{
                  __html: "<3",
                }}
                sx={{ fontSize: "16px" }}
              />
              <Special
                dangerouslySetInnerHTML={{
                  __html: `${item?.title1Bride}`,
                }}
                sx={{ mr: -4, fontSize: "40px", color: "#ac6e29" }}
              />
            </Box>
            <Box
              sx={{  mb: 1 }}
              className="animate__animated animate__zoomIn animate__slow animate__delay-2s"
            >
              <SubTitle
                dangerouslySetInnerHTML={{ __html: `${dayText}, <span style="font-size: 32px">${dateText}</span> ${monthText} ${yearText}` }}
              />
            </Box>
            <SubTitle
              dangerouslySetInnerHTML={{ __html: item?.location! }}
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
            position: "relative"
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
          <Text
            sx={{ mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_INTRO,
            }}
          />
          <Text
            sx={{ fontWeight: "bolder", mb: 3, fontSize: "14px", }}
            dangerouslySetInnerHTML={{
              __html: "Abdul Razak bin Jamaluddin <br>Suzana binti Mat Isa",
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
              __html: `${item?.fullNameGroom} <br> ${item?.fullNameBride}`,
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
          <Box sx={{ textAlign: "left", padding: "0 32px"}}>
        <Text
          sx={{ fontSize: "12px"}}
          dangerouslySetInnerHTML={{
            __html: "<b>ATUR CARA</b> | <i>TENTATIVES</i><br><br>11:00a.m - 4:00p.m",
          }}
        />

        <Text
          sx={{ fontSize: "12px", mt: 2, mb: 1}}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Sesi Pertama</b> | <i>First Session</i>",
          }}
        />
        <Box sx={{ display: "inline-flex"}}>
           <Text
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>11:00</b>",
            }}
          />
          <Text
            sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>Majlis Resepsi Bermula</b> <br> <i>Start of Wedding Reception</i>",
            }}
          />
        </Box>
        
        <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5,  display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>11:30</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Ketibaan Pengantin</b> <br> <i>Arrival of Bride & Groom</i>",
          }}
        />
        </Box>
        
        <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>11:45</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5, textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Salam Restu <br/>(Ibu bapa & Saudara-mara)</b> <br> <i>Blessings Ceremony <br/>(Parents & Relatives)</i>",
          }}
        />
        </Box>

        <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>12:45</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5, textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Pengantin Rehat</b> <br> <i>Bride & Groom One-hour Break</i>",
          }}
        />
        </Box>
        

        <Text
          id="delay-18s"
          sx={{ fontSize: "12px", mt: 2, mb:1 }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Sesi Kedua</b> | <i>Second Session</i>",
          }}
        />

        <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>13:45</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5, textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Ketibaan Semula Pengantin</b> <br> <i>Re-arrival of Bride & Groom</i>",
          }}
        />
        </Box>

        <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>14:45</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5, textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Upacara Memotong Kek</b> <br> <i>Cake Cutting Ceremony</i>",
          }}
        />
        </Box>

         <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>16:00</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5, textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Majlis Bersurai</b> <br> <i> End of Wedding Reception</i>",
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
            pb: 10
          }}
        >
          <Text
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_WISH_TITLE,
            }}
            sx={{ pb: 2 }}
          />
          <MiniText
            dangerouslySetInnerHTML={{
              __html: `#${item?.title1Groom}${item?.title1Bride}`,
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
      <Box>
        <Widget
          language={item?.language!}
          iconColor="#131313"
          color="#b4bca9"
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

export default Layout12;
