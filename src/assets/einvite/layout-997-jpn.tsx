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
import WidgetJpn from "@/components/WidgetJpn";

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

const Layout997jpn: React.FC = () => {
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

      <CustomDoor color="ebe2d2" {...{ clickOpen, setClickOpen }} isJapan={true} />

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
        <Text
          id="delay-3s"
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#ac6e29",
            mt: 4,
            px: 4,
          }}
          dangerouslySetInnerHTML={{
            __html: `謹啓　`,
          }}
        />

        <Text
          id="delay-3s"
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#ac6e29",
            mt: 2,
            px: 4,
          }}
          dangerouslySetInnerHTML={{
            __html: `盛夏の候
                皆様におかれましては<br>ご健勝のことと
                お慶び申し上げます。`,
          }}
        />

        <Text
          id="delay-4s"
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#ac6e29",
            mt: 6,
            px: 4,
          }}
          dangerouslySetInnerHTML={{
            __html: `新婦父母`,
          }}
        />

        <SubTitle
          id="delay-5s"
          sx={{
            fontSize: "28px",
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

        <Text
          id="delay-7s"
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#ac6e29",
            mt: 2.5,
            px: 4,
          }}
          dangerouslySetInnerHTML={{
            __html: `新郎父母`,
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
          id="delay-9s"
          sx={{
            fontSize: "14px",
            px: 2,
            fontWeight: "bolder",
            color: "#ac6e29",
            mt: 6,
          }}
          dangerouslySetInnerHTML={{
            __html: "皆様を我が娘、愚息の結婚式に御招待させて<br>頂きたく存じます。",
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
          id="delay-11s"
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
          id="delay-12s"
          sx={{ fontSize: "28px", mt: 6, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "Nik Iffah Hazirah",
          }}
        />
        <Text
          id="delay-12s"
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#ac6e29",
            px: 4,
          }}
          dangerouslySetInnerHTML={{
            __html: `ニック イッファ ハジラ`,
          }}
        />

        <Text
          id="delay-13s"
          sx={{ fontSize: "12px", my: 1, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "<b>&</b>",
          }}
        />

        <SubTitle
          id="delay-14s"
          sx={{ fontSize: "32px", color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "Hilmi Marzuqi",
          }}
        />
        <Text
          id="delay-14s"
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "#ac6e29",
            px: 4,
          }}
          dangerouslySetInnerHTML={{
            __html: `ヒルミ マーズキ`,
          }}
        />

        <Text
          id="delay-15s"
          sx={{ fontSize: "12px", mt: 6, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "<b>日程</b> | <i>DATE</i>",
          }}
        />

        <Text
          id="delay-16s"
          sx={{ fontSize: "12px", mt: 0.5, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "<b><span style='font-size: 16px;'>2024.08.18</span></b><br>(日|<i>SUN</i>)",
          }}
        />

        <Text
          id="delay-17s"
          sx={{ fontSize: "14px", mt: 4, px: 1, color: "#ac6e29", fontWeight: "bold" }}
          dangerouslySetInnerHTML={{
            __html: `ご多用中まことに恐縮ではございますが、<br>
          ぜひご出席をお願いしたくご案内申し上げます。`,
          }}
        />

        <Text
          id="delay-18s"
          sx={{ fontSize: "14px", mt: 2, px: 2, color: "#ac6e29", fontWeight: "bold" }}
          dangerouslySetInnerHTML={{
            __html: `敬白`,
          }}
        />

        <Box
          id="delay-18s"
          sx={{
            mt: 6,
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
                    __html: `<span style="font-size: 12px">Days</span><br><span style="visibility: hidden">.</span>${countdownTimer?.countdownTimer.d} :`,
                  }}
                />
              </Box>
              <Box>
                <Text
                  style={{ fontSize: "24px", color: "#ac6e29" }}
                  dangerouslySetInnerHTML={{
                    __html: `<span style="font-size: 12px">Hrs</span><br><span style="visibility: hidden">..</span>${countdownTimer?.countdownTimer.h
                      } :`,
                  }}
                />
              </Box>
              <Box>
                <Text
                  style={{ fontSize: "24px", color: "#ac6e29" }}
                  dangerouslySetInnerHTML={{
                    __html: `<span style="font-size: 12px">Mins</span><br><span style="visibility: hidden">..</span>${countdownTimer?.countdownTimer.m
                      } :`,
                  }}
                />
              </Box>
              <Box>
                <Text
                  style={{
                    fontSize: "24px",
                    color: "#ac6e29",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `<span style="font-size: 12px">Secs</span><br>${countdownTimer?.countdownTimer.s} `,
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>

        <Text
          id="delay-18s"
          sx={{ fontSize: "14px", mt: 6, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html: "<b>会場</b> | <i>VENUE</i>",
          }}
        />

        <Text
          id="delay-18s"
          sx={{ fontSize: "12px", mt: 0.5, mb: 2, color: "#ac6e29" }}
          dangerouslySetInnerHTML={{
            __html:
              "SEBENING EMBUN GARDENS LOT 15,<br>JALAN DURIAN 1,KAMPUNG SUNGAI BUAH,<br> DENGKIL, SELANGOR",
          }}
        />

        <Box id="delay-18s" sx={{ textAlign: "left" }}>
          <Text
            sx={{ fontSize: "14px", mt: 6, color: "#ac6e29" }}
            dangerouslySetInnerHTML={{
              __html: "<b>開催時間</b> | <i>TENTATIVES</i><br><br>11:30a.m - 4:00p.m<br><br>",
            }}
          />
          <Box sx={{ p: "0 48px" }}>
            <Box sx={{ display: "inline-flex" }}>
              <Text
                sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", display: "block", mr: 2 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<b>11:30</b>",
                }}
              />
              <Text
                sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", textAlign: "left" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<b>開場・披露宴開始</b> <br> <i>Start of Wedding Reception</i>",
                }}
              />
            </Box>

            <Box sx={{ display: "inline-flex" }}>
              <Text
                sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", display: "block", mr: 2 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<b>12:30</b>",
                }}
              />
              <Text
                sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", textAlign: "left" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<b>新郎新婦　入場</b> <br> <i>Arrival of Bride & Groom</i>",
                }}
              />
            </Box>

            <Box sx={{ display: "inline-flex" }}>
              <Text
                sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", display: "block", mr: 2 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<b>14:30</b>",
                }}
              />
              <Text
                sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", textAlign: "left" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<b>ケーキ入刀</b> <br> <i>Cake Cutting Ceremony</i>",
                }}
              />
            </Box>

            <Box sx={{ display: "inline-flex" }}>
              <Text
                sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", display: "block", mr: 2 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<b>15:00</b>",
                }}
              />
              <Text
                sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", textAlign: "left" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<b> 舞台上　写真撮影</b> <br> <i>Photo Session with Guests</i>",
                }}
              />
            </Box>

            <Box sx={{ display: "inline-flex" }}>
              <Text
                sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", display: "block", mr: 2 }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<b>16:00</b>",
                }}
              />
              <Text
                sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", textAlign: "left" }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<b>披露宴終了・閉場</b> <br> <i>End of Wedding Reception</i>",
                }}
              />
            </Box>
          </Box>

          <Box sx={{ display: "inline-flex" }} mt={1} px={3}>
            <Text
              sx={{ fontSize: "12px", my: 0.5, color: "#ac6e29", display: "block", mr: 2, textAlign: "left" }}
              dangerouslySetInnerHTML={{
                __html:
                  "*当日の都合により予定が前後することをご了承<br>頂きますと幸いです。",
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
            sx={{ fontSize: "14px", mt: 2, color: "#ac6e29" }}
            dangerouslySetInnerHTML={{
              __html: "<b>新郎新婦へのメッセージ</b> | <i>WISHES</i>",
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
                <List sx={{ p: 0, mb: 4 }}>
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
        <WidgetJpn
          includeOrigin={true}
          includePhoneNumber={false}
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

export default Layout997jpn;
