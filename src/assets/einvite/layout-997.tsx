// Modified layout - 20 Februari 2024 | Hilmi & Nik Iffah
import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
  Baskervville,
  Dancing_Script,
  Libre_Baskerville,
  Pinyon_Script,
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
import CustomDoor from "@/components/Custom/Door";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const tangerine = Tangerine({ subsets: ["latin"], weight: ["400", "700"] });
const pinyon = Pinyon_Script({ subsets: ["latin"], weight: "400" });
const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});
interface DateTimeConfig {
  countdownTimer: {
    d: number;
    h: number;
    m: number;
    s: number;
  };
}

const SubTitle = styled("p")(() => ({
  fontFamily: `${tangerine.style.fontFamily} !important` || "auto",
  textAlign: "center",
  fontWeight: "bolder",
}));

const Text = styled("p")(() => ({
  fontFamily: `${baskerville.style.fontFamily} !important` || "auto",
  fontSize: "16px",
  textAlign: "center",
}));

const MiniText = styled("p")(() => ({
  fontFamily: `${playfair.style.fontFamily} !important` || "auto",
  fontSize: "12px",
  textAlign: "center",
}));

const UbuntuText = styled("p")(() => ({
  fontFamily: `${pinyon.style.fontFamily} !important` || "auto",
  fontWeight: "700",
  fontSize: "16px",
  textAlign: "center",
}));

const Layout997: React.FC = () => {
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
      sx={{
        boxShadow: "0px -10px 10px #ebe2d2",
        m: "auto",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        maxWidth: "400px",
      }}
      onTouchStart={() => setMusicStart(true)}
      onClick={() => {
        setMusicStart(true);
      }}
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

      <CustomDoor color="ebe2d2" {...{ clickOpen, setClickOpen }}>
        <h1>TEST</h1>
      </CustomDoor>

      <Box
        onClick={() => {
          setClickOpen(true);
        }}
        sx={{
          position: "relative",
          height: "100vh",
          background: "#ebe2d2",
          backgroundImage: "url('/media/animation/layout-997-bg.png')",
          backgroundSize: "contain",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
          }}
        >
          <Image
            src="/media/animation/layout-997-border-top.png"
            alt="Pulpen Studio Layout 997"
            width={430}
            height={100}
            style={{ display: "block" }}
          />
        </Box>
        <Box
          className={
            clickOpen
              ? "animate__animated animate__fadeIn animate__slow animate__delay-1s"
              : ""
          }
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Image
            src="/media/animation/layout-997-full.png"
            alt="Pulpen Studio Layout 997"
            width={380}
            height={360}
            style={{ display: "block" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
          }}
        >
          <Image
            src="/media/animation/layout-997-border-bottom.png"
            alt="Pulpen Studio Layout 997"
            width={430}
            height={100}
            style={{ display: "block" }}
          />
        </Box>
      </Box>

      <Box
        display={clickOpen ? "block" : "none"}
        sx={{
          position: "relative",
          backgroundImage: "url('/media/animation/layout-997-bg.png')",
          backgroundSize: "contain",
          py: 8,
          px: 4,
          mt: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            right: "0",
            marginTop: "-64px",
            width: "30px",
            height: "100%",
          }}
        >
          <Image
            fill
            src="/media/animation/side-right.png"
            alt="Pulpen Studio Layout 997"
            style={{ display: "block" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "0",
            marginTop: "-64px",
            width: "30px",
            height: "100%",
          }}
        >
          <Image
            fill
            src="/media/animation/side-left.png"
            alt="Pulpen Studio Layout 997"
            style={{ display: "block" }}
          />
        </Box>
        <SubTitle
          id="marker"
          className="animate__animated animate__zoomIn animate__slow animate__delay-2s"
          sx={{ fontSize: "32px", color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "﷽",
          }}
        />
        <SubTitle
        className="animate__animated animate__zoomIn animate__slow animate__delay-3s"
          sx={{ fontSize: "28px", mt: 4, color: "#ac6e29", fontWeight: "700" }}
          dangerouslySetInnerHTML={{
            __html: "Tuan Suhaimi Salleh &<br/>Rohaizan Ismail",
          }}
        />
        <Text
          sx={{ fontSize: "16px", my: 1, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "&",
          }}
        />
        <SubTitle
        className="animate__animated animate__zoomIn animate__slow animate__delay-4s"
          sx={{ fontSize: "28px", mb: 4, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "Mohamad Nor Ibrahim &<br/>Nur Maisarah Abdullah",
          }}
        />
        <Text
        className="animate__animated animate__zoomIn animate__slow animate__delay-5s"
          sx={{ fontSize: "12px", fontWeight: "bolder", color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "DENGAN PENUH KESYUKURAN DAN TAKZIMNYA MENTEMPUT ANDA",
          }}
        />
        <Text
        className="animate__animated animate__zoomIn animate__slow animate__delay-5s"
          sx={{
            fontSize: "12px",
            mt: 1,
            color: "#ac6e29",
          }}
          dangerouslySetInnerHTML={{
            __html: "<i>REQUEST THE PLEASURE OF YOUR COMPANY</i>",
          }}
        />
        <Text
        className="animate__animated animate__zoomIn animate__slow animate__delay-5s"
          sx={{
            fontSize: "12px",
            mt: 4,
            fontWeight: "bolder",
            color: "#ac6e29",
          }}
          dangerouslySetInnerHTML={{
            __html: "KE MAJLIS PERSANDINGAN",
          }}
        />
        <Text
        className="animate__animated animate__zoomIn animate__slow animate__delay-5s"
          sx={{
            fontSize: "12px",
            mt: 1,
            color: "#ac6e29",
          }}
          dangerouslySetInnerHTML={{
            __html: "<i>TO THE WEDDING RECEPTION OF</i>",
          }}
        />
        <SubTitle
        className="animate__animated animate__zoomIn animate__slow animate__delay-5s"
          sx={{ fontSize: "28px", mt: 4, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "Nik Iffah Hazirah",
          }}
        />
        <Text
          sx={{ fontSize: "12px", my: 1, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "<b>DAN</b> | <i>WITH</i>",
          }}
        />
        <SubTitle
        className="animate__animated animate__zoomIn animate__slow animate__delay-5s"
          sx={{ fontSize: "32px", color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "Hilmi Marzuqi",
          }}
        />
        <Text
          sx={{ fontSize: "12px", mt: 4, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "<b>PADA</b> | <i>ON</i>",
          }}
        />
        <Text
          sx={{ fontSize: "12px", mt: 0.5, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "<b>AHAD</b> | <i>SUNDAY</i>",
          }}
        />
        <Text
          sx={{ fontSize: "12px", mt: 0.5, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "18.08.2024",
          }}
        />
        <Box
          sx={{
            pt: 2,
            position: "relative",
          }}
        >
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
                sx={{ color: "#ac6e29", fontSize: "12px" }}
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
                pb: 1,
                width: "fit-content",
                mx: "auto",
                display: "flex",
              }}
            >
              <Box>
                <Text
                  style={{ fontSize: "24px", color: "#ac6e29" }}
                  dangerouslySetInnerHTML={{
                    __html: `${countdownTimer?.countdownTimer.d} `,
                  }}
                />
              </Box>
              <Box>
                <Text
                  style={{ fontSize: "12px", color: "#ac6e29" }}
                  dangerouslySetInnerHTML={{
                    __html: `${
                      countdownTimer?.countdownTimer.h
                    } <span style="font-size: 12px">${
                      locale?.[item?.language!]?.COUNTDOWN_HOUR
                    }</span>`,
                  }}
                />
                <Text
                  style={{ fontSize: "12px", color: "#ac6e29" }}
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
                  style={{ fontSize: "24px", width: "50px", color: "#ac6e29" }}
                  dangerouslySetInnerHTML={{
                    __html: `${countdownTimer?.countdownTimer.s} `,
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
        <Text
          sx={{ fontSize: "12px", mt: 4, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "<b>DI</b> | <i>AT</i>",
          }}
        />
        <Text
          sx={{ fontSize: "12px", mt: 0.5, mb: 2, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html:
              "SEBENING EMBUN GARDENS LOT 15, JALAN DURIAN 1,KAMPUNG SUNGAI BULOH, DENGKIL, SELANGOR",
          }}
        />
        <Box
          id="comment"
          mb={2}
          sx={{
            px: 2,
            pt: 4,
          }}
        >
          <Text
            sx={{ color: "#ac6e29" }}
            dangerouslySetInnerHTML={{
              __html: "<b>Ucapan</b> | <i>Wishes</i>",
            }}
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
                <List sx={{ p: 0 }}>
                  {/* @ts-ignore */}
                  {listComments?.map((comment: any, idx: string) => (
                    <CommentList
                      {...{ comment, idx }}
                      key={idx}
                      bgColor="#fff"
                      textColor="#ac6e29"
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
          hideRsvp={true}
          hideEdit={false}
          language={item?.language!}
          iconColor="#ac6e29"
          color="rgba(235, 226, 210, .6)"
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

export default Layout997;
