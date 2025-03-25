import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Cormorant_SC,
  Libre_Caslon_Display,
  Love_Light,
  Luxurious_Script,
  Playfair_Display,
  Source_Serif_4,
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
const cormorant = Cormorant_SC({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});
const luxurious = Luxurious_Script({ subsets: ["latin"], weight: "400" });
const lovelLight = Love_Light({ subsets: ["latin"], weight: ["400"] })
const libreCaslon = Libre_Caslon_Display({ subsets: ["latin"], weight: ["400"] })
const sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700"] })

interface DateTimeConfig {
  countdownTimer: {
    d: number;
    h: number;
    m: number;
    s: number;
  };
}

const Title = styled("h1")(() => ({
  color: "#333",
  lineHeight: "0.75em",
  fontFamily: `${luxurious.style.fontFamily} !important` || "auto",
  fontSize: "56px",
  textAlign: "center",
  fontWeight: "lighter",
}));

const SubTitle = styled("p")(() => ({
  color: " #333",
  fontSize: "24px",
  fontWeight: "300",
  fontFamily: `${libreCaslon.style.fontFamily} !important` || "auto",
  textAlign: "center",
}));

const Text = styled("p")(() => ({
  color: "#1e1e1e",
  fontFamily: `${sourceSerif.style.fontFamily} !important` || "auto",
  fontSize: "16px",
  textAlign: "center",
  fontWeight: "300",
  letterSpacing: "0.05em"
}));

const MiniText = styled("p")(() => ({
  color: "#1e1e1e",
  fontFamily: `${sourceSerif.style.fontFamily} !important` || "auto",
  fontSize: "14px",
  textAlign: "center",
  letterSpacing: "0.1em",
}));

const UbuntuText = styled("p")(() => ({
  fontFamily: `${sourceSerif.style.fontFamily} !important` || "auto",
  fontWeight: "700",
  fontSize: "16px",
  textAlign: "center",
}));

const Layout10: React.FC = () => {
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
        background: "#FFFAEB",
        boxShadow: "1px 1px 10px #FFFAEB",
        m: "auto",
        position: "relative",
        overflow: "hidden",
        height: clickOpen ? "100%" : "100vh",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => setMusicStart(true)}
    >
      <Door color="#f1f0e5" {...{ clickOpen, setClickOpen }} syafiqKhairi>
        <Box display={"flex"}>
          <Title
            sx={{ ml: "-8px" }}
            dangerouslySetInnerHTML={{
              __html: "S",
            }}
          />
          <Title
            dangerouslySetInnerHTML={{
              __html: "N",
            }}
          />
        </Box>
        <Text sx={{ mb: "-12px" }} dangerouslySetInnerHTML={{
          __html: "Buka",
        }} />
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
        <Box sx={{ position: "absolute", top: "-85px", left: "-75px", transform: "scaleY(-1)", zIndex: 1 }}>
          <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "-85px",
            right: "-75px",
            transform: "scaleX(-1) scaleY(-1)",
            zIndex: 1
          }}
        >
          <Image
            src="/media/syafiq/syafiq_flower.webp"
            alt="Syafiq Nabilah | Pulpen Studio"
            width={260}
            height={200}
          />
        </Box>
        <Box sx={{ position: "absolute", bottom: "-65px", right: "-75px", transform: "scaleX(-1)", zIndex: 1 }}>
          <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
        </Box>
        <Box sx={{ position: "absolute", bottom: "-65px", left: "-75px", transform: "scaleX(-1)", zIndex: 1 }}>
          <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
        </Box>
        <Box sx={{ position: "absolute", bottom: "-65px", left: "60px", transform: "scaleX(-50px)", zIndex: 1 }}>
          <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
        </Box>
        <Box sx={{
          position: "absolute",
          top: "56%",
          left: "52%",
          transform: "translate(-50%,-50%)",
          zIndex: "0",
          width: "90%",
          height: "86%"
        }}>
          <Image src="/media/syafiq/syafiq_arch.webp" alt="Syafiq Nabilah | Pulpen Studio" width={300} height={500} style={{ width: "100%", height: "auto" }} />
        </Box>

        <Box sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}>
          <Title sx={{ fontSize: "180px", opacity: "0.1", marginLeft: "-120px" }} dangerouslySetInnerHTML={{ __html: "S" }} />
          <Title sx={{ fontSize: "180px", opacity: "0.1", marginRight: "-20px", mt: -1 }} dangerouslySetInnerHTML={{ __html: "N" }} />
        </Box>

        <Box sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}>
          <Text sx={{ fontSize: "14px" }} dangerouslySetInnerHTML={{ __html: "MAJLIS PERKAHWINAN" }} />
          <Box my={4}>
            <SubTitle sx={{ fontSize: "48px", ml: "-56px" }} dangerouslySetInnerHTML={{ __html: "SYAFIQ" }} />
            <SubTitle sx={{ fontSize: "24px" }} dangerouslySetInnerHTML={{ __html: "&" }} />
            <SubTitle sx={{ fontSize: "48px", mr: "-56px" }} dangerouslySetInnerHTML={{ __html: "NABILAH" }} />
          </Box>
          <Box display="flex" alignItems="center" justifyContent={"center"} mt={-2} gap={.5}>
            <Box>
              <Text sx={{ fontSize: "14px" }} dangerouslySetInnerHTML={{ __html: "MEI" }} />
            </Box>
            <Box>
              <SubTitle sx={{ fontSize: "48px", fontWeight: "500" }} dangerouslySetInnerHTML={{ __html: "3" }} />
            </Box>
            <Box>
              <Text sx={{ fontSize: "14px" }} dangerouslySetInnerHTML={{ __html: "2025" }} />
            </Box>
          </Box>
          <Text sx={{ fontSize: "14px", mt: -1 }} dangerouslySetInnerHTML={{ __html: "5 ZULKAEDAH 1446" }} />
        </Box>

      </Box>
      <Container sx={{ position: "relative" }}>
        <Box sx={{ position: "absolute", top: "0", right: "-200px", transform: "scaleX(-1)", zIndex: 1 }}>
          <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
        </Box>
        <Box sx={{ position: "absolute", top: "290px", right: "-200px", transform: "scaleY(-1)", zIndex: 1 }}>
          <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
        </Box>

        <Box sx={{ position: "absolute", top: "60px", left: "-200px", transform: "scaleX(-1)", zIndex: 1 }}>
          <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
        </Box>
        <Box sx={{ position: "absolute", top: "320px", left: "-200px", transform: "scaleY(-1)", zIndex: 1 }}>
          <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
        </Box>

        <Box sx={{ position: "absolute", top: "270px", left: "-200px", transform: "scaleX(-1)", zIndex: 1 }}>
          <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
        </Box>
        <Box sx={{ position: "absolute", top: "440px", left: "-200px", transform: "scaleX(-1)", zIndex: 1 }}>
          <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
        </Box>

        <Box sx={{ position: "absolute", top: "730px", right: "-200px", transform: "scaleY(-1)", zIndex: 1 }}>
          <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
        </Box>
        <Box sx={{ position: "absolute", top: "620px", right: "-200px", transform: "scaleX(-1)", zIndex: 1 }}>
          <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
        </Box>


        <Box sx={{ background: "#ffe6dc", position: "relative", pt: "24px" }}>
          <Box
            mt={1}
            mb={5}
            mx="auto"
            sx={{
              p: { xs: "24px 16px", md: "64px 32px 16px" },
            }}
          >
            <Text
              sx={{ mb: 3 }}
              dangerouslySetInnerHTML={{
                __html: 'Assalamualaikum wbt <br />Salam Sejahtera',
              }}
            />
            <Text
              sx={{ fontWeight: "700", mb: 3 }}
              dangerouslySetInnerHTML={{
                __html: "Ahmad Khairi Bin Abdul Hamid<br/>&<br />Noreiney Binti Shahiran",
              }}
            />
            <Text
              sx={{ mb: 3 }}
              dangerouslySetInnerHTML={{
                __html: locale?.[item?.language!]?.CARD_TEXT,
              }}
            />
            <Text
              sx={{
                mb: 3,
                fontWeight: "700"
              }}
              dangerouslySetInnerHTML={{
                __html: `${item?.fullNameGroom} <br/>&<br /> ${item?.fullNameBride}`,
              }}
            />
          </Box>
          <Box
            sx={{
              mx: -2,
              py: 1,
              position: "relative",
            }}
          >
            <Box
              sx={{
                mx: 2,
                px: 2
              }}
            >
              <Text
                sx={{ fontWeight: "700" }}
                dangerouslySetInnerHTML={{
                  __html: locale?.[item?.language!]?.CARD_TITLE_FIRST,
                }}
              />
              <Box mt={2} sx={{ textAlign: "center" }}>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: `11.00am - 4.00pm  : Majlis bermula `,
                  }}
                />
                <Text
                  dangerouslySetInnerHTML={{
                    __html: `12.30pm  : Ketibaan Pengantin `,
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
            <Text
              dangerouslySetInnerHTML={{
                __html: locale?.[item?.language!]?.CARD_COUNTDOWN_TITLE,
              }}
              sx={{ pb: 2, fontWeight: "700" }}
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
                  boxShadow: "1px 10px 10px -10px #aa344e",
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
                      __html: `${countdownTimer?.countdownTimer.h
                        } <span style="font-size: 12px">${locale?.[item?.language!]?.COUNTDOWN_HOUR
                        }</span>`,
                    }}
                  />
                  <Text
                    style={{ fontSize: "24px" }}
                    dangerouslySetInnerHTML={{
                      __html: `${countdownTimer?.countdownTimer.m
                        } <span style="font-size: 12px">${locale?.[item?.language!]?.COUNTDOWN_MINUTE
                        }</span>`,
                    }}
                  />
                </Box>
                <Box>
                  <Text
                    style={{
                      fontSize: "48px", color: "#aa344e", width: "50px"
                    }}
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
            <Text
              dangerouslySetInnerHTML={{
                __html: locale?.[item?.language!]?.CARD_WISH_TITLE,
              }}
              sx={{ pb: 2, fontWeight: "700" }}
            />
            <Text
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
                        bgColor="#f1f0e5"
                        textColor="#333"
                      />
                    ))}
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Box>
        <Widget
          language={item?.language!}
          iconColor="#FFFAEB"
          color="rgba(149,8,43, 0.8)"
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

export default Layout10;
