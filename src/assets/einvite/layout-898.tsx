// Client Khairina

import { Box, Container, Grid, List, Paper, styled } from "@mui/material";
import {
    Allura,
    Cormorant_SC,
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

const Layout898: React.FC = () => {
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
                background: "#fffcfa",
                boxShadow: "1px 1px 10px #efefef",
                m: "auto",
                position: "relative",
                overflow: "hidden",
                height: clickOpen ? "100%" : "100vh",
            }}
            onTouchStart={() => setMusicStart(true)}
            onClick={() => setMusicStart(true)}
        >
            <Door color="transparent" {...{ clickOpen, setClickOpen }} shahida>
                <Image src="/media/animation/S-2.webp" alt="Shahida Immran" height={30} width={20} />
                <Image src="/media/animation/I-2.webp" alt="Shahida Immran" height={30} width={20} />
                <SubTitle
                    sx={{ fontSize: "12px", mb: -1, mt: 1 }}
                    dangerouslySetInnerHTML={{
                        __html: "Buka",
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
                    minHeight: "100vh",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Box className="moving-image" sx={{ position: "absolute", left: "40%", top: "135px", transform: "translate(-50%,-50%)", }}>
                    <Image src="/media/animation/bird-flying.png" alt="Shahida Imran" width={80} height={40} />
                </Box>
                <Box>
                    <Image
                        src="/media/animation/w-o-s.svg"
                        alt="Wedding of Shida"
                        width={400}
                        height={800}
                        style={{ display: "block", width: "100%", height: "auto" }}
                    />
                </Box>
            </Box>
            <Box sx={{
                backgroundImage: "url('/media/animation/wedding-of-shida-bg.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center center", mt: -8
            }}>
                <Box
                    mx={"auto"}
                    sx={{
                        pb: 4,
                        px: 2,
                        position: "relative",
                    }}
                >
                    <Box sx={{ zIndex: "2", px: 3 }}>
                        <Box textAlign={"center"}>
                            <Image
                                src="/media/animation/bis-img.png"
                                width={200}
                                alt="Pulpen Studio"
                                height={50}
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
                                    "OTHMAN BIN MOHD NAWI<br>&<br>AMINAH BINTI AWANG",
                            }}
                        />
                        <SubTitle
                            sx={{ mb: 3 }}
                            dangerouslySetInnerHTML={{
                                __html:
                                    "DENGAN PENUH RASA KESYUKURAN KE HADRAT ILAHI KAMI MENJEMPUT DATO' / DATIN' / TUAN' / PUAN' / ENCIK / CIK KE MAJLIS PERKAHWINAN PUTERI KAMI",
                            }}
                        />
                        <SubTitle
                            sx={{
                                fontWeight: "700",
                                mb: 3,
                            }}
                            dangerouslySetInnerHTML={{
                                __html: `NUR SHAHIDA BINTI OTHMAN<br>&<br>MUHAMMAD IMRAN BIN HJ SHAMSHUL ANUAR `,
                            }}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        padding: "0 32px",
                        mt: 2,
                        mb: 4,
                        position: "relative",
                    }}
                >
                    <Box>
                        <SubTitle
                            sx={{ fontSize: "12px", my: 0.5, textAlign: "center", fontWeight: "900" }}
                            dangerouslySetInnerHTML={{
                                __html: "Atur Cara Majlis",
                            }}
                        />
                    </Box>
                    <Box sx={{ display: "inline-flex" }}>
                        <SubTitle
                            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2, ml: 4 }}
                            dangerouslySetInnerHTML={{
                                __html: "<b>11.00am</b>",
                            }}
                        />
                        <SubTitle
                            sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
                            dangerouslySetInnerHTML={{
                                __html: "Jamuan Makan",
                            }}
                        />
                    </Box>
                    <Box sx={{ display: "inline-flex" }}>
                        <SubTitle
                            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2, ml: 4 }}
                            dangerouslySetInnerHTML={{
                                __html: "<b>12.30pm</b>",
                            }}
                        />
                        <SubTitle
                            sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
                            dangerouslySetInnerHTML={{
                                __html: "Ketibaan pengantin dan rombongan pengantin lelaki",
                            }}
                        />
                    </Box>
                    <Box sx={{ display: "inline-flex" }}>
                        <SubTitle
                            sx={{ fontSize: "12px", my: 0.5, display: "block", mr: 2, ml: 4 }}
                            dangerouslySetInnerHTML={{
                                __html: "<b>4.00pm</b>",
                            }}
                        />
                        <SubTitle
                            sx={{ fontSize: "12px", my: 0.5, textAlign: "left" }}
                            dangerouslySetInnerHTML={{
                                __html: "Majlis bersurai",
                            }}
                        />
                    </Box>
                </Box>

                <Box>
                    <SubTitle
                        sx={{ fontSize: "12px", my: 0.5, textAlign: "center", pt: 4, pb: 4 }}
                        dangerouslySetInnerHTML={{
                            __html: "Semoga dengan kehadiran anda dapat memeriahkan lagi majlis kami.",
                        }}
                    />
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
                        sx={{ pb: 2, fontSize: "14px", px: 3 }}
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
                    showGift
                    giftImage="/media/animation/bank-acc-shida.jpeg"
                    language={item?.language!}
                    iconColor="#333"
                    color="#fff9ea"
                    location={{ text: "De Majlis Event Space, B-6-7 Block B, Jalan Ostia Utama, Ostia Bangi Bussiness Park, 43650 Bandar Baru Bangi, Selangor", mapUrl: item?.mapUrl! }}
                    contact={{
                        number1: "0196124934",
                        number2: "0176284173",
                        number3: "0108211027",
                        name1: "Sazwan",
                        name2: "⁠Shahidan",
                        name3: "Shafina",
                    }}
                />
            </Box>
        </Box >
    );
};

export default Layout898;
