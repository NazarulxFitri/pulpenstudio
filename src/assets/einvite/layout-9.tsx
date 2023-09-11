import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Clicker_Script,
  Great_Vibes,
  Petit_Formal_Script,
  Playfair_Display,
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

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const clickerScript = Clicker_Script({ subsets: ["latin"], weight: ["400"] });

interface DateTimeConfig {
  countdownTimer: {
    d: number;
    h: number;
    m: number;
    s: number;
  };
}

const Title = styled("h1")(() => ({
  color: "#0B5784",
  lineHeight: "0.75em",
  fontFamily: `${clickerScript.style.fontFamily} !important` || "auto",
  fontSize: "56px",
  textAlign: "center",
  fontWeight: "lighter",
}));

const SubTitle = styled("p")(() => ({
  color: " #2573A2",
  fontSize: "12px",
  fontWeight: "lighter",
  letterSpacing: "0.5em",
  textTransform: "uppercase",
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
  textAlign: "center",
}));

const MiniText = styled("p")(() => ({
  color: "#909090",
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

const Layout9: React.FC = () => {
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
        boxShadow: "1px 1px 10px #e4ecf7",
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
        <Box
          sx={{
            position: "absolute",
            top: "-20px",
            left: "-46px",
            transform: "rotate(35deg)",
          }}
        >
          <Image
            src="/media/animation/layout9-art-1.webp"
            alt="Pulpen Studio - Evening Turqoise Pastel"
            width={149}
            height={247}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            transform: "rotate(235deg)",
            top: "-46px",
            left: "60px",
          }}
        >
          <Image
            src="/media/animation/layout9-art-2.webp"
            alt="Pulpen Studio - Evening Turqoise Pastel"
            width={149}
            height={247}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            transform: "rotate(180deg)",
            top: "30%",
            left: "10%",
          }}
        >
          <Image
            src="/media/animation/layout9-art-3.webp"
            alt="Pulpen Studio - Evening Turqoise Pastel"
            width={318}
            height={419}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: "-40px",
            top: "-24px",
            transform: "rotate(-56deg)",
          }}
        >
          <Image
            src="/media/animation/layout9-art-4.webp"
            alt="Pulpen Studio - Evening Turqoise Pastel"
            width={189}
            height={266}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "60px",
            left: "-40px",
          }}
        >
          <Image
            src="/media/animation/layout9-art-5.webp"
            alt="Pulpen Studio - Evening Turqoise Pastel"
            width={184}
            height={149}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "60px",
            left: "16px",
          }}
        >
          <Image
            src="/media/animation/layout9-art-6.webp"
            alt="Pulpen Studio - Evening Turqoise Pastel"
            width={100}
            height={78}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "60px",
            left: "120px",
          }}
        >
          <Image
            src="/media/animation/layout9-art-7.webp"
            alt="Pulpen Studio - Evening Turqoise Pastel"
            width={139}
            height={117}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "60px",
            left: "220px",
          }}
        >
          <Image
            src="/media/animation/layout9-art-8.webp"
            alt="Pulpen Studio - Evening Turqoise Pastel"
            width={89}
            height={71}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            transform: "rotate(180deg)",
            bottom: "-200px",
            right: "-200px",
          }}
        >
          <Image
            src="/media/animation/layout9-art-3.webp"
            alt="Pulpen Studio - Evening Turqoise Pastel"
            width={318}
            height={419}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "80px",
            right: "-80px",
          }}
        >
          <Image
            src="/media/animation/layout9-art-2.webp"
            alt="Pulpen Studio - Evening Turqoise Pastel"
            width={149}
            height={247}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
          }}
        >
          <SubTitle
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.INTRO_FIRST,
            }}
          />

          <Title
            className="animate__animated animate__zoomIn animate__slow"
            style={{ margin: "48px 0" }}
            dangerouslySetInnerHTML={{
              __html: `${item?.title1Groom} <span style="display: block; font-size: 24px;">&</span>${item?.title1Bride}`,
            }}
          />
          <Box
            display="flex"
            className="animate__animated animate__zoomIn animate__delay-1s animate__slow"
          >
            <Box sx={{ height: "fit-content", m: "auto", px: 2 }}>
              <SubTitle
                style={{ fontSize: "16px", letterSpacing: "0.15em" }}
                dangerouslySetInnerHTML={{
                  __html: dayText,
                }}
              />
            </Box>
            <Box
              sx={{
                height: "fit-content",
                m: "auto",
                px: 2,
                borderLeft: "1px solid #2573A2",
                borderRight: "1px solid #2573A2",
              }}
            >
              <SubTitle
                style={{
                  fontSize: "20px",
                  letterSpacing: "0.15em",
                  fontWeight: "bolder",
                }}
                dangerouslySetInnerHTML={{
                  __html: monthText,
                }}
              />
              <SubTitle
                style={{
                  fontSize: "20px",
                  letterSpacing: "0.15em",
                  fontWeight: "bolder",
                }}
                dangerouslySetInnerHTML={{
                  __html: `${dateText}`,
                }}
              />
            </Box>
            <Box sx={{ height: "fit-content", m: "auto", px: 2 }}>
              <SubTitle
                style={{ fontSize: "16px", letterSpacing: "0.15em" }}
                dangerouslySetInnerHTML={{
                  __html: `${yearText}`,
                }}
              />
            </Box>
          </Box>
          <SubTitle
            className="animate__animated animate__zoomIn animate__delay-2s animate__slow"
            style={{ marginTop: "24px" }}
            dangerouslySetInnerHTML={{
              __html: timeStart,
            }}
          />
          <SubTitle
            className="animate__animated animate__zoomIn animate__delay-3s animate__slow"
            dangerouslySetInnerHTML={{
              __html: item?.location!,
            }}
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
              color: "#0B5784",
              mb: 3,
            }}
            dangerouslySetInnerHTML={{
              __html: `${item?.fullNameGroom} & ${item?.fullNameBride}`,
            }}
          />
        </Box>

        <Box
          sx={{
            borderTop: "1px solid #c4d3ec",
            borderBottom: "1px solid #c4d3ec",
            mx: -2,
            py: 8,
            position: "relative",
          }}
        >
          <Box sx={{ position: "absolute", bottom: "0", right: "0" }}>
            <Image
              src="/media/animation/layout9-art-8.webp"
              alt="Pulpen Studio - Evening Turqoise Pastel"
              width={89}
              height={71}
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
                      bgColor="#d0ecf4"
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
          color="#d0ecf4"
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

export default Layout9;
