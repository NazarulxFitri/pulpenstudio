import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Cormorant_SC,
  Imperial_Script,
  Libre_Caslon_Display,
  Love_Light,
  Luxurious_Script,
  Playfair_Display,
  Source_Serif_4,
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
const imperialScript = Imperial_Script({ subsets: ["latin"], weight: ["400"] });
const tangerine = Tangerine({ subsets: ["latin"], weight: ["400", "700"] })

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
  fontFamily: `${imperialScript.style.fontFamily} !important` || "auto",
  fontSize: "30px",
  textAlign: "center",
}));

const UbuntuText = styled("p")(() => ({
  fontFamily: `${tangerine.style.fontFamily} !important` || "auto",
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
        <Text sx={{ mb: "-8px", fontSize: "12px" }} dangerouslySetInnerHTML={{
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
      {musicStart &&
        <Box>
          <Box sx={{ height: "100vh", position: "relative" }}>

            <Box sx={{ position: "absolute", top: { xs: "-65px", md: "-75px" }, left: "-75px", transform: "scaleY(-1)", zIndex: 1 }}>
              <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
            </Box>
            <Box sx={{ position: "absolute", top: { xs: "-65px", md: "-75px" }, left: "65px", transform: "scaleY(-1)", zIndex: 1 }}>
              <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: { xs: "-65px", md: "-75px" },
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
            <Box sx={{ position: "absolute", bottom: { xs: "65px", md: "-65px" }, right: "-75px", transform: "scaleX(-1)", zIndex: 1 }}>
              <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
            </Box>
            <Box sx={{ position: "absolute", bottom: { xs: "65px", md: "-65px" }, left: "-75px", transform: "scaleX(-1)", zIndex: 1 }}>
              <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
            </Box>
            <Box sx={{ position: "absolute", bottom: { xs: "65px", md: "-65px" }, left: "60px", transform: "scaleX(-50px)", zIndex: 1 }}>
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
              top: { xs: "45%", md: "50%" },
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}>
              <MiniText className="animate__animated animate__fadeIn animate__delay-1s animate__slower" sx={{ fontSize: "30px", fontWeight: "bolder" }} dangerouslySetInnerHTML={{ __html: "Majlis Perkahwinan" }} />
              <Box mt={2} mb={4}>
                <SubTitle className="animate__animated animate__fadeIn animate__delay-2s animate__slower" sx={{ fontSize: "48px", ml: "-56px" }} dangerouslySetInnerHTML={{ __html: "SYAFIQ" }} />
                <SubTitle className="animate__animated animate__fadeIn animate__delay-2s animate__slower" sx={{ fontSize: "24px" }} dangerouslySetInnerHTML={{ __html: "&" }} />
                <SubTitle className="animate__animated animate__fadeIn animate__delay-3s animate__slower" sx={{ fontSize: "48px", mr: "-56px" }} dangerouslySetInnerHTML={{ __html: "NABILAH" }} />
              </Box>
              <Box className="animate__animated animate__fadeIn animate__delay-4s animate__slower" display="flex" alignItems="center" justifyContent={"center"} mt={-3} gap={.5}>
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

              <Text className="animate__animated animate__fadeIn animate__delay-4s animate__slower" sx={{ fontSize: "14px", mt: -1 }} dangerouslySetInnerHTML={{ __html: "5 ZULKAEDAH 1446" }} />
              <Text className="animate__animated animate__fadeIn animate__delay-4s animate__slower" sx={{ fontSize: "12px", mt: 3 }} dangerouslySetInnerHTML={{ __html: '<i>"Dan Kami menciptakan kamu berpasang-pasangan"</i>' }} />
              <Text className="animate__animated animate__fadeIn animate__delay-4s animate__slower" sx={{ fontSize: "10px" }} dangerouslySetInnerHTML={{ __html: "Surah An- Naba' [78:8]" }} />

            </Box>

          </Box>
          <Container sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", top: "0", right: "-200px", transform: "scaleX(-1)", zIndex: 0 }}>
              <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
            </Box>
            <Box sx={{ position: "absolute", top: "290px", right: "-200px", transform: "scaleY(-1)", zIndex: 0 }}>
              <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
            </Box>

            <Box sx={{ position: "absolute", top: "60px", left: "-200px", transform: "scaleX(-1)", zIndex: 0 }}>
              <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
            </Box>
            <Box sx={{ position: "absolute", top: "320px", left: "-200px", transform: "scaleY(-1)", zIndex: 0 }}>
              <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
            </Box>

            <Box sx={{ position: "absolute", top: "270px", left: "-200px", transform: "scaleX(-1)", zIndex: 0 }}>
              <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
            </Box>
            <Box sx={{ position: "absolute", top: "440px", left: "-200px", transform: "scaleX(-1)", zIndex: 0 }}>
              <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
            </Box>

            <Box sx={{ position: "absolute", top: "730px", right: "-200px", transform: "scaleY(-1)", zIndex: 0 }}>
              <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
            </Box>
            <Box sx={{ position: "absolute", top: "620px", right: "-200px", transform: "scaleX(-1)", zIndex: 0 }}>
              <Image src="/media/syafiq/syafiq_flower.webp" alt="Syafiq Nabilah | Pulpen Studio" width={260} height={200} />
            </Box>


            <Box sx={{ background: "#ffe6dc", position: "relative", pt: "24px", mt: { xs: "-110px", md: "0" } }}>
              <Box
                mt={1}
                mb={5}
                mx="auto"
                sx={{
                  p: { xs: "24px 16px", md: "64px 32px 16px" },
                }}
              >
                <MiniText
                  sx={{ mb: 3, mt: -3, fontWeight: "bolder" }}
                  dangerouslySetInnerHTML={{
                    __html: 'Undangan Majlis Perkahwinan',
                  }}
                />
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
                <UbuntuText
                  sx={{
                    mb: 3,
                    fontWeight: "700",
                    fontSize: "24px"
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `${item?.fullNameGroom} <br/>&<br /> ${item?.fullNameBride}`,
                  }}
                />
              </Box>

              <Box sx={{ textAlign: "center", mt: -6 }}>
                <Image src="/media/syafiq/flower-border.png" alt="Syafiq & Nabilah | Pulpen Studio" width={200} height={30} />
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
                    px: 2,
                    mt: 3
                  }}
                >
                  <Text
                    sx={{ fontWeight: "700" }}
                    dangerouslySetInnerHTML={{
                      __html: "Lokasi",
                    }}
                  />
                  <Box mt={.5} sx={{ textAlign: "center" }}>
                    <Text
                      dangerouslySetInnerHTML={{
                        __html: `Grand Airiz Hall No. 427 Jalan Gajah 22, Pinggiran Elmina, Kampung Kubu Gajah, 47000 Sungai Buloh, Selangor`,
                      }}
                    />
                  </Box>
                </Box>


                <Box
                  sx={{
                    mx: 2,
                    px: 2,
                    mt: 4
                  }}
                >
                  <Text
                    sx={{ fontWeight: "700" }}
                    dangerouslySetInnerHTML={{
                      __html: "Tarikh",
                    }}
                  />
                  <Box mt={.5} sx={{ textAlign: "center" }}>
                    <Text
                      dangerouslySetInnerHTML={{
                        __html: `3 MEI 2025`,
                      }}
                    />
                  </Box>
                </Box>
              </Box>






              <Box
                sx={{
                  mx: -2,
                  py: 1,
                  mt: 2,
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
                  <Box mt={.5} sx={{ textAlign: "center" }}>
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

              <Box sx={{ textAlign: "center", mt: 4 }}>
                <Image src="/media/syafiq/flower-border.png" alt="Syafiq & Nabilah | Pulpen Studio" width={200} height={30} />
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
                      <MiniText
                        style={{ fontSize: "48px" }}
                        dangerouslySetInnerHTML={{
                          __html: `${countdownTimer?.countdownTimer.d} `,
                        }}
                      />
                    </Box>
                    <Box>
                      <MiniText
                        style={{ fontSize: "24px" }}
                        dangerouslySetInnerHTML={{
                          __html: `${countdownTimer?.countdownTimer.h
                            } <span style="font-size: 12px">${locale?.[item?.language!]?.COUNTDOWN_HOUR
                            }</span>`,
                        }}
                      />
                      <MiniText
                        style={{ fontSize: "24px" }}
                        dangerouslySetInnerHTML={{
                          __html: `${countdownTimer?.countdownTimer.m
                            } <span style="font-size: 12px">${locale?.[item?.language!]?.COUNTDOWN_MINUTE
                            }</span>`,
                        }}
                      />
                    </Box>
                    <Box>
                      <MiniText
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
              iconColor="rgba(149,8,43)"
              color="#fffaeb"
              location={{ text: item?.location!, mapUrl: item?.mapUrl! }}
              contact={{
                number1: item?.phonePerson1!,
                number2: item?.phonePerson2!,
                number3: "01110008890",
                name1: `Ahmad Khairi (${item?.namePerson1!})`,
                name2: `Noreiney (${item?.namePerson2!})`,
                name3: "Hanisah (Adik)"
              }}
            />
          </Box>
        </Box>}
    </Box>
  );
};

export default Layout10;
