import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Dancing_Script,
  Great_Vibes,
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
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });
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

const Title = styled("h1")(() => ({
  fontFamily: `${dancingScript.style.fontFamily} !important` || "auto",
  textAlign: "center",
}));

const SubTitle = styled("p")(() => ({
  fontFamily: `${tangerine.style.fontFamily} !important` || "auto",
  fontSize: "32px",
  textAlign: "center",
}));

const Text = styled("p")(() => ({
  fontFamily: `${dancingScript.style.fontFamily} !important` || "auto",
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

const Layout5: React.FC = () => {
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
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
        background: "#fcf5f3",
        boxShadow: "0px -10px 10px #fcf5f3",
        m: "auto",
        position: "relative",
        overflow: "hidden",
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
      <Box
        sx={{
          borderBottom: "1px solid #EFEFEF",
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{ color: "#5a0819", padding: "344px 16px", position: "relative" }}
        >
          <Box sx={{ position: "absolute", top: "-56px", left: "-40px" }}>
            <Image
              src="/media/animation/layout5-flowers.png"
              alt="layout3-art"
              width={400}
              height={400}
            />
          </Box>
          <Box sx={{ position: "absolute", bottom: "72px", right: "-96px" }}>
            <Image
              src="/media/animation/layout5-flowers-1.png"
              alt="layout3-art"
              width={400}
              height={400}
            />
          </Box>
          <Box sx={{ position: "absolute", bottom: "180px", left: "0" }}>
            <Image
              src="/media/animation/layout5-art.webp"
              alt="layout3-art"
              width={161}
              height={297}
            />
          </Box>
          <Box>
            <MiniText
              style={{ letterSpacing: "0.5em" }}
              dangerouslySetInnerHTML={{
                __html: locale?.[item?.language!]?.INTRO_FIRST,
              }}
            />
            <Title
              style={{ marginTop: "24px", lineHeight: "0.75em" }}
              dangerouslySetInnerHTML={{
                __html: `<span style="margin-right: 24px;">${item?.title1Groom}</span> <br><span style="font-size: 20px">&</span><br> <spanstyle="margin-left: 24px;">${item?.title1Bride}</span>`,
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 3,
                letterSpacing: "0.15em",
              }}
            >
              <MiniText
                style={{
                  fontSize: "16px",
                  borderRight: "1px solid #5a0819",
                  marginRight: "12px",
                  paddingRight: "12px",
                }}
                dangerouslySetInnerHTML={{ __html: monthText }}
              />
              <MiniText
                style={{ fontSize: "16px" }}
                dangerouslySetInnerHTML={{
                  __html: `${dayText} <br> ${dateText}`,
                }}
              />
              <MiniText
                style={{
                  fontSize: "16px",
                  borderLeft: "1px solid #5a0819",
                  marginLeft: "12px",
                  paddingLeft: "12px",
                }}
                dangerouslySetInnerHTML={{ __html: `${yearText}` }}
              />
            </Box>
            <MiniText
              style={{
                fontSize: "12px",
              }}
              dangerouslySetInnerHTML={{ __html: item?.location! }}
            />
            <MiniText
              style={{
                fontSize: "12px",
                marginTop: "24px",
              }}
              dangerouslySetInnerHTML={{
                __html: `#${item?.title1Groom}${item?.title1Bride}`,
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
          <MiniText
            sx={{ mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_TEXT,
            }}
          />
          <Title
            sx={{
              color: "#5a0819",
              fontSize: "24px",
              fontWeight: "bolder",
              mb: 3,
              textShadow: "1px 1px 10px #FDE6E8",
            }}
            dangerouslySetInnerHTML={{
              __html: `${item?.fullNameGroom} & ${item?.fullNameBride}`,
            }}
          />
        </Box>

        <Box
          sx={{
            borderTop: "1px solid #FDE6E8",
            borderBottom: "1px solid #FDE6E8",
            mx: -2,
            py: 8,
          }}
        >
          <Box sx={{ mx: 2 }}>
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
                      bgColor="#5a0819"
                      textColor="#FFF"
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
          iconColor="#333"
          color="#fbecec"
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

export default Layout5;
