import CommentForm from "@/components/Forms/CommentForm";
import CloseIcon from "@/components/Icons/CloseIcon";
import MapIcon from "@/components/Icons/MapIcon";
import { Box } from "@mui/material";

interface LocationPopupProps {
  title: string;
  color: string;
  location: {
    text: string;
    mapUrl: string;
  };
  setCommentPopup: (value: boolean) => void;
  setLocationPopup: (value: boolean) => void;
  setContactPopup: (value: boolean) => void;
  setMusicPopup: (value: boolean) => void;
}

const LocationPopup: React.FC<LocationPopupProps> = ({
  title,
  color,
  location,
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
        <Box sx={{ textAlign: "left", p: "0 16px" }}>
          <p>{location?.text}</p>
          <a
            style={{ color: "unset", textDecoration: "none" }}
            href={location?.mapUrl}
            target="__blank"
          >
            <Box
              mt={4}
              sx={{
                background: color,
                borderRadius: "24px",
                cursor: "pointer",
                display: "flex",
                p: 2,
                justifyContent: "center",
              }}
              gap={2}
            >
              Google Map <MapIcon />
            </Box>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default LocationPopup;