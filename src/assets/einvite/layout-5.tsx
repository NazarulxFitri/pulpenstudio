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
  fontFamily: `${dancingScript.style.fontFamily} !important` || "auto",
  textAlign: "center",
}));

const SubTitle = styled("p")(() => ({
  fontFamily: `${tangerine.style.fontFamily} !important` || "auto",
  fontSize: "32px",
  textAlign: "center",
}));

const Text = styled("p")(() => ({
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
  fontSize: "12px",
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

const Layout5: React.FC = () => {
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
      <Door color="#fcf5f3" {...{ clickOpen, setClickOpen }}>
        <SubTitle
          dangerouslySetInnerHTML={{
            __html: item?.title1Groom!,
          }}
        />
        <SubTitle
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
      
      <Box         display={clickOpen ? "block" : "none"}
        sx={{
          borderBottom: "1px solid #EFEFEF",
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{ color: "#5a0819", padding: "344px 16px", position: "relative" }}
        >
          <Box sx={{ position: "absolute", top: "-56px", left: "-40px" }} className="animate__animated animate__fadeInDown animate__slow ">
            <Image
              src="/media/animation/layout5-flowers.png"
              alt="Pulpen Studio - Flourish Gloom"
              width={400}
              height={400}
            />
          </Box>
          <Box sx={{ position: "absolute", bottom: "72px", right: "-96px" }} className="animate__animated animate__fadeInUp animate__slow">
            <Image
              src="/media/animation/layout5-flowers-1.png"
              alt="Pulpen Studio - Flourish Gloom"
              width={400}
              height={400}
            />
          </Box>
          <Box sx={{ position: "absolute", bottom: "180px", left: "0" }} className="animate__animated animate__fadeInUp animate__slow">
            <Image
              src="/media/animation/layout5-art.webp"
              alt="Pulpen Studio - Flourish Gloom"
              width={161}
              height={297}
            />
          </Box>
          <Box>
            <Text
              style={{ letterSpacing: "0.5em" }}
              dangerouslySetInnerHTML={{
                __html: "<i>WALIMATULURUS</i>",
              }}
            />
            <Title
              className="animate__animated animate__zoomIn animate__slow"
              style={{ marginTop: "24px", lineHeight: "0.75em" }}
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
                dangerouslySetInnerHTML={{ __html: monthText }}
              />
              <MiniText
                style={{ fontSize: "16px" }}
                dangerouslySetInnerHTML={{
                  __html: `${dayText} <br> ${dateText}`,
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
                marginTop: "24px",
                fontSize: "12px",
              }}
              dangerouslySetInnerHTML={{ __html: item?.location! }}
            />
            <MiniText
              className="animate__animated animate__zoomIn animate__slow animate__delay-3s"
              style={{
                fontSize: "12px",
              }}
              dangerouslySetInnerHTML={{
                __html: `#${item?.title1Groom}${item?.title1Bride}`,
              }}
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
              __html: locale?.[item?.language!]?.CARD_TEXT,
            }}
          />
          <Text
            sx={{
              color: "#5a0819",
              fontSize: "20px",
              mb: 3,
              textShadow: "1px 1px 10px #FDE6E8",
            }}
            dangerouslySetInnerHTML={{
              __html: `${item?.fullNameGroom} <br>&<br> ${item?.fullNameBride}`,
            }}
          />
        </Box>

        <Box
          sx={{
            borderTop: "1px solid #FDE6E8",
            borderBottom: "1px solid #FDE6E8",
            mx: -2,
            py: 8,
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-60px",
              right: "-40px",
              transform: "rotate(90deg)",
            }}
          >
            <Image
              src="/media/animation/layout5-flowers.png"
              alt="Pulpen Studio - Flourish Gloom"
              width={200}
              height={200}
            />
          </Box>
          <Box sx={{ position: "absolute", bottom: "180px", left: "0" }}>
            <Image
              src="/media/animation/layout5-art.webp"
              alt="Pulpen Studio - Flourish Gloom"
              width={100}
              height={250}
            />
          </Box>
          <Box sx={{ mx: 2 }}>
              <Box
            sx={{
              mx: 2,
            }}
          >
            <Box sx={{ textAlign: "left", padding: "0 32px"}}>
        <Text
          sx={{ fontSize: "12px", mt: 6,  }}
          dangerouslySetInnerHTML={{
            __html: "<b>ATUR CARA</b> | <i>TENTATIVES</i><br><br>11:00a.m - 4:00p.m",
          }}
        />

        <Text
          sx={{ fontSize: "12px", mt: 2, mb: 1,  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Sesi Pertama</b> | <i>First Session</i>",
          }}
        />
        <Box sx={{ display: "inline-flex"}}>
           <Text
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>11:00</b>",
            }}
          />
          <Text
            sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>Majlis Resepsi Bermula</b> <br> <i>Start of Wedding Reception</i>",
            }}
          />
        </Box>
        
        <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>11:30</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5,  textAlign: "left" }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Ketibaan Pengantin</b> <br> <i>Arrival of Bride & Groom</i>",
          }}
        />
        </Box>
        
        <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>11:45</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5, textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Salam Restu <br/>(Ibu bapa & Saudara-mara)</b> <br> <i>Blessings Ceremony <br/>(Parents & Relatives)</i>",
          }}
        />
        </Box>

        <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>12:45</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5, textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Pengantin Rehat</b> <br> <i>Bride & Groom One-hour Break</i>",
          }}
        />
        </Box>
        

        <Text
          sx={{ fontSize: "12px", mt: 2, mb:1,  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Sesi Kedua</b> | <i>Second Session</i>",
          }}
        />

        <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>13:45</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5, textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Ketibaan Semula Pengantin</b> <br> <i>Re-arrival of Bride & Groom</i>",
          }}
        />
        </Box>

        <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>14:45</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5, textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Upacara Memotong Kek</b> <br> <i>Cake Cutting Ceremony</i>",
          }}
        />
        </Box>

         <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>16:00</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5, textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Majlis Bersurai</b> <br> <i> End of Wedding Reception</i>",
          }}
        />
        </Box>     
        </Box>
          </Box>
          </Box>
        </Box>

        <Box
          sx={{
            px: 2,
            py: 4,
          }}
        >
          <Text
            dangerouslySetInnerHTML={{
              __html: "<b>MENGHITUNG HARI</b> | <i>COUNTING THE DAYS</i>",
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
              <Text
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
          id="comment"
          mb={2}
          sx={{
            px: 2,
            pt: 4,
            pb: 10
          }}
        >
          <Text
            dangerouslySetInnerHTML={{
              __html: "<b>UCAPAN</b> | <i>WISHES</i>",
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
                      bgColor="#fff"
                      textColor="#5a0819"
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
          iconColor="#333"
          color="#fbecec"
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

export default Layout5;
