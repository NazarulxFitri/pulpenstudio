import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Arapey,
  Poiret_One,
  Quicksand,
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

const poiretOne = Poiret_One({ subsets: ["latin"], weight: "400" });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });
const tangerine = Tangerine({ subsets: ["latin"], weight: ["400", "700"] });
const arapey = Arapey({ subsets: ["latin"], weight: ["400"] });
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
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

const QuicksandText = styled("p")(() => ({
  fontFamily: `${quicksand.style.fontFamily} !important` || "auto",
  fontSize: "20px",
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

const Layout4: React.FC = () => {
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
        sx={{ fontSize: "32px", color: "#FFF"}}
          dangerouslySetInnerHTML={{
            __html: item?.title1Groom!,
          }}
        />
        <SubTitle
        sx={{ fontSize: "32px", color: "#FFF"}}
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
          background: "#FFF",
          position: "relative",
          height: "100vh",
          display: "flex",
          borderBottom: "1px solid #EFEFEF",
        }}
      >
        <Box sx={{ position: "absolute", left: "-80px", top: "40px" }}>
          <Image
            src="/media/animation/layout4-art.png"
            alt="Pulpen Studio - Cinnamon Blue Petal"
            width={600}
            height={600}
          />
        </Box>
        <Box sx={{ position: "absolute", left: "-100px", top: "-100px" }}>
          <Image
            src="/media/animation/layout4-art.png"
            alt="Pulpen Studio - Cinnamon Blue Petal"
            width={600}
            height={600}
          />
        </Box>
        <Box sx={{ position: "absolute", left: "-100px", bottom: "-100px" }}>
          <Image
            src="/media/animation/layout4-art.png"
            alt="Pulpen Studio - Cinnamon Blue Petal"
            width={600}
            height={600}
          />
        </Box>
        <Box
          sx={{
            background: "#e8d4b4",
            border: "8px solid #e4cc94",
            borderTopLeftRadius: "180px",
            borderTopRightRadius: "180px",
            boxShadow: "1px 1px 24px #333 inset",
            color: "#6b5426",
            m: "120px auto 0",
            p: "20px 0",
            position: "relative",
            textAlign: "center",
            maxWidth: "80%",
            wordBreak: "break-word",
            minHeight: "500px",
            height: "fit-content",
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-52px",
              right: "-40px",
              transform: "rotate(90deg)",
            }}
          >
            <Image
              src="/media/animation/layout4-flowers.png"
              alt="Pulpen Studio - Cinnamon Blue Petal"
              width={200}
              height={200}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "-56px",
              left: "-72px",
              transform: "rotate(280deg)",
            }}
          >
            <Image
              src="/media/animation/layout4-flowers.png"
              alt="Pulpen Studio - Cinnamon Blue Petal"
              width={200}
              height={200}
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
              style={{ lineHeight: "0.75em" }}
              dangerouslySetInnerHTML={{
                __html: `${item?.title1Groom} <br /><span style="color: #333;font-size: 20px !important">&</span> <br />
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
            <Box
              mt={4}
              px={2}
              sx={{ mx: "auto", width: "fit-content", textAlign: "center" }}
              display="flex"
              gap={2}
            >
              <Box sx={{ my: "auto" }}>
                <QuicksandText
                  className="animate__animated animate__zoomIn animate__slow animate__delay-1s"
                  style={{
                    fontWeight: "300",
                    fontSize: "16px",
                    borderTop: "1px solid #6b5426",
                    borderBottom: "1px solid #6b5426",
                    padding: "8px",
                  }}
                  dangerouslySetInnerHTML={{ __html: dayText }}
                />
              </Box>
              <Box className="animate__animated animate__zoomIn animate__slow animate__delay-2s">
                <QuicksandText
                  style={{
                    fontWeight: "700",
                  }}
                  dangerouslySetInnerHTML={{ __html: monthText! }}
                />
                <QuicksandText
                  style={{
                    fontWeight: "700",
                    fontSize: "40px",
                  }}
                  dangerouslySetInnerHTML={{ __html: `${dateText}` }}
                />
                <QuicksandText
                  style={{
                    fontWeight: "700",
                  }}
                  dangerouslySetInnerHTML={{ __html: `${yearText}` }}
                />
              </Box>
              <Box sx={{ my: "auto" }}>
                <QuicksandText
                  className="animate__animated animate__zoomIn animate__slow animate__delay-3s"
                  style={{
                    fontWeight: "300",
                    fontSize: "16px",
                    borderTop: "1px solid #6b5426",
                    borderBottom: "1px solid #6b5426",
                    padding: "8px",
                  }}
                  dangerouslySetInnerHTML={{ __html: timeStart }}
                />
              </Box>
            </Box>
            <Box mt={4}>
              <QuicksandText
                className="animate__animated animate__zoomIn animate__slow"
                style={{
                  fontWeight: "300",
                  fontSize: "14px",
                }}
                dangerouslySetInnerHTML={{ __html: item?.location! }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Container sx={{ background: "#EFE1D0" }}>
        <Box
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
              fontSize: "24px",
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
            mx: -3,
            py: 8,
            position: "relative",
          }}
        >
          <Box sx={{ position: "absolute", top: "-20px", left: "-20px" }}>
            <Image
              src="/media/animation/layout4-flowers.png"
              alt="Pulpen Studio - Cinnamon Blue Petal"
              width={100}
              height={100}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "-20px",
              right: "-20px",
              transform: "rotate(180deg)",
            }}
          >
            <Image
              src="/media/animation/layout4-flowers.png"
              alt="Pulpen Studio - Cinnamon Blue Petal"
              width={100}
              height={100}
            />
          </Box>
          <Box>
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
                  style={{ fontSize: "48px", color: "#7d7652", width: "50px" }}
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
      <Box>
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
    </Box>
  );
};

export default Layout4;
