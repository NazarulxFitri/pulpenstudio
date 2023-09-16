import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Bodoni_Moda,
  Cormorant_SC,
  Luxurious_Script,
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
import { CommentList } from "@/components";
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
const moonDance = Moon_Dance({ subsets: ["latin"], weight: ["400"] });
const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "700"] });

interface DateTimeConfig {
  countdownTimer: {
    d: number;
    h: number;
    m: number;
    s: number;
  };
}

const Special = styled("p")(() => ({
  color: "#593a88",
  fontFamily: `${moonDance.style.fontFamily} !important` || "auto",
  fontSize: "24px",
  textAlign: "center",
}));

const Title = styled("h1")(() => ({
  color: "#593a88",
  lineHeight: "0.75em",
  fontFamily: `${bodoni.style.fontFamily} !important` || "auto",
  fontSize: "36px",
  textAlign: "center",
  fontWeight: "lighter",
  textShadow: "4px 4px 4px #909090",
}));

const SubTitle = styled("p")(() => ({
  color: "#696969",
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

const TimeBox = styled(Box)(() => ({
  fontSize: "16px",
  textAlign: "center",
}));

const Layout11: React.FC = () => {
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
        background: "#FFF",
        boxShadow: "1px 1px 10px #b99cd2",
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
        <Box sx={{ position: "absolute", top: "-80px" }}>
          <Image
            src="/media/animation/layout11-flower.webp"
            alt="Pulpen Studio Violet Blossom"
            width={400}
            height={180}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            mt: "-60px",
            top: "50%",
            left: "-72px",
            opacity: "0.4",
            transform: "translateY(-50%)",
          }}
        >
          <Image
            src="/media/animation/layout11-flower-1.webp"
            alt="Pulpen Studio Violet Blossom"
            width={144}
            height={338}
          />
        </Box>
        <Box
          sx={{
            p: "48px 24px",
            position: "absolute",
            mt: "-60px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            textAlign: "center",
          }}
        >
          <SubTitle
            style={{ fontSize: "20px", marginBottom: "48px" }}
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.INTRO_FIRST,
            }}
          />
          <Title
            dangerouslySetInnerHTML={{
              __html: `${item?.title1Groom}`,
            }}
          />
          <Special
            dangerouslySetInnerHTML={{
              __html: item?.language === "bm" ? "dan" : "and",
            }}
          />
          <Title
            dangerouslySetInnerHTML={{
              __html: `${item?.title1Bride}`,
            }}
          />
          <Box display="flex" mt={6} justifyContent={"center"}>
            <SubTitle
              style={{ fontSize: "20px", marginRight: "8px" }}
              dangerouslySetInnerHTML={{
                __html: `${dayText},`,
              }}
            />
            <SubTitle
              style={{ fontSize: "20px" }}
              dangerouslySetInnerHTML={{
                __html: fullDate,
              }}
            />
          </Box>
          <SubTitle
            style={{ fontSize: "20px" }}
            dangerouslySetInnerHTML={{
              __html: item?.location!,
            }}
          />
        </Box>
        <Box sx={{ position: "absolute", bottom: "0" }}>
          <Image
            src="/media/animation/layout11-flower.webp"
            alt="Pulpen Studio Violet Blossom"
            width={400}
            height={180}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            opacity: "0.3",
            transform: "translate(-50%, -50%)",
            marginTop: "-60px",
          }}
        >
          <Image
            src="/media/animation/layout11-art-2.webp"
            alt="Pulpen Studio Violet Blossom"
            width={312}
            height={300}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "20%",
          }}
        >
          <Image
            src="/media/animation/layout11-art-3.webp"
            alt="Pulpen Studio Violet Blossom"
            width={40}
            height={40}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "20%",
            right: "20%",
            transform: "scaleX(-1)",
          }}
        >
          <Image
            src="/media/animation/layout11-art-3.webp"
            alt="Pulpen Studio Violet Blossom"
            width={40}
            height={40}
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
              color: "#593a88",
              mb: 3,
            }}
            dangerouslySetInnerHTML={{
              __html: `${item?.fullNameGroom} & ${item?.fullNameBride}`,
            }}
          />
        </Box>

        <Box
          sx={{
            borderTop: "1px solid #D4A5F7",
            borderBottom: "1px solid #D4A5F7",
            mx: -2,
            py: 8,
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "20%",
              right: "16px",
              transform: "scaleX(-1)",
            }}
          >
            <Image
              src="/media/animation/layout11-art-3.webp"
              alt="Pulpen Studio Violet Blossom"
              width={40}
              height={40}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              opacity: "0.4",
            }}
          >
            <Image
              src="/media/animation/layout11-flower-1.webp"
              alt="Pulpen Studio Violet Blossom"
              width={72}
              height={169}
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
                  style={{ fontSize: "48px", color: "#593a88", width: "50px" }}
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
                <List sx={{ p: 0 }}>
                  {/* @ts-ignore */}
                  {listComments?.map((comment: any, idx: string) => (
                    <CommentList
                      {...{ comment, idx }}
                      key={idx}
                      bgColor="#E6E6FA"
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
          color="#b99cd2"
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

export default Layout11;
