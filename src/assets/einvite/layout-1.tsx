import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Alex_Brush,
  Corinthia,
  Cormorant_SC,
  Dancing_Script,
  Ephesis,
  Great_Vibes,
  Josefin_Slab,
  Montez,
  Mrs_Saint_Delafield,
  Playfair_Display,
  Poiret_One,
  Sacramento,
  Trirong,
  Ubuntu,
  Zen_Loop,
} from "next/font/google";
import useGetEinvite from "@/data/useGetEinvite";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useGetCountDownTimer from "@/data/useGetCountDownTimer";
import Widget from "@/components/Widget";
import ReactPlayer from "react-player";
import { CommentList } from "@/components";
import { locale } from "@/utils/Locale";
import Image from "next/image";

const corinthia = Corinthia({ subsets: ["latin"], weight: "400" });
const poiretOne = Poiret_One({ subsets: ["latin"], weight: "400" });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });
const ephesis = Ephesis({
  subsets: ["latin"],
  weight: ["400"],
});
const cormorant = Cormorant_SC({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
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
  fontFamily: `${cormorant.style.fontFamily} !important` || "auto",
  fontSize: "40px",
  fontWeight: "400",
  textAlign: "center",
  textTransform: "uppercase",
  color: "#5c9464",
}));

const SubTitle = styled("p")(() => ({
  color: "#333",
  fontFamily: `${corinthia.style.fontFamily} !important` || "auto",
  fontSize: "28px",
  textAlign: "center",
}));

const Text = styled("p")(() => ({
  fontFamily: `${cormorant.style.fontFamily} !important` || "auto",
  fontSize: "16px",
  textAlign: "center",
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
    month: "numeric",
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
        backgroundImage: "url('/media/animation/layout1-background.webp')",
        backgroundSize: "auto",
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
          position: "relative",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            background: "rgba(255,255,255)",
            borderTopLeftRadius: "140px",
            borderTopRightRadius: "140px",
            boxShadow: "inset 1px 1px 10px #d9d9d9",
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "80%",
            textAlign: "center",
            transform: "translate(-50%,-50%)",
            marginTop: "-30px",
            py: 12,
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                transform: "scaleX(-1) rotate(-40deg)",
                left: "-80px",
              }}
            >
              <Image
                src="/media/animation/layout1-flower.webp"
                alt="Pulpen Studio Layout 1"
                width={165}
                height={195}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                transform: "rotate(-64deg)",
                right: "-80px",
                top: "-80px",
              }}
            >
              <Image
                src="/media/animation/layout1-flower.webp"
                alt="Pulpen Studio Layout 1"
                width={165}
                height={195}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                transform: "rotate(45deg)",
                bottom: "-180px",
                left: "0",
                right: "0",
              }}
            >
              <Image
                src="/media/animation/layout1-flower.webp"
                alt="Pulpen Studio Layout 1"
                width={165}
                height={195}
              />
            </Box>
            <SubTitle
              className="animate__animated animate__zoomIn animate__slow animate__delay-1s"
              dangerouslySetInnerHTML={{
                __html: locale[item?.language!]?.INTRO_FIRST!,
              }}
            />
            <Title
              className="animate__animated animate__zoomIn animate__slow"
              sx={{ textShadow: "8px 8px 8px #FDE6E8", my: 3 }}
              dangerouslySetInnerHTML={{
                __html: `${item?.title1Groom} <br/> & <br/> ${item?.title1Bride}`,
              }}
            />
            <Grid container justifyContent="center" rowSpacing={1}>
              <Grid
                item
                px={2}
                className="animate__animated animate__zoomIn animate__slow animate__delay-1s"
              >
                <Text
                  style={{
                    letterSpacing: "0.1em",
                    borderTop: "0.5px solid #000",
                    borderBottom: "0.5px solid #000",
                    padding: "8px 16px",
                  }}
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
            <SubTitle
              sx={{ mt: 3 }}
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
              __html: locale[item?.language!]?.CARD_INTRO!,
            }}
          />
          <Text
            sx={{ fontWeight: "bolder", mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: item?.title2!,
            }}
          />
          <Text
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
            borderTop: "1px solid #FDE6E8",
            borderBottom: "1px solid #FDE6E8",
            mx: -3,
            py: 8,
          }}
        >
          <Box sx={{ mx: 2 }}>
            <Text
              sx={{ fontWeight: "700" }}
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
          <Text
            dangerouslySetInnerHTML={{
              __html: locale[item?.language!]?.CARD_COUNTDOWN_TITLE!,
            }}
            sx={{ pb: 2, fontWeight: "700" }}
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
          <Text
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_WISH_TITLE!,
            }}
            sx={{ pb: 2, fontWeight: "700" }}
          />
          <SubTitle
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
                      bgColor="#f9ddc5"
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
          color="#f8e2de"
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
