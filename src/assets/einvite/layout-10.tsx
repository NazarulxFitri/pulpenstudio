import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Cormorant_SC,
  Luxurious_Script,
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
const cormorant = Cormorant_SC({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});
const luxurious = Luxurious_Script({ subsets: ["latin"], weight: "400" });

interface DateTimeConfig {
  countdownTimer: {
    d: number;
    h: number;
    m: number;
    s: number;
  };
}

const Title = styled("h1")(() => ({
  color: "#945c13",
  lineHeight: "0.75em",
  fontFamily: `${luxurious.style.fontFamily} !important` || "auto",
  fontSize: "56px",
  textAlign: "center",
  fontWeight: "lighter",
}));

const SubTitle = styled("p")(() => ({
  color: " #945c13",
  fontSize: "24px",
  fontWeight: "300",
  fontFamily: `${cormorant.style.fontFamily} !important` || "auto",
  textAlign: "center",
}));

const Text = styled("p")(() => ({
  color: "#1e1e1e",
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
  fontSize: "16px",
  textAlign: "center",
}));

const MiniText = styled("p")(() => ({
  color: "#1e1e1e",
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

const Layout10: React.FC = () => {
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
        backgroundImage: "url('/media/animation/layout10-background.webp')",
        backgroundSize: "cover",
        boxShadow: "1px 1px 10px #f1f0e5",
        m: "auto",
        position: "relative",
        overflow: "hidden",
        height: clickOpen ? "100%" : "100vh",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => setMusicStart(true)}
    >
      <Door color="#f1f0e5" {...{ clickOpen, setClickOpen }}>
        <SubTitle
          dangerouslySetInnerHTML={{
            __html: item?.title1Groom!,
          }}
        />
        <SubTitle
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
      <Box sx={{ height: "100vh", position: "relative" }}>
        <Box sx={{ position: "absolute", top: "0", left: "-20px" }}>
          <Image
            src="/media/animation/layout10-flower.webp"
            alt="Pulpen Studio Aurora Glimpse"
            width={108}
            height={110}
          />
        </Box>
        <Box sx={{ position: "absolute", bottom: "60px", right: "-40px" }}>
          <Image
            src="/media/animation/layout10-flower.webp"
            alt="Pulpen Studio Aurora Glimpse"
            width={108}
            height={110}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src="/media/animation/layout10-art1.webp"
            alt="Pulpen Studio Aurora Glimpse"
            width={271}
            height={271}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "80px",
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          <SubTitle
            style={{ fontSize: "20px", letterSpacing: "0.1em" }}
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.INTRO_FIRST,
            }}
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
          <Image
            src="/media/animation/layout10-arch.webp"
            alt="Pulpen Studio Aurora Glimpse"
            width={351}
            height={370}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-84px",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Title
            dangerouslySetInnerHTML={{
              __html: `${item?.title1Groom} <span style="display: block; font-size: 32px">&</span> ${item?.title1Bride}`,
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "160px",
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          <Box display="flex">
            <SubTitle
              style={{
                borderTop: "1px solid #945c13",
                borderBottom: "1px solid #945c13",
                padding: "8px 0",
                fontSize: "20px",
                letterSpacing: "0.1em",
                minWidth: "100px",
              }}
              dangerouslySetInnerHTML={{
                __html: dayText,
              }}
            />
            <Box>
              <SubTitle
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  letterSpacing: "0.1em",
                  minWidth: "100px",
                }}
                dangerouslySetInnerHTML={{
                  __html: `${dateText}`,
                }}
              />
              <SubTitle
                style={{
                  fontSize: "20px",
                  letterSpacing: "0.1em",
                  minWidth: "100px",
                }}
                dangerouslySetInnerHTML={{
                  __html: monthText,
                }}
              />
            </Box>

            <SubTitle
              style={{
                borderTop: "1px solid #945c13",
                borderBottom: "1px solid #945c13",
                padding: "8px 0",
                fontSize: "20px",
                letterSpacing: "0.1em",
                minWidth: "100px",
              }}
              dangerouslySetInnerHTML={{
                __html: `${yearText}`,
              }}
            />
          </Box>
          <SubTitle
            style={{ fontSize: "20px" }}
            dangerouslySetInnerHTML={{ __html: item?.location! }}
          />
        </Box>
      </Box>
      <Container>
        <Box
          my={5}
          mx="auto"
          sx={{
            p: { xs: "24px 16px", md: 8 },
          }}
        >
          <MiniText
            sx={{ mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_INTRO,
            }}
          />
          <UbuntuText
            sx={{ fontWeight: "bolder", mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: item?.title2!,
            }}
          />
          <MiniText
            sx={{ mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_TEXT,
            }}
          />
          <UbuntuText
            sx={{
              color: "#945c13",
              mb: 3,
            }}
            dangerouslySetInnerHTML={{
              __html: `${item?.fullNameGroom} & ${item?.fullNameBride}`,
            }}
          />
        </Box>

        <Box
          sx={{
            mx: -2,
            py: 8,
            position: "relative",
          }}
        >
          <Box sx={{ position: "absolute", top: "0", left: "-20px" }}>
            <Image
              src="/media/animation/layout10-flower.webp"
              alt="Pulpen Studio Aurora Glimpse"
              width={108}
              height={110}
            />
          </Box>
          <Box
            sx={{
              mx: 2,
            }}
          >
            <UbuntuText
              dangerouslySetInnerHTML={{
                __html: locale?.[item?.language!]?.CARD_TITLE_FIRST,
              }}
            />
            <Box mt={2} sx={{ textAlign: "center" }}>
              <MiniText
                style={{ marginBottom: "8px" }}
                dangerouslySetInnerHTML={{
                  __html: `${
                    locale?.[item?.language!]?.CARD_SUBTITLE_FIRST
                  }: ${fullDate} `,
                }}
              />
              <MiniText
                style={{ marginBottom: "8px" }}
                dangerouslySetInnerHTML={{
                  __html: `${locale?.[item?.language!]?.CARD_SUBTITLE_TWO} : ${
                    item?.location
                  } `,
                }}
              />
              <MiniText
                dangerouslySetInnerHTML={{
                  __html: `${
                    locale?.[item?.language!]?.CARD_SUBTITLE_THREE
                  } : ${timeStart} `,
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
          <UbuntuText
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
                boxShadow: "1px 10px 10px -10px #656041",
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
                  style={{ fontSize: "48px", color: "#945c13", width: "50px" }}
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
          <UbuntuText
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
                  overflow: "scroll",
                }}
              >
                <List sx={{ p: 0, mb: 4 }}>
                  {/* @ts-ignore */}
                  {listComments?.map((comment: any, idx: string) => (
                    <CommentList
                      {...{ comment, idx }}
                      key={idx}
                      bgColor="#f1f0e5"
                      textColor="#333"
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
          color="#f1f0e5"
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

export default Layout10;
