// Modified layout - 20 Februari 2024 | Hilmi & Nik Iffah
import { Box, Grid, List, Paper, styled } from "@mui/material";
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

      <CustomDoor color="ebe2d2" {...{ clickOpen, setClickOpen }} />

      <Box
        display={clickOpen ? "block" : "none"}
        sx={{
          position: "relative",
          backgroundImage: "url('/media/animation/layout-997-bg.png')",
          backgroundSize: "contain",
          backgroundAttachment: "fixed",
          py: 8,
          px: 4,
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
          id="delay-2s"
          sx={{ fontSize: "32px", color: "#ac6e29", mt: 2 }}
          dangerouslySetInnerHTML={{
            __html: "﷽",
          }}
        />

        <SubTitle
          id="delay-4s"
          sx={{
            fontSize: "28px",
            mt: 8,
            color: "#ac6e29",
            fontWeight: "700",
          }}
          dangerouslySetInnerHTML={{
            __html: "Tuan Suhaimi Salleh &<br/>Rohaizan Ismail",
          }}
        />

        <Box
         id="delay-6s"
          sx={{
            background: "#ac6e29",
            my: 2,
            height: "1px",
            width: "50%",
            mx: "auto",
          }}
        />

        <SubTitle
          id="delay-8s"
          sx={{ fontSize: "28px", mb: 4, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "Hj. Mohamad Nor Ibrahim &<br/>Hjh. Nur Maisarah Abdullah",
          }}
        />

        <Text
          id="delay-10s"
          sx={{
            fontSize: "11px",
            fontWeight: "bolder",
            color: "#ac6e29",
            mt: 6,
          }}
          dangerouslySetInnerHTML={{
            __html: "DENGAN PENUH KESYUKURAN DAN TAKZIMNYA",
          }}
        />

        <Text
          id="delay-10s"
          sx={{ fontSize: "11px", fontWeight: "bolder", color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "MENJEMPUT TUAN/PUAN/ENCIK/CIK",
          }}
        />

        <Text
          id="delay-10s"
          sx={{
            fontSize: "12px",
            mt: 0.5,
            color: "#ac6e29",
          }}
          dangerouslySetInnerHTML={{
            __html: "<i>REQUEST THE PLEASURE OF YOUR COMPANY</i>",
          }}
        />

        <Text
          id="delay-12s"
          sx={{
            fontSize: "12px",
            mt: 6,
            fontWeight: "bolder",
            color: "#ac6e29",
          }}
          dangerouslySetInnerHTML={{
            __html: "KE MAJLIS PERSANDINGAN",
          }}
        />

        <Text
          id="delay-12s"
          sx={{
            fontSize: "12px",
            mt: 0.5,
            color: "#ac6e29",
          }}
          dangerouslySetInnerHTML={{
            __html: "<i>TO THE WEDDING RECEPTION OF</i>",
          }}
        />

        <SubTitle
          id="delay-14s"
          sx={{ fontSize: "28px", mt: 6, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "Nik Iffah Hazirah",
          }}
        />

        <Text
          id="delay-15s"
          sx={{ fontSize: "12px", my: 1, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "<b>DAN</b> | <i>WITH</i>",
          }}
        />

        <SubTitle
          id="delay-16s"
          sx={{ fontSize: "32px", color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "Hilmi Marzuqi",
          }}
        />

        <Text
          id="delay-18s"
          sx={{ fontSize: "12px", mt: 6, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "<b>PADA</b> | <i>ON</i>",
          }}
        />

        <Text
          id="delay-18s"
          sx={{ fontSize: "12px", mt: 0.5, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "<b>AHAD</b> | <i>SUNDAY</i>",
          }}
        />

        <Text
          id="delay-18s"
          sx={{ fontSize: "12px", mt: 0.5, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "18.08.2024",
          }}
        />

        <Box
          id="delay-18s"
          sx={{
            mt: 1,
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
                  style={{
                    fontSize: "24px",
                    width: "50px",
                    color: "#ac6e29",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `${countdownTimer?.countdownTimer.s} `,
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>

        <Text
          id="delay-18s"
          sx={{ fontSize: "12px", mt: 6, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "<b>DI</b> | <i>AT</i>",
          }}
        />

        <Text
          id="delay-18s"
          sx={{ fontSize: "12px", mt: 0.5, mb: 2, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html:
              "SEBENING EMBUN GARDENS LOT 15,<br>JALAN DURIAN 1,KAMPUNG SUNGAI BULOH,<br> DENGKIL, SELANGOR",
          }}
        />

        <Box sx={{ textAlign: "left", padding: "0 32px"}}>
        <Text
          id="delay-18s"
          sx={{ fontSize: "12px", mt: 6, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "<b>ATUR CARA</b> | <i>TENTATIVES</i><br><br>11:00a.m - 4:00p.m",
          }}
        />

        <Text
          id="delay-18s"
          sx={{ fontSize: "12px", mt: 2, mb: 1, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Sesi Pertama</b> | <i>First Session</i>",
          }}
        />
        <Box sx={{ display: "inline-flex"}}>
           <Text
            sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>11:00</b>",
            }}
          />
          <Text
            sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", textAlign: "left" }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>Majlis Resepsi Bermula</b> <br> <i>Start of Wedding Reception</i>",
            }}
          />
        </Box>
        
        <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>11:30</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29" , textAlign: "left" }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Ketibaan Pengantin</b> <br> <i>Arrival of Bride & Groom</i>",
          }}
        />
        </Box>
        
        <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>11:45</b>",
            }}
          />
          <Text
          id="delay-18s"
          sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Salam Restu (Ibu bapa & Saudara-mara)</b> <br> <i>Blessings Ceremony (Parents & Relatives)</i>",
          }}
        />
        </Box>

        <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>12:45</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Pengantin Rehat</b> <br> <i>Bride & Groom One-hour Break</i>",
          }}
        />
        </Box>
        

        <Text
          id="delay-18s"
          sx={{ fontSize: "12px", mt: 2, mb:1, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Sesi kedua</b> | <i>Second session</i>",
          }}
        />

        <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>13:45</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Ketibaan Semula Pengantin</b> <br> <i>Re-arrival of Bride & Groom</i>",
          }}
        />
        </Box>

        <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>14:45</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Upacara Memotong Kek</b> <br> <i>Cake Cutting Ceremony</i>",
          }}
        />
        </Box>

         <Box sx={{ display: "inline-flex"}}>
          <Text
            sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", display: "block", mr: 2 }}
            dangerouslySetInnerHTML={{
              __html:
                "<b>16.00</b>",
            }}
          />
          <Text
          sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", textAlign: "left"  }}
          dangerouslySetInnerHTML={{
            __html:
              "<b>Majlis Bersurai</b> <br> <i> End of Wedding Reception</i>",
          }}
        />
        </Box>     
        </Box>

        <Box
          id="comment"
          mb={2}
          sx={{
            mt: 2,
            px: 2,
            pt: 4,
          }}
        >
          <Text
          id="delay-18s"
          sx={{ fontSize: "12px", mt: 2, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "<b>UCAPAN</b> | <i>WISHES</i>",
          }}
        />
          <Grid container>
            <Grid item py={2} xs={12}>
              <Paper
                sx={{
                  background: "#FFF",
                  boxShadow: "unset",
                  height: "100%",
                  maxHeight: "400px"
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
          hideRsvp={false}
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
