// Modified layout - 16 January 2024 | Izzati & Nazarul
import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import { Allura, Playfair_Display, Ubuntu } from "next/font/google";
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

interface DateTimeConfig {
  countdownTimer: {
    d: number;
    h: number;
    m: number;
    s: number;
  };
}

const Special = styled("p")(() => ({
  color: "#293927",
  fontFamily: `${allura.style.fontFamily} !important` || "auto",
  fontSize: "24px",
  textAlign: "center",
}));

const Title = styled("h1")(() => ({
  color: "#293927",
  lineHeight: "0.75em",
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
  fontSize: "32px",
  textAlign: "center",
  fontWeight: "lighter",
}));

const SubTitle = styled("p")(() => ({
  color: "#293927",
  fontSize: "14px",
  fontWeight: "300",
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
  textAlign: "center",
  letterSpacing: "0.25em",
  textTransform: "uppercase",
}));

const Text = styled("p")(() => ({
  color: "#293927",
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

const Layout999: React.FC = () => {
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
        background: "#fcfcf4",
        boxShadow: "1px 1px 10px #b4bca9",
        m: "auto",
        position: "relative",
        overflow: "hidden",
        height: clickOpen ? "100%" : "100vh",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => setMusicStart(true)}
    >
      <Door color="#b4bca9" {...{ clickOpen, setClickOpen }}>
        <Special
          sx={{ color: "#FFF", fontSize: "24px", mt: 1 }}
          dangerouslySetInnerHTML={{
            __html: "Nurul Izzati",
          }}
        />
        <Special
          sx={{ color: "#FFF", fontSize: "24px" }}
          dangerouslySetInnerHTML={{
            __html: "Nazarul Fitri",
          }}
        />
        <MiniText
          sx={{ color: "#FFF", mt: 1, fontWeight: "700" }}
          dangerouslySetInnerHTML={{
            __html: "Buka",
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
      <Box sx={{ height: "100vh", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0%",
            marginTop: "-60px",
            opacity: "0.5",
          }}
        >
          <Image
            src="/media/animation/layout12-art.webp"
            alt="Pulpen Studio Green Leaf"
            width={400}
            height={400}
          />
        </Box>
        <Box
          className="animate__animated animate__zoomIn animate__slow"
          sx={{
            position: "absolute",
            top: "-200px",
            transform: "rotate(220deg)",
          }}
        >
          <Image
            src="/media/animation/layout12-flower.webp"
            alt="Pulpen Studio Green Leaf"
            width={231}
            height={441}
          />
        </Box>
        <Box
          className="animate__animated animate__zoomIn animate__slow"
          sx={{
            position: "absolute",
            top: "-160px",
            right: "-60px",
            transform: "rotate(140deg) scaleX(-1)",
          }}
        >
          <Image
            src="/media/animation/layout12-flower.webp"
            alt="Pulpen Studio Green Leaf"
            width={231}
            height={441}
          />
        </Box>
        <Box
          className="animate__animated animate__zoomIn animate__slow"
          sx={{
            position: "absolute",
            bottom: "-80px",
            transform: "rotate(40deg)",
            right: "-80px",
          }}
        >
          <Image
            src="/media/animation/layout12-flower.webp"
            alt="Pulpen Studio Green Leaf"
            width={231}
            height={441}
          />
        </Box>
        <Box
          className="animate__animated animate__zoomIn animate__slow"
          sx={{
            position: "absolute",
            bottom: "-80px",
            transform: "rotate(-40deg) scaleX(-1)",
            left: "-80px",
          }}
        >
          <Image
            src="/media/animation/layout12-flower.webp"
            alt="Pulpen Studio Green Leaf"
            width={231}
            height={441}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            marginTop: "-60px",
          }}
        >
          <Box>
            <SubTitle
              className="animate__animated animate__zoomIn animate__slow"
              dangerouslySetInnerHTML={{
                __html: "Majlis Pernikahan",
              }}
              sx={{ mb: 5 }}
            />
            <Box
              mb={5}
              className="animate__animated animate__zoomIn animate__slow animate__delay-1s"
            >
              <Title
                dangerouslySetInnerHTML={{
                  __html: `${item?.title1Groom}`,
                }}
                sx={{ mb: 2, ml: -4 }}
              />
              <Title
                dangerouslySetInnerHTML={{
                  __html: "<3",
                }}
                sx={{ mb: 2, fontSize: "16px" }}
              />
              <Title
                dangerouslySetInnerHTML={{
                  __html: `${item?.title1Bride}`,
                }}
                sx={{ mr: -4 }}
              />
            </Box>
            <Box
              sx={{ display: "flex", mb: 1 }}
              className="animate__animated animate__zoomIn animate__slow animate__delay-2s"
            >
              <SubTitle
                dangerouslySetInnerHTML={{ __html: dayText + `,` }}
                sx={{ mr: 1 }}
              />
              <SubTitle
                dangerouslySetInnerHTML={{ __html: `9.00am,` }}
                sx={{ mr: 1 }}
              />
              <SubTitle
                dangerouslySetInnerHTML={{ __html: `${dateText}` }}
                sx={{ fontWeight: "bolder" }}
              />
              <SubTitle
                dangerouslySetInnerHTML={{ __html: `${monthText}` }}
                sx={{ fontWeight: "bolder" }}
              />
              <SubTitle
                dangerouslySetInnerHTML={{ __html: `${yearText} ` }}
                sx={{ fontWeight: "bolder" }}
              />
            </Box>
            <Special
              sx={{ mt: 2 }}
              dangerouslySetInnerHTML={{ __html: item?.location! }}
              className="animate__animated animate__zoomIn animate__slow animate__delay-3s"
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
              __html: `Kami dengan penuh kesyukuran ke hadrat Ilahi ingin mengundang encik / cik / tuan / puan / dato' / datin ke majlis pernikahan puteri kesayangan kami `,
            }}
          />
          <UbuntuText
            sx={{
              color: "#293927",
              mb: 3,
            }}
            dangerouslySetInnerHTML={{
              __html: `${item?.fullNameGroom} & ${item?.fullNameBride}`,
            }}
          />
        </Box>

        <Box
          sx={{
            mx: -2,
            py: 8,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              opacity: "0.6",
              position: "absolute",
              bottom: "-120px",
              transform: "rotate(-40deg) scaleX(-1)",
              left: "-180px",
            }}
          >
            <Image
              src="/media/animation/layout12-flower.webp"
              alt="Pulpen Studio Green Leaf"
              width={231}
              height={441}
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
                style={{ marginBottom: "8px" }}
                dangerouslySetInnerHTML={{
                  __html: `Jemputan tetamu : ${timeStart} - 1:00 PM`,
                }}
              />
              <MiniText
                style={{ marginBottom: "8px" }}
                dangerouslySetInnerHTML={{
                  __html: `Akad Nikah : 10:00 AM`,
                }}
              />
              <MiniText
                
                dangerouslySetInnerHTML={{
                  __html: `Tema Pakaian : Off White / Putih`,
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
                boxShadow: "1px 10px 10px -10px #b4bca9",
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
                  style={{ fontSize: "48px", color: "#293927", width: "50px" }}
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
        />
      </Container>
      <Box>
        <Widget
          hideRsvp={true}
          hideEdit={true}
          language={item?.language!}
          iconColor="#131313"
          color="#b4bca9"
          location={{ text: item?.location!, mapUrl: item?.mapUrl! }}
          contact={{
            number1: item?.phonePerson1!,
            number2: item?.phonePerson2!,
            number3: item?.phonePerson3!,
            number4: item?.phonePerson4!,
            name1: item?.namePerson1!,
            name2: item?.namePerson2!,
            name3: item?.namePerson3!,
            name4: item?.namePerson4!,
          }}
        />
      </Box>
    </Box>
  );
};

export default Layout999;
