import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Allura,
  Cormorant_SC,
  Oooh_Baby,
  Playfair_Display,
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

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const allura = Allura({ subsets: ["latin"], weight: ["400"] });
const ooohBaby = Oooh_Baby({ subsets: ["latin"], weight: ["400"] });
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

const Special = styled("p")(() => ({
  fontFamily: `${allura.style.fontFamily} !important` || "auto",
  fontSize: "24px",
  textAlign: "center",
}));

const Title = styled("h1")(() => ({
  color: "#a96b4e",
  lineHeight: "0.75em",
  fontFamily: `${cormorant.style.fontFamily} !important` || "auto",
  fontSize: "36px",
  textAlign: "center",
  fontWeight: "lighter",
}));

const SubTitle = styled("p")(() => ({
  fontSize: "14px",
  fontWeight: "300",
  fontFamily: `${cormorant.style.fontFamily} !important` || "auto",
  textAlign: "center",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
}));

const Text = styled("p")(() => ({
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
  fontSize: "16px",
  textAlign: "center",
}));

const MiniText = styled("p")(() => ({
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

const Layout14: React.FC = () => {
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
        backgroundImage: "url('/media/animation/layout14-background.webp')",
        backgroundSize: "cover",
        boxShadow: "1px 1px 10px #f9dab2",
        m: "auto",
        position: "relative",
        overflow: "hidden",
        height: clickOpen ? "100%" : "100vh",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => setMusicStart(true)}
    >
      <Door color="#f9dab2" {...{ clickOpen, setClickOpen }}>
        <Text
          dangerouslySetInnerHTML={{
            __html: item?.title1Groom!,
          }}
        />
        <Text
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
          height: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            marginTop: "-30px",
            height: "70%",
            width: "80%",
            border: "1px solid #ffac6c",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <SubTitle
              className="animate__animated animate__fadeInDown animate__slow "
              sx={{ fontWeight: "bolder", fontSize: "12px" }}
              dangerouslySetInnerHTML={{
                __html: locale?.[item?.language!]?.INTRO_FIRST,
              }}
            />
            <Box
              sx={{
                my: 4,
                background: "#FFF",
                border: "1px solid #ffac6c",
                p: "80px 50px",
                borderRadius: "50%",
                position: "relative",
                boxShadow: "inset 1px 1px 10px #d9d9d9",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: "65px",
                  left: "-50px",
                  transform: "rotate(45deg)",
                }}
              >
                <Image
                  src="/media/animation/layout14-flower-2.webp"
                  alt="Pulpen Studio Morning in Autumn"
                  width={143}
                  height={137}
                />
              </Box>
              <Title
                className="animate__animated animate__fadeInDown animate__slow animate__delay-1s"
                dangerouslySetInnerHTML={{ __html: item?.title1Groom! }}
              />
              <Title dangerouslySetInnerHTML={{ __html: "&" }} sx={{ my: 2 }} />
              <Title
                className="animate__animated animate__fadeInDown animate__slow animate__delay-1s"
                dangerouslySetInnerHTML={{ __html: item?.title1Bride! }}
              />
            </Box>
            <SubTitle
              className="animate__animated animate__fadeInDown animate__slow animate__delay-2s"
              sx={{ fontWeight: "lighter", fontSize: "12px" }}
              dangerouslySetInnerHTML={{
                __html: item?.location!,
              }}
            />
            <Box
              display="flex"
              justifyContent="center"
              gap={1}
              my={1}
              className="animate__animated animate__fadeInDown animate__slow animate__delay-3s"
            >
              <SubTitle
                sx={{ fontWeight: "lighter", fontSize: "12px" }}
                dangerouslySetInnerHTML={{
                  __html: fullDate,
                }}
              />
              <SubTitle
                sx={{ fontWeight: "lighter", fontSize: "12px" }}
                dangerouslySetInnerHTML={{
                  __html: timeStart,
                }}
              />
            </Box>

            <SubTitle
              className="animate__animated animate__fadeInDown animate__slow animate__delay-4s"
              sx={{ fontWeight: "700", fontSize: "12px" }}
              dangerouslySetInnerHTML={{
                __html: `#${item?.title1Groom}${item?.title1Bride}`,
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "-36px",
              right: "-36px",
              transform: "scaleX(-1)",
            }}
          >
            <Image
              src="/media/animation/layout14-flower.webp"
              alt="Pulpen Studio Morning in Autumn"
              width={184}
              height={184}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "-36px",
              left: "-36px",
            }}
          >
            <Image
              src="/media/animation/layout14-flower.webp"
              alt="Pulpen Studio Morning in Autumn"
              width={184}
              height={184}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "-36px",
              left: "-36px",
              transform: "scaleY(-1)",
            }}
          >
            <Image
              src="/media/animation/layout14-flower.webp"
              alt="Pulpen Studio Morning in Autumn"
              width={184}
              height={184}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "-36px",
              right: "-36px",
              transform: "scaleY(-1) scaleX(-1)",
            }}
          >
            <Image
              src="/media/animation/layout14-flower.webp"
              alt="Pulpen Studio Morning in Autumn"
              width={184}
              height={184}
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
          <SubTitle
            sx={{ mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_INTRO,
            }}
          />
          <SubTitle
            sx={{ fontWeight: "700", mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: item?.title2!,
            }}
          />
          <SubTitle
            sx={{ mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_TEXT,
            }}
          />
          <SubTitle
            sx={{
              fontWeight: "700",
              mb: 3,
            }}
            dangerouslySetInnerHTML={{
              __html: `${item?.fullNameGroom} & ${item?.fullNameBride}`,
            }}
          />
        </Box>

        <Box
          sx={{
            borderTop: "1px solid #f5e1fd",
            borderBottom: "1px solid #f5e1fd",
            mx: -2,
            py: 8,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              mx: 2,
            }}
          >
            <SubTitle
              sx={{ fontWeight: "700" }}
              dangerouslySetInnerHTML={{
                __html: locale?.[item?.language!]?.CARD_TITLE_FIRST,
              }}
            />
            <Box mt={2} sx={{ textAlign: "center" }}>
              <SubTitle
                style={{ marginBottom: "8px" }}
                dangerouslySetInnerHTML={{
                  __html: `${
                    locale?.[item?.language!]?.CARD_SUBTITLE_FIRST
                  }: ${fullDate} `,
                }}
              />
              <SubTitle
                style={{ marginBottom: "8px" }}
                dangerouslySetInnerHTML={{
                  __html: `${locale?.[item?.language!]?.CARD_SUBTITLE_TWO} : ${
                    item?.location
                  } `,
                }}
              />
              <SubTitle
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
          <Special
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
                boxShadow: "1px 10px 10px -10px #f5e1fd",
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
                  style={{ fontSize: "48px", color: "#d6753d", width: "50px" }}
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
          <Special
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
                <List sx={{ p: 0, mb: 4 }}>
                  {/* @ts-ignore */}
                  {listComments?.map((comment: any, idx: string) => (
                    <CommentList
                      {...{ comment, idx }}
                      key={idx}
                      bgColor="#f9dab2"
                      textColor="#131313"
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
          color="#f9dab2"
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

export default Layout14;
