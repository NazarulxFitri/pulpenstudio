import CloseIcon from "@/components/Icons/CloseIcon";
import ReactPlayer from "react-player";
import { Box } from "@mui/material";

interface MusicPopupProps {
  title: string;
  musicPopup: boolean;
  setCommentPopup: (value: boolean) => void;
  setLocationPopup: (value: boolean) => void;
  setContactPopup: (value: boolean) => void;
  setMusicPopup: (value: boolean) => void;
}

const MusicPopup: React.FC<MusicPopupProps> = ({
  title,
  musicPopup,
  setCommentPopup,
  setLocationPopup,
  setContactPopup,
  setMusicPopup,
}) => {
  return (
    <Box
      sx={{
        background: "rgba(0,0,0,0.4)",
        bottom: "60px",
        width: "100%",
        height: "100vh",
        position: "absolute",
        visibility: musicPopup ? "visible" : "hidden",
      }}
    >
      <Box
        sx={{
          background: "#FFF",
          bottom: "0",
          position: "absolute",
          height: "296px",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", p: 2 }}>
          <p style={{ fontSize: "24px", fontWeight: "700" }}>{title}</p>
          <Box
            sx={{ m: "0 0 0 auto" }}
            onClick={() => {
              setCommentPopup(false);
              setContactPopup(false);
              setLocationPopup(false);
              setMusicPopup(false);
            }}
          >
            <CloseIcon />
          </Box>
        </Box>
        <Box
          sx={{ textAlign: "left", p: "0 16px", width: "auto", height: "auto" }}
        >
          <ReactPlayer
            url="https://www.youtube.com/embed/M-iIFo6wJ_w?autoplay=1"
            playing={true}
            loop={true}
            width="100%"
            height="100%"
            playsinline={true}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MusicPopup;
