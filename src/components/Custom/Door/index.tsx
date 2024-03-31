import { Box, styled } from "@mui/material";
import { Libre_Baskerville } from "next/font/google";
import Image from "next/image";

interface DoorProps {
  color: string;
  doorMainColor?: string;
  children?: any;
  clickOpen: boolean;
  setClickOpen: (value: boolean) => void;
}

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Text = styled("p")(() => ({
  fontFamily: `${baskerville.style.fontFamily} !important` || "auto",
  fontSize: "16px",
  textAlign: "center",
}));

const CustomDoor: React.FC<DoorProps> = ({
  color,
  children,
  clickOpen,
  setClickOpen,
  doorMainColor,
}) => {
  return (
    <Box
      sx={{
        position: clickOpen ? "absolute" : "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
        }}
      >
        <Box
          className={clickOpen ? "animate__animated animate__slideOutLeft" : ""}
          sx={{
            position: "absolute",
            top: "0",
            zIndex: 3,
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
            clickOpen ? "animate__animated animate__slideOutRight" : ""
          }
          sx={{
            position: "absolute",
            bottom: "0",
            zIndex: 3,
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
        <Box
          className={clickOpen ? "animate__animated animate__slideOutLeft" : ""}
          id="left-door"
          sx={{
            background: "#ebe2d2",
            backgroundImage: "url('/media/animation/layout-997-bg.png')",
            backgroundSize: "cover",
            width: "50%",
            height: "100vh",
            zIndex: "2",
          }}
        ></Box>
        <Box
          className={
            clickOpen ? "animate__animated animate__slideOutRight" : ""
          }
          id="right-door"
          sx={{
            background: "#ebe2d2",
            backgroundImage: "url('/media/animation/layout-997-bg.png')",
            backgroundSize: "cover",
            width: "50%",
            height: "100vh",
            zIndex: "2",
          }}
        ></Box>
        <Box
          onClick={() => setClickOpen(true)}
          sx={{
            position: "absolute",
            top: clickOpen ? "-50%" : "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: "2",
          }}
        >
          <Image
            src="/media/animation/layout-997-full.png"
            alt="Pulpen Studio Layout 997"
            width={380}
            height={360}
            style={{ display: "block" }}
          />
          <Text
            sx={{ fontSize: "12px", mt: 4, color: "#ac6e29" }}
            dangerouslySetInnerHTML={{
              __html: "<b>Klik untuk BUKA</b> | <i>Click to OPEN</i>",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomDoor;
