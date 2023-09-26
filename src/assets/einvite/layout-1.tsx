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
            background: "rgba(255,255,255,0.8)",
            boxShadow: "inset 1px 1px 10px #FDE6E8",
            p: "48px 16px",
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
          <MiniText
            className="animate__animated animate__zoomIn animate__slow animate__delay-1s"
            sx={{ letterSpacing: "0.25em", mb: 5, textTransform: "uppercase" }}
            dangerouslySetInnerHTML={{
              __html: locale[item?.language!]?.INTRO_FIRST!,
            }}
          />
          <Title
            className="animate__animated animate__zoomIn animate__slow"
            sx={{ mb: 5, textShadow: "8px 8px 8px #FDE6E8" }}
            dangerouslySetInnerHTML={{
              __html: `${item?.title1Groom} <br/> & <br/> ${item?.title1Bride}`,
            }}
          />
          <Grid container justifyContent="center" mb={5} rowSpacing={0.5}>
            <Grid
              item
              px={2}
              className="animate__animated animate__zoomIn animate__slow animate__delay-1s"
            >
              <Text
                style={{ letterSpacing: "0.1em" }}
                dangerouslySetInnerHTML={{ __html: fullDate }}
              />
            </Grid>
            <Grid
              item
              px={2}
              className="animate__animated animate__zoomIn animate__slow animate__delay-2s"
            >
              <Text
                style={{ letterSpacing: "0.1em" }}
                dangerouslySetInnerHTML={{ __html: item?.location! }}
              />
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
          <Text
            sx={{
              fontSize: "16px",
              fontWeight: "bolder",
              textAlign: "center",
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
            background: "#FDE6E8",
            borderTop: "1px solid #FDE6E8",
            borderBottom: "1px solid #FDE6E8",
            mx: -3,
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
                style={{ marginBottom: "8px" }}
                dangerouslySetInnerHTML={{
                  __html: `${locale[item?.language!]
                    ?.CARD_SUBTITLE_FIRST!} : ${fullDate} `,
                }}
              />
              <Text
                style={{ marginBottom: "8px" }}
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
          <Title
            dangerouslySetInnerHTML={{
              __html: locale[item?.language!]?.CARD_COUNTDOWN_TITLE!,
            }}
            sx={{ pb: 2, fontSize: "32px" }}
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
                  style={{ fontSize: "48px", color: "pink", width: "50px" }}
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
