import { Box, Grid, styled } from "@mui/material";
import Image from "next/image";
import { Mrs_Saint_Delafield, Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});
const mrsSaint = Mrs_Saint_Delafield({ subsets: ["latin"], weight: ["400"] });

const TextMrsSaint = styled("p")(() => ({
  fontFamily: `${mrsSaint.style.fontFamily} !important` || "auto",
}));

const TextPlayfairDisplay = styled("p")(() => ({
  fontFamily: `${playfairDisplay.style.fontFamily} !important` || "auto",
}));

const BannerModule = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          background: "#EEECE1",
          width: "100%",
          height: "480px",
          position: "relative",
        }}
      >
        <Box
          className="animate__animated animate__fadeInLeftBig animate__slow"
          sx={{
            position: "absolute",
            bottom: "20px",
            right: "60px",
            display: "flex",
          }}
        >
          <Image
            src="/media/general/wind.webp"
            alt="Pulpen Studio Digital Invitation Card"
            width={48}
            height={32}
            style={{ transform: "rotate(180deg)", marginTop: "32px" }}
          />
          <Image
            style={{ transform: "rotate(340deg)" }}
            src="/media/general/trolley.webp"
            alt="Pulpen Studio Digital Invitation Card"
            width={64}
            height={64}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            textAlign: "center",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Image
            src="/media/general/iphone.webp"
            alt="Pulpen Studio Home Banner"
            width={312}
            height={504}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            textAlign: "center",
            transform: "translate(-50%,-50%)",
          }}
        >
          <TextMrsSaint
            style={{ fontSize: "48px", fontWeight: "lighter" }}
            dangerouslySetInnerHTML={{ __html: "Launching" }}
          />
          <TextPlayfairDisplay
            style={{
              fontSize: "48px",
              fontWeight: "lighter",
              marginTop: "-16px",
            }}
            dangerouslySetInnerHTML={{ __html: "Sale" }}
          />
          <TextPlayfairDisplay
            style={{
              fontSize: "12px",
              fontWeight: "lighter",
              marginTop: "8px",
            }}
            dangerouslySetInnerHTML={{
              __html: `<span style="color: #800000"><b>RM10 off</b></span> on all products`,
            }}
          />
          <Link
            href="/catalogue"
            style={{ color: "#131313", textDecoration: "none" }}
          >
            <TextPlayfairDisplay
              style={{
                borderRadius: "24px",
                letterSpacing: "0.1em",
                background: "#FFF",
                padding: "8px",
                fontSize: "12px",
                marginTop: "56px",
              }}
              dangerouslySetInnerHTML={{ __html: "Check it out now ! " }}
            />
          </Link>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
        <Box
          sx={{
            height: "240px",
            background: "#242424",
            width: "100%",
          }}
        >
          <Box sx={{ width: "fit-content", mx: "auto", display: "flex" }}>
            <Image
              src="/media/general/qrinstagram.jpeg"
              alt="Pulpen Studio Instagram"
              width={160}
              height={240}
            />
            <p style={{ color: "#EFEFEF", letterSpacing: "0.15em" }}>
              Follow us on Instagram !
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            height: "240px",
            width: "100%",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            className="animate__animated animate__zoomIn animate__slow"
            sx={{
              position: "absolute",
              bottom: "-80px",
              transform: "rotate(-40deg) scaleX(-1)",
              left: "-80px",
            }}
          >
            <Image
              src="/media/animation/layout12-flower.webp"
              alt="Pulpen Studio Green Leaf"
              width={231}
              height={441}
            />
          </Box>
          <Box
            className="animate__animated animate__zoomIn animate__slow"
            sx={{
              position: "absolute",
              bottom: "-80px",
              transform: "rotate(40deg)",
              right: "-80px",
            }}
          >
            <Image
              src="/media/animation/layout12-flower.webp"
              alt="Pulpen Studio Green Leaf"
              width={231}
              height={441}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "0",
              left: "0%",
              marginTop: "-60px",
              opacity: "0.5",
            }}
          >
            <Image
              src="/media/animation/layout12-art.webp"
              alt="Pulpen Studio Green Leaf"
              width={400}
              height={400}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src="/media/cardSelection/card-12/main.png"
              alt="Pulpen Studio Latest Design"
              width={248}
              height={480}
            />
          </Box>
          <Box sx={{ position: "absolute", bottom: "20px", right: "60px" }}>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "700",
                background: "rgba(255,255,255,0.8)",
                padding: "8px 16px",
              }}
            >
              <Link
                href="/detail?layoutid=012"
                style={{ color: "#131313", textDecoration: "none" }}
              >
                Check out our latest design
              </Link>
            </p>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BannerModule;
