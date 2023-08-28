import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Arapey,
  Cormorant_Garamond,
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

const poiretOne = Poiret_One({ subsets: ["latin"], weight: "400" });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });
const tangerine = Tangerine({ subsets: ["latin"], weight: ["400", "700"] });
const arapey = Arapey({ subsets: ["latin"], weight: ["400"] });
const coromont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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

const CoromontText = styled("p")(() => ({
  fontFamily: `${coromont.style.fontFamily} !important` || "auto",
  fontSize: "20px",
  fontWeight: "300",
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

const TimeBox = styled(Box)(() => ({
  fontSize: "16px",
  textAlign: "center",
}));

const Layout2: React.FC = () => {
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
        boxShadow: "0px -10px 10px #656041",
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
            zIndex: "2",
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
              alt="layout2-flowers"
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
              alt="layout2-flowers"
              width="200"
              height="200"
              style={{ transform: "rotate(180deg)" }}
            />
          </Box>
          <Box sx={{ width: "100px", margin: "16px auto 0" }}>
            <SubTitle style={{ fontSize: "24px" }}>
              The <br />
              wedding <br />
              of
            </SubTitle>
          </Box>
          <Box sx={{ maxWidth: "280px", margin: "32px auto 0" }}>
            <Title
              style={{ fontSize: "64px", textShadow: "1px 1px 10px #333" }}
            >
              {item?.title1Groom} <br />
              {item?.title1Bride}
            </Title>
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
              <Text style={{ fontSize: "16px" }}>
                Dengan segala hormatnya, pihak kami menjemput anda untuk
                meraikan majlis perkahwinan kami
              </Text>
              <CoromontText
                style={{
                  marginTop: "32px",
                }}
              >
                {fullDate}
              </CoromontText>
              <CoromontText>{timeStart}</CoromontText>
              <CoromontText>{item?.location}</CoromontText>
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
          <Title
            sx={{
              background: "#7d7652",
              color: "#FFF",
              fontSize: "32px",
              p: "8px 24px",
              fontWeight: "bolder",
              mb: 3,
            }}
            dangerouslySetInnerHTML={{
              __html: `${item?.title1Groom} & ${item?.title1Bride}`,
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
              alt="layout2-flowers"
              width="200"
              height="200"
            />
          </Box>
          <Box sx={{ color: "#fff" }}>
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
              <SubTitle style={{ fontSize: "32px" }}>
                Harinya sudah tiba !
              </SubTitle>
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
          iconColor="#FFF"
          color="#7d7652"
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

export default Layout2;
