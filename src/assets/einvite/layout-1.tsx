import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import { Great_Vibes, Poiret_One, Ubuntu } from "next/font/google";
import useGetEinvite from "@/data/useGetEinvite";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useGetCountDownTimer from "@/data/useGetCountDownTimer";
import Widget from "@/components/Widget";
import ReactPlayer from "react-player";
import { CommentList } from "@/components";
import { locale } from "@/utils/Locale";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const poiretOne = Poiret_One({ subsets: ["latin"], weight: "400" });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });

interface DateTimeConfig {
  countdownTimer: {
    d: number;
    h: number;
    m: number;
    s: number;
  };
}

const Title = styled("h1")(() => ({
  fontFamily: `${greatVibes.style.fontFamily} !important` || "auto",
  fontSize: "56px",
  fontWeight: "lighter",
  textAlign: "center",
}));

const SubTitle = styled("p")(() => ({
  fontFamily: `${greatVibes.style.fontFamily} !important` || "auto",
  fontSize: "32px",
  textAlign: "center",
}));

const Text = styled("p")(() => ({
  fontFamily: `${poiretOne.style.fontFamily} !important` || "auto",
  fontSize: "16px",
}));

const MiniText = styled("p")(() => ({
  fontFamily: `${poiretOne.style.fontFamily} !important` || "auto",
  fontSize: "16px",
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

const Layout1: React.FC = () => {
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
        boxShadow: "0px -10px 10px #FDE6E8",
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
          backgroundImage: "url('/media/layout/layout-1.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          position: "relative",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            background: "#FFF",
            borderTopLeftRadius: "100px",
            borderBottomRightRadius: "100px",
            p: "80px 16px",
            position: "absolute",
            top: "50%",
            left: "50%",
            textAlign: "center",
            transform: "translate(-50%,-50%)",
            maxWidth: "80%",
            wordBreak: "break-word",
            width: "100%",
          }}
        >
          <SubTitle
            sx={{ mb: 5 }}
            dangerouslySetInnerHTML={{
              __html: locale[item?.language!]?.INTRO_OPTIONAL!,
            }}
          />
          <MiniText
            sx={{ letterSpacing: "0.25em", mb: 5, textTransform: "uppercase" }}
            dangerouslySetInnerHTML={{
              __html: locale[item?.language!]?.INTRO_FIRST!,
            }}
          />
          <Title
            sx={{ mb: 5, textShadow: "8px 8px 8px #FDE6E8" }}
            dangerouslySetInnerHTML={{
              __html: `${item?.title1Groom} <br/> & <br/> ${item?.title1Bride}`,
            }}
          />
          <Grid container justifyContent="left" mb={5} rowSpacing={0.5}>
            <Grid item borderLeft="8px solid #FDE6E8" px={2}>
              <Text dangerouslySetInnerHTML={{ __html: fullDate }} />
            </Grid>
            <Grid item borderLeft="8px solid #FDE6E8" px={2}>
              <Text dangerouslySetInnerHTML={{ __html: item?.location! }} />
            </Grid>
          </Grid>
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
              __html: locale[item?.language!]?.CARD_INTRO!,
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
              __html: locale[item?.language!]?.CARD_TEXT!,
            }}
          />
          <UbuntuText
            sx={{
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
                __html: locale[item?.language!]?.CARD_TITLE_FIRST!,
              }}
            />
            <Box mt={2} sx={{ textAlign: "center" }}>
              <Text
                dangerouslySetInnerHTML={{
                  __html: `${locale[item?.language!]
                    ?.CARD_SUBTITLE_FIRST!} : ${fullDate} `,
                }}
              />
              <Text
                dangerouslySetInnerHTML={{
                  __html: `${locale[item?.language!]?.CARD_SUBTITLE_TWO!}: ${
                    item?.location
                  } `,
                }}
              />
              <Text
                dangerouslySetInnerHTML={{
                  __html: ` ${locale[item?.language!]
                    ?.CARD_SUBTITLE_THREE!}: ${timeStart} `,
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
              __html: locale[item?.language!]?.CARD_COUNTDOWN_TITLE!,
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
                  __html: locale[item?.language!]?.CARD_COUNTDOWN_FINISH_TEXT!,
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
              __html: locale?.[item?.language!]?.CARD_WISH_TITLE!,
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
                      bgColor="#FDE6E8"
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
          color="#FDE6E8"
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

export default Layout1;
