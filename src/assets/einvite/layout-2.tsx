import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import { Arapey, Poiret_One, Tangerine, Ubuntu } from "next/font/google";
import useGetEinvite from "@/data/useGetEinvite";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useGetCountDownTimer from "@/data/useGetCountDownTimer";
import Widget from "@/components/Widget";
import ReactPlayer from "react-player";
import { CommentList, Door } from "@/components";
import Image from "next/image";
import { locale } from "@/utils/Locale";

const poiretOne = Poiret_One({ subsets: ["latin"], weight: "400" });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });
const tangerine = Tangerine({ subsets: ["latin"], weight: ["400", "700"] });
const arapey = Arapey({ subsets: ["latin"], weight: ["400"] });
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
  fontWeight: "700",
  textAlign: "center",
}));

const SubTitle = styled("p")(() => ({
  fontFamily: `${tangerine.style.fontFamily} !important` || "auto",
  fontWeight: "400",
  textAlign: "center",
}));

const Text = styled("p")(() => ({
  fontFamily: `${arapey.style.fontFamily} !important` || "auto",
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

const Layout2: React.FC = () => {
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
        boxShadow: "0px -10px 10px #656041",
        m: "auto",
        position: "relative",
        overflow: "hidden",
        height: clickOpen ? "100%" : "100vh",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => setMusicStart(true)}
    >
      <Door color="#656041" {...{ clickOpen, setClickOpen }}>
        <SubTitle
          sx={{ fontSize: "24px", color: "#FFF" }}
          dangerouslySetInnerHTML={{
            __html: item?.title1Groom!,
          }}
        />
        <SubTitle
          sx={{ fontSize: "24px", color: "#FFF" }}
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
          background: "#656041",
          position: "relative",
          height: "100vh",
          display: "flex",
        }}
      >
        <Box
          sx={{
            background: "#7d7652",
            border: "1px solid #FFF",
            borderTopLeftRadius: "180px",
            borderTopRightRadius: "180px",
            boxShadow: "10px 1px 10px #333",
            color: "#fff",
            p: "20px 0",
            position: "absolute",
            top: "45%",
            left: "50%",
            textAlign: "center",
            transform: "translate(-50%,-50%)",
            maxWidth: "80%",
            wordBreak: "break-word",
            minHeight: "500px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: "-56px",
              left: "-32px",
            }}
          >
            <Image
              src="/media/animation/layout2-flowers.png"
              alt="Pulpen Studio - Majestic Dark Brown"
              width="200"
              height="200"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "-64px",
              right: "-32px",
            }}
          >
            <Image
              src="/media/animation/layout2-flowers.png"
              alt="Pulpen Studio - Majestic Dark Brown"
              width="200"
              height="200"
              style={{ transform: "rotate(180deg)" }}
            />
          </Box>
          <Box sx={{ margin: "16px auto 0" }}>
            <SubTitle
              style={{ fontSize: "24px" }}
              dangerouslySetInnerHTML={{
                __html: locale?.[item?.language!]?.INTRO_FIRST,
              }}
            />
          </Box>
          <Box sx={{ maxWidth: "280px", margin: "32px auto 0" }}>
            <Title
              className="animate__animated animate__zoomIn animate__slow"
              style={{ fontSize: "64px", textShadow: "1px 1px 10px #333" }}
              dangerouslySetInnerHTML={{
                __html: `${item?.title1Groom} <br />
              ${item?.title1Bride}`,
              }}
            />
          </Box>
          <Box>
            <Box
              sx={{
                width: "100px",
                background: "#FFF",
                height: "1px",
                mt: 4,
                mx: "auto",
              }}
            />
            <Box mt={4} px={2}>
              <Text
                className="animate__animated animate__zoomIn animate__slow"
                style={{ fontSize: "16px", letterSpacing: "0.15em" }}
                dangerouslySetInnerHTML={{
                  __html: `#${item?.title1Groom}${item?.title1Bride}`,
                }}
              />
              <Text
                className="animate__animated animate__zoomIn animate__slow animate__delay-1s"
                style={{
                  marginTop: "32px",
                  letterSpacing: "0.15em",
                }}
              >
                {fullDate}
              </Text>
              <Text
                style={{ letterSpacing: "0.15em" }}
                className="animate__animated animate__zoomIn animate__slow animate__delay-2s"
              >
                {timeStart}
              </Text>
              <Text
                style={{ letterSpacing: "0.15em" }}
                className="animate__animated animate__zoomIn animate__slow animate__delay-3s"
              >
                {item?.location}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Container>
        <Box
          my={5}
          mx="auto"
          sx={{
            p: "24px 16px",
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
              color: "#7d7652",
              fontSize: "32px",
              p: "8px 24px",
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
            background: "#656041",
            borderTop: "1px solid #7d7652",
            borderBottom: "1px solid #7d7652",
            mx: -3,
            py: 8,
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: "-56px",
              left: "-32px",
            }}
          >
            <Image
              src="/media/animation/layout2-flowers.png"
              alt="Pulpen Studio - Majestic Dark Brown"
              width="200"
              height="200"
            />
          </Box>
          <Box sx={{ color: "#fff" }}>
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
                style={{ marginBottom: "8px" }}
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
            py: 8,
          }}
        >
          <Title
            style={{ color: "#656041" }}
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
                style={{ fontSize: "32px" }}
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
                  style={{ fontSize: "48px", color: "#656041", width: "50px" }}
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
          <MiniText
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_WISH_TITLE,
            }}
            sx={{ pb: 2, fontSize: "16px" }}
          />
          <MiniText
            dangerouslySetInnerHTML={{
              __html: `#${item?.title1Groom}${item?.title1Bride}`,
            }}
            sx={{ pb: 2 }}
          />
          <Grid container>
            <Grid item pb={2} xs={12}>
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
                      bgColor="#656041"
                      textColor="#FFF"
                    />
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Widget
        language={item?.language!}
        iconColor="#FFF"
        color="#7d7652"
        location={{ text: item?.location!, mapUrl: item?.mapUrl! }}
        contact={{
          number1: item?.phonePerson1!,
          number2: item?.phonePerson2!,
          name1: item?.namePerson1!,
          name2: item?.namePerson2!,
        }}
      />
    </Box>
  );
};

export default Layout2;
