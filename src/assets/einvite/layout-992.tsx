// Salimi Najihah
import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Allura,
  Cormorant_SC,
  Great_Vibes,
  Imperial_Script,
  Lora,
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
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });
const cormorant = Cormorant_SC({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
const imperialScript = Imperial_Script({ subsets: ["latin"], weight: ["400"] });
const lora = Lora({ subsets: ["latin"], weight: ["400", "600"] });

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
  fontFamily: `${allura.style.fontFamily} !important` || "auto",
  fontSize: "36px",
  textAlign: "center",
  fontWeight: "lighter",
}));

const SubTitle = styled("p")(() => ({
  fontSize: "14px",
  fontWeight: "400",
  fontFamily: `${lora.style.fontFamily} !important` || "auto",
  textAlign: "center",
  letterSpacing: "0.15em",
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
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
  fontWeight: "700",
  fontSize: "16px",
  textAlign: "center",
}));

const Layout992: React.FC = () => {
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
        boxShadow: "1px 1px 10px #abb9d8",
        m: "auto",
        position: "relative",
        overflow: "hidden",
        height: clickOpen ? "100%" : "100vh",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => setMusicStart(true)}
    >
      <Door color="#fff" {...{ clickOpen, setClickOpen }}>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box sx={{ position: "absolute", top: "0", left: "0" }}>
            <Image
              src="/media/animation/glimpse.gif"
              alt="Pulpen Studio | Ahmad Salimi Nurul Hidayah"
              width={200}
              height={200}
            />
          </Box>
          <Box sx={{ position: "absolute", bottom: "0", left: "0" }}>
            <Image
              src="/media/animation/glimpse.gif"
              alt="Pulpen Studio | Ahmad Salimi Nurul Hidayah"
              width={200}
              height={200}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/media/animation/flowery-letter-s.webp"
              alt="Pulpen Studio"
              width={20}
              height={22}
            />
            <span
              style={{
                margin: "0 8px",
                width: "1px",
                height: "20px",
                background: "#333",
                display: "block",
              }}
              id="hori-line"
            />
            <Image
              src="/media/animation/flowery-letter-h.webp"
              alt="Pulpen Studio"
              width={20}
              height={22}
            />
          </Box>
        </Box>
        <SubTitle
          style={{ marginTop: "8px", marginBottom: "-8px" }}
          dangerouslySetInnerHTML={{ __html: "Buka" }}
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
        display={clickOpen ? "block" : "none"}
        sx={{
          position: "relative",
          height: "100vh",
          width: "400px",
        }}
      >
        <Box
          sx={{
            backgroundImage: "url('/media/animation/layout-992-zbg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            marginTop: "-60px",
            opacity: 0.8,
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 0,
          }}
        />
        <Box sx={{ position: "absolute", top: "0", left: "0" }}>
          <Image
            src="/media/animation/layout-992-front-page-1.webp"
            alt="Pulpen Studio | Ahmad Salimi Nurul Hidayah"
            width={200}
            height={200}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "0",
            right: "0",
            transform: "scaleX(-1)",
          }}
        >
          <Image
            src="/media/animation/layout-992-front-page-1.webp"
            alt="Pulpen Studio | Ahmad Salimi Nurul Hidayah"
            width={200}
            height={200}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "60px",
            right: "0",
            transform: "scaleX(-1) scaleY(-1)",
          }}
        >
          <Image
            src="/media/animation/layout-992-front-page-1.webp"
            alt="Pulpen Studio | Ahmad Salimi Nurul Hidayah"
            width={200}
            height={200}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "60px",
            left: "0",
            transform: "scaleY(-1)",
          }}
        >
          <Image
            src="/media/animation/layout-992-front-page-1.webp"
            alt="Pulpen Studio | Ahmad Salimi Nurul Hidayah"
            width={200}
            height={200}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            transform: "translate(-50%,-50%)",
            marginTop: "-60px",
            top: "50%",
            left: "50%",
          }}
        >
          <Box sx={{ position: "absolute", top: "60%", right: "0" }}>
            <Image
              src="/media/animation/glimpse.gif"
              alt="Pulpen Studio | Ahmad Salimi Nurul Hidayah"
              width={200}
              height={200}
            />
          </Box>
          <Box sx={{ position: "absolute", top: "60%", right: "0" }}>
            <Image
              src="/media/animation/glimpse.gif"
              alt="Pulpen Studio | Ahmad Salimi Nurul Hidayah"
              width={200}
              height={200}
            />
          </Box>
          <Box sx={{ position: "absolute", top: "0", left: "0" }}>
            <Image
              src="/media/animation/glimpse.gif"
              alt="Pulpen Studio | Ahmad Salimi Nurul Hidayah"
              width={200}
              height={200}
            />
          </Box>
          <Box sx={{ position: "absolute", bottom: "0", left: "0" }}>
            <Image
              src="/media/animation/glimpse.gif"
              alt="Pulpen Studio | Ahmad Salimi Nurul Hidayah"
              width={200}
              height={200}
            />
          </Box>
          <Box mb={2} textAlign={"center"}>
            <Image
              style={{
                width: "auto",
                top: "-32px",
                display: "block",
                left: "35%",
              }}
              className="moving-image"
              src="/media/animation/bird-flying.png"
              alt="Pulpen Studio | Ahmad Salimi Nurul Hidayah"
              width={60}
              height={30}
            />
            <SubTitle
              id="delay-1s"
              style={{ marginTop: "16px" }}
              dangerouslySetInnerHTML={{ __html: `Majlis Perkahwinan` }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            id="delay-2s"
          >
            <Image
              src="/media/animation/flowery-letter-s.webp"
              alt="Pulpen Studio"
              width={49}
              height={51}
            />
            <span
              style={{
                margin: "0 24px",
                width: "1px",
                height: "100px",
                background: "#333",
                display: "block",
              }}
              id="hori-line"
            />
            <Image
              src="/media/animation/flowery-letter-h.webp"
              alt="Pulpen Studio"
              width={49}
              height={51}
            />
          </Box>
          <Box mt={4} textAlign={"center"} id="delay-3s">
            <SubTitle
              dangerouslySetInnerHTML={{
                __html: `Salimi & Hidayah`,
              }}
            />
          </Box>
          <Box
            id="delay-3s"
            sx={{ display: "flex", justifyContent: "center", mt: 4 }}
            gap={2}
          >
            <SubTitle
              dangerouslySetInnerHTML={{
                __html: `21 . 9 . 2024`,
              }}
            />
            <SubTitle
              dangerouslySetInnerHTML={{
                __html: `Sabtu`,
              }}
            />
          </Box>

          <SubTitle
            style={{ fontSize: "8px", marginTop: "32px" }}
            dangerouslySetInnerHTML={{
              __html: `"Dan Kami menciptakan kamu berpasang-pasangan"<br> 78:8`,
            }}
          />
        </Box>
      </Box>

      <Box sx={{ position: "relative" }}>
        <Box sx={{ position: "absolute", top: "0", left: "0" }}>
          <Image
            src="/media/animation/glimpse.gif"
            alt="Pulpen Studio | Ahmad Salimi Nurul Hidayah"
            width={200}
            height={200}
          />
        </Box>
        <Box sx={{ position: "absolute", top: "0", right: "0" }}>
          <Image
            src="/media/animation/glimpse.gif"
            alt="Pulpen Studio | Ahmad Salimi Nurul Hidayah"
            width={200}
            height={200}
          />
        </Box>
        <Box sx={{ position: "absolute", top: "100px", left: "30px" }}>
          <Image
            src="/media/animation/glimpse.gif"
            alt="Pulpen Studio | Ahmad Salimi Nurul Hidayah"
            width={200}
            height={200}
          />
        </Box>
        <Box sx={{ position: "absolute", top: "100px", right: "30px" }}>
          <Image
            src="/media/animation/glimpse.gif"
            alt="Pulpen Studio | Ahmad Salimi Nurul Hidayah"
            width={200}
            height={200}
          />
        </Box>
        <Box
          sx={{
            backgroundImage: "url('/media/animation/layout-992-zbg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            marginTop: "-60px",
            opacity: 0.6,
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: -1,
          }}
        />
        <Box sx={{ position: "absolute", top: "50%", left: "-20px" }}>
          <Image
            src="/media/animation/layout-992-side.webp"
            alt="Pulpen Studio"
            width={50}
            height={400}
          />
        </Box>
        <Box sx={{ position: "absolute", top: "20%", left: "-20px" }}>
          <Image
            src="/media/animation/layout-992-side.webp"
            alt="Pulpen Studio"
            width={50}
            height={400}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "-20px",
            transform: "scaleX(-1)",
          }}
        >
          <Image
            src="/media/animation/layout-992-side.webp"
            alt="Pulpen Studio"
            width={50}
            height={400}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            right: "-20px",
            transform: "scaleX(-1)",
          }}
        >
          <Image
            src="/media/animation/layout-992-side.webp"
            alt="Pulpen Studio"
            width={50}
            height={400}
          />
        </Box>
        <Box
          mb={8}
          mx="auto"
          sx={{
            p: { xs: "24px 16px", md: 3 },
          }}
        >
          <Box
            sx={{
              display: "block",
              width: "fit-content",
              margin: "0 auto",
              pb: 4,
            }}
          >
            <Image
              src="/media/animation/bis-img.png"
              alt="Pulpen Studio Morning in Autumn"
              width={140}
              height={40}
            />
          </Box>

          <SubTitle
            sx={{ mb: 3, textTransform: "none" }}
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
            sx={{ mb: 3, textTransform: "none" }}
            dangerouslySetInnerHTML={{
              __html:
                "Dengan segala hormatnya kami menjemput Dato | Datin | Tuan | Puan | Encik | Cik hadir ke majlis perkahwinan puteri kami",
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

          <SubTitle
            sx={{ mb: 3, textTransform: "none" }}
            dangerouslySetInnerHTML={{
              __html:
                "Semoga dengan kehadiran hadirin sekalian akan menyerikan lagi majlis kami dan diberkati Allah S.W.T hendaknya. Sekian, Terima Kasih",
            }}
          />
        </Box>

        <Box
          sx={{
            mx: -3,
            mt: 2,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              mx: 2,
            }}
          >
            <Box
              sx={{
                textAlign: "left",
                padding: "10px 86px 58px",
              }}
            >
              <Text
                sx={{ fontSize: "14px", mt: 6 }}
                dangerouslySetInnerHTML={{
                  __html: "<b>ATUR CARA MAJLIS</b>",
                }}
              />

              <Box mt={1}>
                <Text
                  sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
                  dangerouslySetInnerHTML={{
                    __html: "<b>Jamuan Makan</b>",
                  }}
                />
                <Text
                  sx={{ fontSize: "12px", my: 0.5, textAlign: "center" }}
                  dangerouslySetInnerHTML={{
                    __html: "11.00 pagi - 4.00 petang",
                  }}
                />
              </Box>

              <Box mt={1}>
                <Text
                  sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
                  dangerouslySetInnerHTML={{
                    __html: "<b>Ketibaan Pengantin</b>",
                  }}
                />
                <Text
                  sx={{ fontSize: "12px", my: 0.5, textAlign: "center" }}
                  dangerouslySetInnerHTML={{
                    __html: "12.30 tengah hari",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            px: 2,
            mt: 2,
            py: 4,
          }}
        >
          <Text
            dangerouslySetInnerHTML={{
              __html: "<b>MENGHITUNG HARI</b> | <i>COUNTING THE DAYS</i>",
            }}
            sx={{ pb: 2, fontSize: "14px" }}
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
                sx={{ fontSize: "14px", fontWeight: "bold" }}
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
                boxShadow: "1px 10px 10px -10px #b45769",
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
                  style={{ fontSize: "48px", color: "#d2dbe7", width: "50px" }}
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
              __html: "<b>UCAPAN</b> | <i>WISHES</i>",
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
      </Box>
      <Box>
        <Widget
          language={item?.language!}
          iconColor="#131313"
          color="#d2dbe7"
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

export default Layout992;
