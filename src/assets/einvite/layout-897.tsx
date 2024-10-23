// Client Fakhruz Hafsah

import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
    Allura,
    Cormorant_SC,
    Lora,
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
const cormorant = Cormorant_SC({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});
const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });

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
    lineHeight: "0.75em",
    fontFamily: `${cormorant.style.fontFamily} !important` || "auto",
    fontSize: "36px",
    textAlign: "center",
    fontWeight: "lighter",
}));

const SubTitle = styled("p")(() => ({
    fontSize: "14px",
    fontWeight: "300",
    fontFamily: `${cormorant.style.fontFamily} !important` || "auto",
    textAlign: "center",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
}));

const Text = styled("p")(() => ({
    fontFamily: `${lora.style.fontFamily} !important` || "auto",
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

const Layout897: React.FC = () => {
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
                boxShadow: "1px 1px 10px #EFEFEF",
                m: "auto",
                position: "relative",
                overflow: "hidden",
                height: clickOpen ? "100%" : "100vh",
            }}
            onTouchStart={() => setMusicStart(true)}
            onClick={() => setMusicStart(true)}
        >
            <Door color="transparent" {...{ clickOpen, setClickOpen }} fakhruz>
                <span>Fakhruz</span>
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
            <Box sx={{ display: clickOpen ? "block" : "none" }}>
                <Box
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        height: "auto"
                    }}
                >

                    <Image src="/media/animation/887-new-bg.svg" alt="" width={400} height={600} style={{ width: "100%", height: "auto", display: "block" }} />

                    <Box sx={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <SubTitle
                            id="delay-3s"
                            sx={{ mb: 4 }}
                            dangerouslySetInnerHTML={{
                                __html:
                                    "WALIMATULURUS",
                            }} />
                        <Image id="delay-5s" src="/media/animation/fh-signage.png" alt="" width={220} height={80} />
                        <SubTitle
                            id="delay-5s"
                            sx={{ mt: 4 }}
                            dangerouslySetInnerHTML={{
                                __html:
                                    "FAKHRUZ & HAFSAH",
                            }} />

                    </Box>
                    <Box id="delay-7s" sx={{ position: "absolute", bottom: "5%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        <SubTitle
                            sx={{ mt: 6, fontWeight: "900" }}
                            dangerouslySetInnerHTML={{
                                __html:
                                    "21.12.2024",
                            }} />
                        <Box sx={{ display: "flex" }} gap={1}>
                            <Box sx={{ display: "block", height: "1px", width: "60px", background: "#333", alignSelf: "center" }} />
                            <SubTitle
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "SABTU",
                                }} />
                            <Box sx={{ display: "block", height: "1px", width: "60px", background: "#333", alignSelf: "center" }} />
                        </Box>


                        <SubTitle
                            sx={{ mt: 2 }}
                            dangerouslySetInnerHTML={{
                                __html:
                                    "Dewan Sutera, <br>Kolej Ibu Zain, UKM",
                            }} />

                    </Box>

                </Box>
                <Box
                    sx={{
                        backgroundImage: "url('/media/animation/fakhruz-updated.svg')",
                        backgroundSize: "cover",
                        backgroundPosition: "inherit",
                    }}>
                    <Box
                        id="delay-9s"
                        mx={"auto"}
                        sx={{

                            pb: 4,
                            px: 2,
                            pt: 6,
                            position: "relative",
                        }}
                    >
                        <Box sx={{ zIndex: "2" }}>
                            <Box textAlign={"center"}>
                                <Image
                                    src="/media/animation/bis-2.png"
                                    width={160}
                                    alt="Pulpen Studio"
                                    height={30}
                                    style={{ marginBottom: "16px" }}
                                />
                            </Box>
                            <SubTitle
                                sx={{ mb: 3, mt: 3 }}
                                dangerouslySetInnerHTML={{
                                    __html: "Assalamualaikum WBT <br> Salam Sejahtera",
                                }}
                            />
                            <SubTitle
                                sx={{ fontWeight: "700", mb: 3 }}
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "HASADID ABD HAMID<br>&<br>JUSNAINI BINTI JAAMAN",
                                }}
                            />
                            <SubTitle
                                sx={{ mb: 3, px: 2 }}
                                dangerouslySetInnerHTML={{
                                    __html:
                                        "DENGAN PENUH RASA KESYUKURAN KE HADRAT ILAHI KAMI MENJEMPUT DATO' / DATIN' / TUAN' / PUAN' / ENCIK / CIK KE MAJLIS PERKAHWINAN PUTERI KAMI",
                                }}
                            />
                            <SubTitle
                                sx={{
                                    fontWeight: "700",
                                    mb: 3,
                                    px: 2
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: `MOHD FAKHRUZ ZAMAN BIN HASADID<br>&<br>Dr. HAFSAH BINTI KOLONEL (B) TS. SAZALI`,
                                }}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            textAlign: "center",
                            padding: "0 32px",
                            mt: 2,
                            mb: 4,
                            position: "relative",
                        }}
                    >
                        <Box sx={{ display: "inline-flex" }}>
                            <SubTitle
                                sx={{ fontSize: "12px", my: 0.5, textAlign: "left", fontWeight: "900" }}
                                dangerouslySetInnerHTML={{
                                    __html: "Atur Cara Majlis",
                                }}
                            />
                        </Box>
                        <Box sx={{ display: "inline-flex" }}>
                            <SubTitle
                                sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
                                dangerouslySetInnerHTML={{
                                    __html: "<b>11.00am</b>",
                                }}
                            />
                            <SubTitle
                                sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
                                dangerouslySetInnerHTML={{
                                    __html: "Majlis Bermula",
                                }}
                            />
                        </Box>
                        <Box sx={{ display: "inline-flex" }}>
                            <SubTitle
                                sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
                                dangerouslySetInnerHTML={{
                                    __html: "<b>12.30pm</b>",
                                }}
                            />
                            <SubTitle
                                sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
                                dangerouslySetInnerHTML={{
                                    __html: "Ketibaan Pengantin",
                                }}
                            />
                        </Box>
                        <Box sx={{ display: "inline-flex" }}>
                            <SubTitle
                                sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2 }}
                                dangerouslySetInnerHTML={{
                                    __html: "<b>4.00pm</b>",
                                }}
                            />
                            <SubTitle
                                sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
                                dangerouslySetInnerHTML={{
                                    __html: "Majlis Bersurai",
                                }}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            px: 2,
                            py: 4,
                            mb: 6,
                        }}
                    >
                        <SubTitle
                            dangerouslySetInnerHTML={{
                                __html: "<b>Menghitung Hari</b> | <i>Counting Days</i>",
                            }}
                            sx={{ pb: 2, fontSize: "14px", px: 2 }}
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
                                    boxShadow: "1px 10px 10px -10px #efefef",
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
                                        style={{ fontSize: "48px", color: "#718062", width: "50px" }}
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
                            pb: 10,
                        }}
                    >
                        <SubTitle
                            dangerouslySetInnerHTML={{
                                __html: "<b>Ucapan</b> | <i>Wishes</i>",
                            }}
                            sx={{ pb: 2, fontSize: "16px" }}
                        />
                        <Grid container>
                            <Grid item xs={12}>
                                <Paper
                                    sx={{
                                        background: "#fff",
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
                        iconColor="#333"
                        color="#f7f6f4"
                        location={{ text: "Dewan Sutera, Kolej Ibu Zain UKM", mapUrl: item?.mapUrl! }}
                        contact={{
                            number1: "0172255156",
                            number2: "0125782689",
                            name1: "Muhammad Khairol Nizam",
                            name2: "Nor Lyiana Asyeken",
                        }}
                    />
                </Box>
            </Box>
        </Box >
    );
};

export default Layout897;
