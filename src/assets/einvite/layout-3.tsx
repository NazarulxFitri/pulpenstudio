import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Playfair_Display,
  Poiret_One,
  Tangerine,
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

const tangerine = Tangerine({ subsets: ["latin"], weight: "400" });
const poiretOne = Poiret_One({ subsets: ["latin"], weight: "400" });
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
  fontFamily: `${tangerine.style.fontFamily} !important` || "auto",
  textAlign: "center",
}));

const SubTitle = styled("p")(() => ({
  fontFamily: `${tangerine.style.fontFamily} !important` || "auto",
  fontSize: "32px",
  textAlign: "center",
}));

const Text = styled("p")(() => ({
  fontFamily: `${poiretOne.style.fontFamily} !important` || "auto",
  fontSize: "16px",
  textAlign: "center",
}));

const MiniText = styled("p")(() => ({
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
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

const Layout3: React.FC = () => {
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
        boxShadow: "0px -10px 10px #7c1d64",
        m: "auto",
        position: "relative",
        overflow: "hidden",
        height: clickOpen ? "100%" : "100vh",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => setMusicStart(true)}
    >
      <Door color="#7c1d64" {...{ clickOpen, setClickOpen }}>
        <SubTitle
          sx={{ fontSize: "32px", color: "#FFF" }}
          dangerouslySetInnerHTML={{
            __html: item?.title1Groom!,
          }}
        />
        <SubTitle
          sx={{ fontSize: "32px", color: "#FFF" }}
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
      <Box
        sx={{
          borderBottom: "1px solid #EFEFEF",
          position: "relative",
          height: "100vh",
        }}
      >
        <Box sx={{ position: "absolute", top: "0", left: "-20px" }}>
          <Image
            src="/media/animation/layout3-art.png"
            alt="Pulpen Studio - Tulips in the Morning"
            width={200}
            height={400}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            right: "0",
            transform: "rotate(180deg)",
            zIndex: "-1",
          }}
        >
          <Image
            src="/media/animation/layout3-art-1.png"
            alt="Pulpen Studio - Tulips in the Morning"
            width={400}
            height={400}
          />
        </Box>
        <Box
          sx={{
            borderTopLeftRadius: "100px",
            borderBottomRightRadius: "100px",
            p: "80px 0",
            textAlign: "center",
            wordBreak: "break-word",
            width: "100%",
          }}
        >
          <Text
            className="animate__animated animate__zoomIn animate__slow"
            sx={{
              color: "#7c1d64",
              letterSpacing: "0.5em",
              mb: 5,
              fontSize: "20px",
              textTransform: "uppercase",
            }}
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.INTRO_FIRST,
            }}
          />
          <Box sx={{ position: "relative" }}>
            <Image
              src="/media/animation/layout3-flowers.png"
              alt="Pulpen Studio - Tulips in the Morning"
              width={400}
              height={400}
            />
            <Box
              sx={{
                background: "rgba(255,255,255,0.4)",
                p: 3,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "100%",
              }}
            >
              <Title
                className="animate__animated animate__zoomIn animate__slow"
                sx={{
                  fontSize: "48px",
                  fontWeight: "lighter",
                  lineHeight: "0.5em",
                }}
                dangerouslySetInnerHTML={{
                  __html: `<span style="margin-left: -016px">${item?.title1Groom}</span> <br/><span style="font-size: 20px">&</span><br/><span style="margin-right: -16px">${item?.title1Bride}</span>`,
                }}
              />
            </Box>
          </Box>
          <MiniText
            className="animate__animated animate__zoomIn animate__slow animate__delay-1s"
            sx={{
              color: "#7c1d64",
              fontWeight: "700",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
            dangerouslySetInnerHTML={{ __html: fullDate }}
          />
          <Text
            className="animate__animated animate__zoomIn animate__slow animate__delay-2s"
            sx={{
              color: "#7c1d64",
              fontWeight: "bolder",
              marginTop: "16px",
              letterSpacing: "0.15em",
            }}
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
            position: "relative",
          }}
        >
          <Box sx={{ position: "absolute", top: "0", left: "-20px" }}>
            <Image
              src="/media/animation/layout3-art.png"
              alt="Pulpen Studio - Tulips in the Morning"
              width={200}
              height={400}
            />
          </Box>
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
              mb: 3,
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
          <Box sx={{ mx: 2, position: "relative" }}>
            <Box sx={{ position: "absolute", top: "0", right: "-150px" }}>
              <Image
                src="/media/animation/layout3-flowers.png"
                alt="Pulpen Studio - Tulips in the Morning"
                width={200}
                height={200}
              />
            </Box>
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
                  } : ${fullDate} `,
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
            position: "relative",
          }}
        >
          <Box sx={{ position: "absolute", top: "0", left: "50%" }}>
            <Image
              src="/media/animation/layout3-art.png"
              alt="Pulpen Studio - Tulips in the Morning"
              width={200}
              height={400}
            />
          </Box>
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
                  style={{ fontSize: "48px", color: "#7c1d64", width: "50px" }}
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
            <Grid item py={2} xs={12}>
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
                      bgColor="#7c1d64"
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
          iconColor="#FFF"
          color="#7c1d64"
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

export default Layout3;
