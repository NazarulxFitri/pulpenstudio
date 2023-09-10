import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Cinzel,
  Cormorant,
  Playfair_Display,
  Tangerine,
  Ubuntu,
} from "next/font/google";
import useGetEinvite from "@/data/useGetEinvite";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useGetCountDownTimer from "@/data/useGetCountDownTimer";
import Widget from "@/components/Widget";
import ReactPlayer from "react-player";
import { CommentList } from "@/components";
import Image from "next/image";
import { locale } from "@/utils/Locale";

const tangerine = Tangerine({ subsets: ["latin"], weight: "400" });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });
const cormorant = Cormorant({ subsets: ["latin"], weight: ["300"] });

interface DateTimeConfig {
  countdownTimer: {
    d: number;
    h: number;
    m: number;
    s: number;
  };
}

const Title = styled("h1")(() => ({
  fontFamily: `${tangerine.style.fontFamily} !important` || "auto",
  fontSize: "60px",
  textAlign: "center",
  fontWeight: "lighter",
}));

const SubTitle = styled("p")(() => ({
  fontFamily: `${cinzel.style.fontFamily} !important` || "auto",
  textAlign: "center",
}));

const Text = styled("p")(() => ({
  fontFamily: `${cormorant.style.fontFamily} !important` || "auto",
  fontSize: "16px",
  textAlign: "center",
}));

const MiniText = styled("p")(() => ({
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
  fontSize: "12px",
  textAlign: "center",
}));

const UbuntuText = styled("p")(() => ({
  fontFamily: `${ubuntu.style.fontFamily} !important` || "auto",
  fontWeight: "700",
  fontSize: "16px",
  textAlign: "center",
}));

const TimeBox = styled(Box)(() => ({
  fontSize: "16px",
  textAlign: "center",
}));

const Layout7: React.FC = () => {
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
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentDate = new Date().getTime();
  const selectedDate = dateJs.getTime();
  const isCounting = currentDate < selectedDate;
  const countdownTimerParam: DateTimeConfig = useGetCountDownTimer(
    item?.dateTime
  );
  const [musicStart, setMusicStart] = useState(false);

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
        background: "#141414",
        backgroundImage: `radial-gradient(4px 4px at 20px 30px, #e3be60, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 50px 160px, #efefef, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 90px 40px, #d0d0d0, rgba(0,0,0,0)),
        radial-gradient(4px 4px at 130px 80px, #fff, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 160px 120px, #e3be60, rgba(0,0,0,0))`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
        boxShadow: "0px -10px 10px #fcf5f3",
        color: "#e3be60",
        m: "auto",
        position: "relative",
        overflow: "hidden",
        height: "100%",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => setMusicStart(true)}
    >
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
        <Box sx={{ position: "absolute", right: "24px", top: "24px" }}>
          <Image
            src="/media/animation/layout7-art-1.webp"
            alt="layout7-art"
            width={100}
            height={100}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "-40px",
            color: "#141414",
            boxShadow: "4px 4px 200px 40px #e3be60",
          }}
        >
          .....
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "64px",
            right: "-40px",
            color: "#141414",
            boxShadow: "4px 4px 200px 40px #e3be60",
          }}
        >
          .....
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "24px",
            bottom: "84px",
          }}
        >
          <Image
            src="/media/animation/layout7-art-2.png"
            alt="layout7-art"
            width={100}
            height={100}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            marginTop: "-60px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box mb={6} sx={{ textAlign: "center" }}>
            <Image
              src="/media/animation/layout7-art-3.webp"
              alt="layout7-art-3"
              width={50}
              height={25}
            />
            <SubTitle
              className="animate__animated animate__zoomIn animate__slow animate__delay-1s"
              style={{
                fontSize: "12px",
                margin: "8px auto 0",
                paddingBottom: "8px",
                borderBottom: "2px solid #e3be60",
                width: "fit-content",
              }}
              dangerouslySetInnerHTML={{
                __html: locale?.[item?.language!]?.INTRO_FIRST!,
              }}
            />
          </Box>
          <Title
            className="animate__animated animate__zoomIn animate__slow"
            dangerouslySetInnerHTML={{
              __html: `${item?.title1Groom!}<span style="display: block;font-size: 32px">&</span>${item?.title1Bride!}`,
            }}
          />
          <Box mt={6}>
            <Text
              className="animate__animated animate__zoomIn animate__slow animate__delay-1s"
              style={{ fontSize: "16px" }}
              dangerouslySetInnerHTML={{
                __html: item?.location!,
              }}
            />

            <Text
              className="animate__animated animate__zoomIn animate__slow animate__delay-2s"
              style={{ fontSize: "16px" }}
              dangerouslySetInnerHTML={{
                __html: `<span style="font-size: 20px">${dayText} ,</span> ${fullDate}`,
              }}
            />
            <Text
              className="animate__animated animate__zoomIn animate__slow animate__delay-3s"
              style={{ fontSize: "16px" }}
              dangerouslySetInnerHTML={{
                __html: timeStart!,
              }}
            />
          </Box>
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
          <Text
            sx={{ mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_TEXT,
            }}
          />
          <Title
            sx={{
              fontSize: "24px",
              fontWeight: "bolder",
              mb: 3,
            }}
            dangerouslySetInnerHTML={{
              __html: `${item?.fullNameGroom} & ${item?.fullNameBride}`,
            }}
          />
        </Box>

        <Box
          sx={{
            borderTop: "1px solid #efefef",
            borderBottom: "1px solid #efefef",
            mx: -2,
            py: 8,
          }}
        >
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
                dangerouslySetInnerHTML={{
                  __html: `${
                    locale?.[item?.language!]?.CARD_SUBTITLE_FIRST
                  }: ${fullDate} `,
                }}
              />
              <MiniText
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
                width: "fit-content",
                mx: "auto",
                display: "flex",
              }}
            >
              <TimeBox>
                {countdownTimer?.countdownTimer.d}
                <br />
                {locale?.[item?.language!]?.COUNTDOWN_DAYS}
              </TimeBox>
              <TimeBox>
                {countdownTimer?.countdownTimer.h}
                <br />
                {locale?.[item?.language!]?.COUNTDOWN_HOUR}
              </TimeBox>
              <TimeBox>
                {countdownTimer?.countdownTimer.m}
                <br />
                {locale?.[item?.language!]?.COUNTDOWN_MINUTE}
              </TimeBox>
              <TimeBox>
                {countdownTimer?.countdownTimer.s}
                <br />
                {locale?.[item?.language!]?.COUNTDOWN_SECOND}
              </TimeBox>
            </Box>
          )}
        </Box>
        <Box
          id="comment"
          mb={2}
          sx={{
            px: 2,
            py: 4,
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
            <Grid item py={2} xs={12}>
              <Paper
                sx={{
                  background: "transparent",
                  boxShadow: "unset",
                  maxHeight: "400px",
                  overflow: "scroll",
                }}
              >
                <List>
                  {/* @ts-ignore */}
                  {listComments?.map((comment: any, idx: string) => (
                    <CommentList
                      {...{ comment, idx }}
                      key={idx}
                      bgColor="#e3be60"
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
          color="#e3be60"
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

export default Layout7;
