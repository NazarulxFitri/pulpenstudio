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
import { CommentList } from "@/components";
import Image from "next/image";

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
  // @ts-ignore
  const item = data?.data;
  // @ts-ignore
  const listComments = data?.comments;
  const musicUrl = item?.musicUrl;
  const dateJs = new Date(item?.dateTime);
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
        boxShadow: "0px -10px 10px #7c1d64",
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
          borderBottom: "1px solid #EFEFEF",
          position: "relative",
          height: "100vh",
        }}
      >
        <Box sx={{ position: "absolute", top: "0", left: "-20px" }}>
          <Image
            src="/media/animation/layout3-art.png"
            alt="layout3-art"
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
          }}
        >
          <Image
            src="/media/animation/layout3-art-1.png"
            alt="layout3-art"
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
            sx={{
              color: "#7c1d64",
              letterSpacing: "0.5em",
              mb: 5,
              fontSize: "20px",
            }}
            dangerouslySetInnerHTML={{ __html: "WALIMATULURUS" }}
          />
          <Box sx={{ position: "relative" }}>
            <Image
              src="/media/animation/layout3-flowers.png"
              alt="layout3-flowers"
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
            sx={{
              color: "#7c1d64",
              fontWeight: "700",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
            dangerouslySetInnerHTML={{ __html: fullDate }}
          />
          <Text
            sx={{
              color: "#7c1d64",
            }}
            dangerouslySetInnerHTML={{ __html: item?.location }}
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
              __html: "Assalamualaikum w.b.t & Salam Sejahtera",
            }}
          />
          <UbuntuText
            sx={{ fontWeight: "bolder", mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: item?.title2,
            }}
          />
          <MiniText
            sx={{ mb: 3 }}
            dangerouslySetInnerHTML={{
              __html:
                "Dengan segala hormatnya kami menjemput Dato | Datin | Tuan | Puan | Encik | Cik hadir ke majlis perkahwinan anakanda kami",
            }}
          />
          <UbuntuText
            sx={{
              fontWeight: "bolder",
              mb: 3,
              textShadow: "1px 1px 10px #FDE6E8",
            }}
            dangerouslySetInnerHTML={{
              __html: `${item?.title1Groom} & ${item?.title1Bride}`,
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
                __html: "Aturcara majlis",
              }}
            />
            <Box mt={2} sx={{ textAlign: "center" }}>
              <MiniText
                dangerouslySetInnerHTML={{
                  __html: `Tarikh : ${fullDate} `,
                }}
              />
              <MiniText
                dangerouslySetInnerHTML={{
                  __html: `Lokasi : ${item?.location} `,
                }}
              />
              <MiniText
                dangerouslySetInnerHTML={{
                  __html: `Jamuan makan : ${timeStart} `,
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
            dangerouslySetInnerHTML={{ __html: "Menghitung Hari" }}
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
              <SubTitle>Harinya sudah tiba !</SubTitle>
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
                hari
              </TimeBox>
              <TimeBox>
                {countdownTimer?.countdownTimer.h}
                <br />
                jam
              </TimeBox>
              <TimeBox>
                {countdownTimer?.countdownTimer.m}
                <br />
                minit
              </TimeBox>
              <TimeBox>
                {countdownTimer?.countdownTimer.s}
                <br />
                saat
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
            dangerouslySetInnerHTML={{ __html: "Ucapan" }}
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
          iconColor="#FFF"
          color="#7c1d64"
          location={{ text: item?.location, mapUrl: item?.mapUrl }}
          contact={{
            number1: item?.phonePerson1,
            number2: item?.phonePerson2,
            name1: item?.namePerson1,
            name2: item?.namePerson2,
          }}
        />
      </Box>
    </Box>
  );
};

export default Layout3;
