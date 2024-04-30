// Adib Kaman

import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Allura,
  Cormorant_SC,
  Ephesis,
  Imperial_Script,
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
const imperialScript = Imperial_Script({subsets: ["latin"], weight: ["400"]})
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
  color: "#dc9c14",
  lineHeight: "0.75em",
  fontFamily: `${imperialScript.style.fontFamily} !important` || "auto",
  fontSize: "48px",
  textAlign: "center",
  fontWeight: "lighter",
}));

const SubTitle = styled("p")(() => ({
  fontSize: "12px",
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

const Layout996: React.FC = () => {
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
        boxShadow: "1px 1px 10px #efefef",
        m: "auto",
        position: "relative",
        overflow: "hidden",
        height: clickOpen ? "100%" : "100vh",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => setMusicStart(true)}
    >
      <Door color="transparent" {...{ clickOpen, setClickOpen }}>
        <Title
                sx={{ fontSize: "24px", textShadow: "1px 1px 10px skyblue"}}

          dangerouslySetInnerHTML={{
            __html: `${item?.title1Groom!}`
          }}
        />
<Title
        sx={{ fontSize: "24px", display: "block", my: "10px"}}
          dangerouslySetInnerHTML={{
            __html: `&`,
          }}
        />
        <Title
        sx={{ fontSize: "24px" , textShadow: "1px 1px 10px skyblue"}}
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
        <Box sx={{ position: "absolute", top: "0", left: "0"}}>
          <Image src="/media/animation/floral-01.png" alt="Layout996 Pulpen Studio" width={400} height={280} />
        </Box>

        <Box sx={{ position: "absolute", bottom: "0", left: "0" }}>
          <Image src="/media/animation/floral-03.png" alt="Layout996 Pulpen Studio" width={400} height={280} />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            marginTop: "-30px",
            height: "70%",
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "100%"
            }}
          >
            <SubTitle
              className="animate__animated animate__fadeInDown animate__slow "
              sx={{ fontWeight: "bolder" }}
              dangerouslySetInnerHTML={{
                __html: locale?.[item?.language!]?.INTRO_FIRST,
              }}
            />
            <Box
              sx={{
                position: "relative",
                my: 4,
              }}
            >
              <Title
                className="animate__animated animate__fadeInDown animate__slow animate__delay-1s"
                dangerouslySetInnerHTML={{ __html: item?.title1Groom! }}
              />
              <Title dangerouslySetInnerHTML={{ __html: "&" }} sx={{ my: 2, fontSize: "40px" }} />
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
                  __html: "<b>30 Jun 2024 | Ahad | 11pagi - 4petang</b>",
                }}
              />
            </Box>

          </Box>
        </Box>
      </Box>
        <Box
          my={5}
          mx={"auto"}
          sx={{
            py: 8,
            px: 2,
            position: "relative",
          }}
        >
          <Box sx={{zIndex: "2"}}>
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
              __html: `${item?.fullNameGroom} <br>&<br> ${item?.fullNameBride}`,
            }}
          />
          </Box>
        </Box>

        <Box sx={{textAlign: "center"}}>
          <Image src="/media/animation/996-map.png" alt="Layout996 Pulpen Studio" width={360} height={360} />
          <Box>
            <SubTitle
            sx={{
              fontWeight: "700",
              mb: 3,
            }}
            dangerouslySetInnerHTML={{
              __html: `Sebening Embun Garden Event Hall`,
            }}
          /></Box>
        </Box>

        <Box sx={{ textAlign: "left", padding: "0 32px", mt: 10}}>
        <SubTitle
          sx={{ fontSize: "12px", mt: 6, fontWeight: "bold" }}
          dangerouslySetInnerHTML={{
            __html: "<b>ATUR CARA</b><br><br>11:00a.m - 4:00p.m",
          }}
        />

        <SubTitle
          sx={{ fontSize: "12px", mt: 2, mb: 1, }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Sesi Pertama</b>",
          }}
        />
        <Box sx={{ display: "inline-flex"}}>
           <SubTitle
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>11:00</b>",
            }}
          />
          <SubTitle
            sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
            dangerouslySetInnerHTML={{
              __html:
                "Majlis Resepsi Bermula",
            }}
          />
        </Box>
        
        <Box sx={{ display: "inline-flex"}}>
          <SubTitle
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>11:30</b>",
            }}
          />
          <SubTitle
          sx={{ fontSize: "12px", my: 0.5 , textAlign: "left" }}
          dangerouslySetInnerHTML={{
            __html:
              "Ketibaan Pengantin",
          }}
        />
        </Box>
        
        <Box sx={{ display: "inline-flex"}}>
          <SubTitle
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>11:45</b>",
            }}
          />
          <SubTitle
          sx={{ fontSize: "12px", my: 0.5, textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "Salam Restu (Ibu bapa & Saudara-mara)",
          }}
        />
        </Box>

        <Box sx={{ display: "inline-flex"}}>
          <SubTitle
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>12:45</b>",
            }}
          />
          <SubTitle
          sx={{ fontSize: "12px", my: 0.5, textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "Pengantin Rehat",
          }}
        />
        </Box>
        

        <SubTitle
          sx={{ fontSize: "12px", mt: 2, mb:1 }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Sesi kedua</b>",
          }}
        />

        <Box sx={{ display: "inline-flex"}}>
          <SubTitle
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>13:45</b>",
            }}
          />
          <SubTitle
          sx={{ fontSize: "12px", my: 0.5, textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "Ketibaan Semula Pengantin",
          }}
        />
        </Box>

        <Box sx={{ display: "inline-flex"}}>
          <SubTitle
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>14:45</b>",
            }}
          />
          <SubTitle
          sx={{ fontSize: "12px", my: 0.5, textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "Upacara Memotong Kek",
          }}
        />
        </Box>

         <Box sx={{ display: "inline-flex"}}>
          <SubTitle
            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>16.00</b>",
            }}
          />
          <SubTitle
          sx={{ fontSize: "12px", my: 0.5, textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "Majlis Bersurai",
          }}
        />
        </Box>     
        </Box>

        <Box
          sx={{
            mx: -2,
            py: 8,
            position: "relative",
            overflow: "hidden",
          }}
        >
          
        </Box>

        <Box
          sx={{
            px: 2,
            py: 4,
          }}
        >
          <SubTitle
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_COUNTDOWN_TITLE,
            }}
            sx={{ pb: 2 , fontWeight: "bold"}}
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
                boxShadow: "1px 10px 10px -10px #dc9c14",
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
                  style={{ fontSize: "48px", color: "#dc9c14", width: "50px" }}
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
          <SubTitle
            dangerouslySetInnerHTML={{
              __html: locale?.[item?.language!]?.CARD_WISH_TITLE,
            }}
            sx={{ pb: 2, fontWeight: "bold" }}
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
                  maxHeight: "400px",                }}
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

      <Box>
        <Widget
          language={item?.language!}
          iconColor="#dc9c14"
          color="rgba(255,255,255,0.8)"
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

export default Layout996;
