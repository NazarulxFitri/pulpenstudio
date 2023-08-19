import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import { Great_Vibes, Poiret_One, Ubuntu } from "next/font/google";
import useGetEinvite from "@/data/useGetEinvite";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useGetCountDownTimer from "@/data/useGetCountDownTimer";
import Widget from "@/components/Widget";
import ReactPlayer from "react-player";

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

const Title = styled("h1")(({ theme }) => ({
  fontFamily: `${greatVibes.style.fontFamily} !important` || "auto",
  fontSize: "56px",
  fontWeight: "lighter",
  textAlign: "center",
}));

const SubTitle = styled("p")(({ theme }) => ({
  fontFamily: `${greatVibes.style.fontFamily} !important` || "auto",
  fontSize: "32px",
  textAlign: "center",
}));

const Text = styled("p")(({ theme }) => ({
  fontFamily: `${poiretOne.style.fontFamily} !important` || "auto",
  fontSize: "16px",
}));

const MiniText = styled("p")(({ theme }) => ({
  fontFamily: `${poiretOne.style.fontFamily} !important` || "auto",
  fontSize: "16px",
  textAlign: "center",
}));

const UbuntuText = styled("p")(({ theme }) => ({
  fontFamily: `${ubuntu.style.fontFamily} !important` || "auto",
  fontWeight: "700",
  fontSize: "16px",
  textAlign: "center",
}));

const TimeBox = styled(Box)(() => ({
  fontSize: "16px",
  textAlign: "center",
}));

const Layout1: React.FC = () => {
  const router = useRouter();
  const eInviteId = router.query.eInviteId;
  const [countdownTimer, setCountdownTimer] = useState<DateTimeConfig>();

  const { data } = useGetEinvite(eInviteId as string);
  // @ts-ignore
  const item = data?.data;
  // @ts-ignore
  const comments = data?.comments;

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
  const [open, setOpen] = useState(false);
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
      onClick={() => setMusicStart(true)}
    >
      <Box sx={{ visibility: "hidden", position: "absolute" }}>
        <ReactPlayer
          url="https://www.youtube.com/embed/M-iIFo6wJ_w"
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
            background: "#FFF",
            borderTopLeftRadius: "100px",
            borderBottomRightRadius: "100px",
            p: "80px 16px",
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
          <SubTitle sx={{ mb: 5 }} dangerouslySetInnerHTML={{ __html: "﷽" }} />
          <MiniText
            sx={{ letterSpacing: "0.5em", mb: 5 }}
            dangerouslySetInnerHTML={{ __html: "WALIMATULURUS" }}
          />
          <Title
            sx={{ mb: 5, textShadow: "8px 8px 8px #FDE6E8" }}
            dangerouslySetInnerHTML={{
              __html: `${item?.title1Groom} <br/> & <br/> ${item?.title1Bride}`,
            }}
          />
          <Grid container justifyContent="left" mb={5} rowSpacing={0.5}>
            <Grid item borderLeft="8px solid #FDE6E8" px={2}>
              <Text dangerouslySetInnerHTML={{ __html: fullDate }} />
            </Grid>
            <Grid item borderLeft="8px solid #FDE6E8" px={2}>
              <Text dangerouslySetInnerHTML={{ __html: item?.location }} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#FFF",
          borderRadius: "24px",
          boxShadow: "1px 1px 10px #FDE6E8",
          display: open ? "none" : "block",
          left: "0",
          right: "0",
          px: 4,
          py: 2,
          position: "absolute",
          m: "-128px auto 0",
          width: "fit-content",
          zIndex: 2,
        }}
        onClick={() => {
          setMusicStart(true);
          setOpen(true);
        }}
      >
        <UbuntuText>Klik untuk buka</UbuntuText>
      </Box>
      <Container sx={{ display: open ? "block" : "none" }}>
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
              <Text
                dangerouslySetInnerHTML={{
                  __html: `Tarikh : ${fullDate} `,
                }}
              />
              <Text
                dangerouslySetInnerHTML={{
                  __html: `Lokasi : ${item?.location} `,
                }}
              />
              <Text
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
                  {comments?.map((comment: any, idx: string) => (
                    <Box
                      key={idx}
                      mb={2}
                      sx={{
                        background:
                          Number(idx) % 2 === 0
                            ? "rgba(253,230,232, 0.4)"
                            : "rgba(240,240,240, 0.4)",
                        borderRadius: "24px",
                        p: "16px 24px",
                      }}
                    >
                      <UbuntuText
                        sx={{
                          textAlign: "left",
                          fontWeight: "bolder",
                          marginBottom: "8px",
                        }}
                        dangerouslySetInnerHTML={{ __html: comment?.name! }}
                      />
                      <MiniText
                        sx={{ textAlign: "left" }}
                        dangerouslySetInnerHTML={{ __html: comment?.message! }}
                      />
                    </Box>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box sx={{ display: open ? "block" : "none" }}>
        <Widget
          {...{ musicStart }}
          color="#FDE6E8"
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

export default Layout1;
