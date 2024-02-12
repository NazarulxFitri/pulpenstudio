// Modified layout - 5 Februari 2024 | Izzati & Nazarul
import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Dancing_Script,
  Playfair_Display,
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
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
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
  color: "#5a0819",
  fontFamily: `${dancingScript.style.fontFamily} !important` || "auto",
  textAlign: "center",
}));

const SubTitle = styled("p")(() => ({
  fontFamily: `${tangerine.style.fontFamily} !important` || "auto",
  fontSize: "32px",
  textAlign: "center",
}));

const Text = styled("p")(() => ({
  fontFamily: `${dancingScript.style.fontFamily} !important` || "auto",
  fontSize: "16px",
  textAlign: "center",
}));

const MiniText = styled("p")(() => ({
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

const Layout998: React.FC = () => {
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
        background: "#fcf5f3",
        boxShadow: "0px -10px 10px #fcf5f3",
        m: "auto",
        position: "relative",
        overflow: "hidden",
        height: clickOpen ? "100%" : "100vh",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => setMusicStart(true)}
    >
      <Door
        doorMainColor="#fcf5f3"
        color="#FFF"
        {...{ clickOpen, setClickOpen }}
      >
        <Title
          sx={{ color: "", fontWeight: "300", fontSize: "24px", mt: 1 }}
          dangerouslySetInnerHTML={{
            __html: "Nurul Izzati",
          }}
        />
        <Title
          sx={{ color: "", fontWeight: "300", fontSize: "24px" }}
          dangerouslySetInnerHTML={{
            __html: "Nazarul Fitri",
          }}
        />
        <MiniText
          sx={{ color: "#333", mt: 1, fontWeight: "300" }}
          dangerouslySetInnerHTML={{
            __html: "Buka",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            transform: "translate(-50%,-50%)",
            top: "20%",
            left: "50%",
            opacity: "0.4",
          }}
        >
          <Image
            src="/media/animation/layout-998-flower-falling.gif"
            alt="Pulpen Studio - Flourish Gloom"
            width={400}
            height={280}
          />
        </Box>
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
          borderBottom: "16px solid white",
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{ color: "#5a0819", padding: "344px 16px", position: "relative" }}
        >
          <Box
            sx={{
              position: "absolute",
              transform: "translate(-50%,-50%)",
              top: "40%",
              left: "50%",
              opacity: "0.4",
            }}
          >
            <Image
              src="/media/animation/layout-998-flower-falling.gif"
              alt="Pulpen Studio - Flourish Gloom"
              width={400}
              height={280}
            />
          </Box>
          <Box sx={{ position: "absolute", top: "-64px", left: "-48px" }}>
            <Image
              id="breathing-animation"
              src="/media/animation/layout5-flowers.png"
              alt="Pulpen Studio - Flourish Gloom"
              width={400}
              height={400}
            />
          </Box>
          <Box sx={{ position: "absolute", bottom: "72px", right: "-96px" }}>
            <Image
              id="breathing-animation"
              src="/media/animation/layout5-flowers-1.png"
              alt="Pulpen Studio - Flourish Gloom"
              width={400}
              height={400}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "20%",
              left: "-10%",
              opacity: "0.2",
            }}
          >
            <Image
              src="/media/animation/layout-998-flower-expand.webp"
              alt="Pulpen Studio - Flourish Gloom"
              width={184}
              height={204}
            />
          </Box>
          {/* <Box sx={{ position: "absolute", bottom: "180px", left: "0" }}>
            <Image
              src="/media/animation/layout5-art.webp"
              alt="Pulpen Studio - Flourish Gloom"
              width={161}
              height={297}
            />
          </Box> */}
          <Box>
            <MiniText
              style={{ letterSpacing: "0.5em" }}
              dangerouslySetInnerHTML={{
                __html: "MAJLIS PERKAHWINAN",
              }}
            />
            <Title
              className="animate__animated animate__zoomIn animate__slow"
              style={{
                marginTop: "24px",
                lineHeight: "0.75em",
                color: "lavenderblush",
                textShadow: "0 0 8px #5a0819",
              }}
              dangerouslySetInnerHTML={{
                __html: `<span style="margin-right: 24px;">${item?.title1Groom}</span> <br><span style="font-size: 20px">&</span><br> <spanstyle="margin-left: 24px;">${item?.title1Bride}</span>`,
              }}
            />
            <Box
              className="animate__animated animate__zoomIn animate__slow animate__delay-1s"
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 3,
                letterSpacing: "0.15em",
              }}
            >
              <MiniText
                style={{
                  fontSize: "16px",
                  borderRight: "1px solid #5a0819",
                  marginRight: "12px",
                  paddingRight: "12px",
                }}
                dangerouslySetInnerHTML={{ __html: "Mac" }}
              />
              <MiniText
                style={{ fontSize: "16px" }}
                dangerouslySetInnerHTML={{
                  __html: `${"Ahad"} <br> ${dateText}`,
                }}
              />

              <MiniText
                style={{
                  fontSize: "16px",
                  borderLeft: "1px solid #5a0819",
                  marginLeft: "12px",
                  paddingLeft: "12px",
                }}
                dangerouslySetInnerHTML={{ __html: `${yearText}` }}
              />
            </Box>
            <MiniText
              className="animate__animated animate__zoomIn animate__slow animate__delay-2s"
              style={{
                fontSize: "12px",
              }}
              dangerouslySetInnerHTML={{
                __html: `<span style="font-size: 32px;">11</span>.00AM <span style="margin: 0 8px;">sehingga</span> <span style="font-size: 32px;">4</span>.PM`,
              }}
            />
            <MiniText
              className="animate__animated animate__zoomIn animate__slow animate__delay-2s"
              style={{
                fontSize: "12px",
              }}
              dangerouslySetInnerHTML={{ __html: item?.location! }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        mt={3}
        mx="auto"
        sx={{
          borderBottom: "16px solid #FFF",
          p: { xs: "24px 16px", md: "64px 16px" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "-10%",
            opacity: "0.2",
          }}
        >
          <Image
            src="/media/animation/layout-998-flower-expand.webp"
            alt="Pulpen Studio - Flourish Gloom"
            width={184}
            height={204}
          />
        </Box>
        <MiniText
          sx={{ mb: 3, fontSize: "24px" }}
          dangerouslySetInnerHTML={{
            __html: "﷽",
          }}
        />
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
            __html:
              "Kami dengan penuh kesyukuran ke hadrat Ilahi ingin mengundang encik / cik / tuan / puan / dato' / datin ke majlis perkahwinan puteri kesayangan kami ",
          }}
        />
        <UbuntuText
          sx={{
            color: "#5a0819",
            fontWeight: "300",
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
          borderBottom: "16px solid white",
          mx: -2,
          mt: 5,
          pb: 5,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            transform: "translate(-50%,-50%)",
            top: "40%",
            left: "50%",
            opacity: "0.4",
          }}
        >
          <Image
            src="/media/animation/layout-998-flower-falling.gif"
            alt="Pulpen Studio - Flourish Gloom"
            width={400}
            height={280}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "-60px",
            right: "-40px",
            transform: "rotate(90deg)",
            opacity: "0.4",
          }}
        >
          <Image
            src="/media/animation/layout5-flowers.png"
            alt="Pulpen Studio - Flourish Gloom"
            width={200}
            height={200}
          />
        </Box>

        <Box sx={{ mx: 2 }}>
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
                __html: `${
                  locale?.[item?.language!]?.CARD_SUBTITLE_THREE
                } : ${timeStart} sehingga 4:00PM `,
              }}
            />
            <MiniText
              style={{ marginBottom: "8px" }}
              dangerouslySetInnerHTML={{
                __html: `${"Ketibaan pengantin"} : 12:30PM`,
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          px: 2,
          pt: 4,
          pb: 6,
          position: "relative",
          borderBottom: "16px solid #FFF",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            right: "-10%",
            opacity: "0.2",
            transform: "scaleX(-1)",
          }}
        >
          <Image
            src="/media/animation/layout-998-flower-expand.webp"
            alt="Pulpen Studio - Flourish Gloom"
            width={184}
            height={204}
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
                style={{ fontSize: "48px", color: "#5a0819", width: "50px" }}
                dangerouslySetInnerHTML={{
                  __html: `${countdownTimer?.countdownTimer.s} `,
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          borderBottom: "16px solid #FFF",
          py: 4,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            left: "-16%",
            opacity: "0.2",
          }}
        >
          <Image
            src="/media/animation/layout-998-flower-expand.webp"
            alt="Pulpen Studio - Flourish Gloom"
            width={184}
            height={204}
          />
        </Box>
        <MiniText
          sx={{ mb: 3, fontSize: "24px" }}
          dangerouslySetInnerHTML={{
            __html: "﷽",
          }}
        />
        <MiniText
          sx={{
            fontStyle: "italic",
            fontSize: "12px",
            lineHeight: "1.75em",
            width: "300px",
            display: "block",
            mx: "auto"
          }}
          dangerouslySetInnerHTML={{
            __html: `Ya Allah ya Tuhan kami, limpahkanlah rahmat dan keampunan Mu kepada pasangan pengantin, kurniakanlah keduanya ketenangan, kebahagiaan dan jiwa yang tabah menghadapi dugaan dan cabaran. Kurniakanlah keredhaan dan keinsafan kepada kedua pengantin supaya mereka dapat beramal ibadat ke jalan yang benar. Kekalkanlah jodoh mereka untuk selama-lamanya. <br/><br/>Aamin Ya Rabbal Alamin.`,
          }}
        />
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
        <Grid container>
          <Grid item py={2} xs={12}>
            <Paper
              sx={{
                background: "#FFF",
                boxShadow: "unset",
                height: "100%",
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
                    bgColor="#fff"
                    textColor="#5a0819"
                  />
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Widget
          hideRsvp={true}
          hideEdit={false}
          language={item?.language!}
          iconColor="#333"
          color="#fbecec"
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

export default Layout998;
