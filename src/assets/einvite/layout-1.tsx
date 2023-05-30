import type { AssetLayoutProps } from "@/type";
import { Box, Container, Grid, styled } from "@mui/material";
import {
  ChatIcon,
  ClockIcon,
  CommentForm,
  MapIcon,
  WhatsappIcon,
} from "@/components";
import { Great_Vibes, Poiret_One } from "next/font/google";
import useGetEinvite from "@/data/useGetEinvite";
import { useRouter } from "next/router";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const poiretOne = Poiret_One({ subsets: ["latin"], weight: "400" });

const Title = styled("h1")(({ theme }) => ({
  fontFamily: `${greatVibes.style.fontFamily} !important` || "auto",
  fontSize: "40px",
  fontWeight: "lighter",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: "80px",
  },
}));

const SubTitle = styled("h2")(({ theme }) => ({
  fontFamily: `${greatVibes.style.fontFamily} !important` || "auto",
  fontSize: "32px",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: "40px",
  },
}));

const Text = styled("p")(({ theme }) => ({
  fontFamily: `${poiretOne.style.fontFamily} !important` || "auto",
  fontSize: "16px",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: "32px",
  },
}));

const MiniText = styled("p")(({ theme }) => ({
  fontFamily: `${poiretOne.style.fontFamily} !important` || "auto",
  fontSize: "16px",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
  },
}));

const Link = styled("a")(() => ({
  color: "unset",
  textDecoration: "none",
  "& :hover": {
    color: "#FDE6E8",
  },
}));

const Layout1: React.FC<AssetLayoutProps> = ({
  firstIntro,
  secondIntro,
  title,
  date,
  day,
  time,
  location,
  descTitle,
  descOne,
  descTwo,
  descThree,
  infoTitle,
  infoAddress,
  infoAddressMap,
  infoFirstPhoneName,
  infoFirstPhoneNum,
  infoSecondPhoneName,
  infoSecondPhoneNum,
  wishTitleForm,
  wishDescForm,
  widgetBgColor,
  widgetColor,
}) => {
  const router = useRouter();
  const eInviteId = router.query.eInviteId;
  const { data } = useGetEinvite(eInviteId as string);
  // @ts-ignore
  const comments = data?.comments;

  return (
    <>
      <Box
        px={{ xs: 0, md: 10 }}
        py={{ xs: 0, md: 6 }}
        sx={{
          backgroundImage: "url('/media/layout/layout-1.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          margin: { xs: "0", md: "16px 96px" },
          position: "relative",
          height: { xs: "80vh", md: "800px" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            textAlign: "center",
            transform: "translate(-50%,-50%)",
            maxWidth: "80%",
            wordBreak: "break-word",
            width: "100%",
          }}
        >
          <SubTitle
            sx={{ mb: 5 }}
            dangerouslySetInnerHTML={{ __html: firstIntro }}
          />
          <MiniText
            sx={{ letterSpacing: "0.5em", mb: 5 }}
            dangerouslySetInnerHTML={{ __html: secondIntro }}
          />
          <Title
            sx={{ mb: 5, textShadow: "8px 8px 8px #FDE6E8" }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Grid container justifyContent="center" mb={5}>
            <Grid item borderRight="2px solid #FDE6E8" px={2}>
              <Text dangerouslySetInnerHTML={{ __html: date }} />
            </Grid>
            <Grid item borderRight="2px solid #FDE6E8" px={2}>
              <Text dangerouslySetInnerHTML={{ __html: day }} />
            </Grid>
            <Grid item borderRight="2px solid #FDE6E8" px={2}>
              <Text dangerouslySetInnerHTML={{ __html: time }} />
            </Grid>
            <Grid item px={2}>
              <Text dangerouslySetInnerHTML={{ __html: location }} />
            </Grid>
          </Grid>
        </Box>
        <Grid
          container
          columnGap={{ xs: 4, md: 0 }}
          rowGap={{ xs: 0, md: 6 }}
          flexDirection={{ xs: "row", md: "column" }}
          justifyContent="space-evenly"
          sx={{
            background: {
              xs: widgetBgColor || "white",
              md: widgetBgColor || "transparent",
            },
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
            bottom: { xs: "0", md: "unset" },
            boxShadow: "1px 1px 10px #FDE6E8",
            padding: { xs: "16px 0", md: "48px 24px" },
            position: "fixed",
            top: { xs: "unset", md: "32%" },
            right: { xs: "unset", md: "0" },
            width: { xs: "100%", md: "fit-content" },
          }}
        >
          <Grid>
            <Link href="#contact-info">
              <WhatsappIcon color={widgetColor} size="32" />
            </Link>
          </Grid>
          <Grid>
            <Link href="#contact-info">
              <MapIcon color={widgetColor} size="32" />
            </Link>
          </Grid>
          <Grid>
            <Link href="#comment">
              <ChatIcon color={widgetColor} size="32" />
            </Link>
          </Grid>
          <Grid>
            <ClockIcon color={widgetColor} size="32" />
          </Grid>
        </Grid>
      </Box>
      <Container
        sx={{
          backgroundImage: "url('/media/cuba.png')",
          backgroundRepeat: { xs: "repeat-y", md: "no-repeat" },
          backgroundSize: { xs: "contain", md: "100% 100%" },
        }}
      >
        <Box
          mb={5}
          mx="auto"
          sx={{
            background: "rgba(255,255,255,0.8)",
            boxShadow: "1px 1px 16px #FDE6E8",
            borderRadius: "24px",
            p: { xs: "24px 16px", md: 8 },
          }}
        >
          <MiniText
            sx={{ mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: descOne,
            }}
          />
          <Text
            sx={{ fontWeight: "bolder", mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: descTitle,
            }}
          />
          <MiniText
            sx={{ mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: descTwo,
            }}
          />
          <MiniText
            sx={{ mb: 3 }}
            dangerouslySetInnerHTML={{
              __html: descThree,
            }}
          />
        </Box>
        <Box
          sx={{
            background: "rgba(253,230,232, 0.8)",
            borderRadius: "24px",
            boxShadow: "1px 1px 10px #EFEFEF",
            mb: 5,
            px: 2,
            py: 4,
          }}
        >
          <SubTitle
            dangerouslySetInnerHTML={{ __html: infoTitle }}
            sx={{ pb: 2 }}
          />
          <Box id="address" mb={3}>
            <MiniText
              sx={{ textAlign: "left", mb: 2 }}
              dangerouslySetInnerHTML={{
                __html: infoAddress,
              }}
            />
            <Link href={`${infoAddressMap}`}>
              <Box
                sx={{
                  background: "#FFF",
                  boxShadow: "1px 1px 10px #FFF",
                  border: "1px solid #FDE6E8",
                  borderRadius: "24px",
                  p: "8px 64px",
                  width: "fit-content",
                }}
              >
                <MapIcon size="32" />
              </Box>
            </Link>
          </Box>
          <Box id="contact-info">
            <MiniText
              sx={{ textAlign: "left", mr: 2 }}
              dangerouslySetInnerHTML={{
                __html: `${infoFirstPhoneName} - ${infoFirstPhoneNum}`,
              }}
            />

            <MiniText
              sx={{ textAlign: "left", mr: 2 }}
              dangerouslySetInnerHTML={{
                __html: `${infoSecondPhoneName} - ${infoSecondPhoneNum}`,
              }}
            />
          </Box>
        </Box>
        <Box
          id="comment"
          mb={10}
          sx={{
            background: "rgba(255,255,255,0.8)",
            boxShadow: "1px 1px 16px #FDE6E8",
            borderRadius: "24px",
            px: 2,
            py: 4,
          }}
        >
          <SubTitle
            dangerouslySetInnerHTML={{ __html: wishTitleForm }}
            sx={{ pb: 2 }}
          />
          <MiniText
            dangerouslySetInnerHTML={{ __html: wishDescForm }}
            sx={{ pb: 2 }}
          />
          <Grid container>
            <Grid item py={2} xs={12}>
              <CommentForm
                textName="Name"
                textComment="Write your wish here !"
                textButton="Hantar"
                themeColor="#FDE6E8"
                font={poiretOne.style.fontFamily}
              />
            </Grid>
            <Grid item py={2} xs={12}>
              {comments?.map((comment: any, idx: string) => (
                <Box
                  mb={2}
                  sx={{
                    background:
                      Number(idx) % 2 === 0
                        ? "rgba(253,230,232, 0.4)"
                        : "rgba(240,240,240, 0.4)",
                    borderRadius: "24px",
                    p: "16px 24px",
                  }}
                >
                  <MiniText
                    sx={{
                      textAlign: "left",
                      fontWeight: "bolder",
                      marginBottom: "8px",
                    }}
                    dangerouslySetInnerHTML={{ __html: comment?.name! }}
                  />
                  <MiniText
                    sx={{ textAlign: "left" }}
                    dangerouslySetInnerHTML={{ __html: comment?.message! }}
                  />
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Layout1;
