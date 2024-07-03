import CloseIcon from "@/components/Icons/CloseIcon";
import MapIcon from "@/components/Icons/MapIcon";
import { Box } from "@mui/material";

interface LocationPopupProps {
  iconColor?: string;
  title: string;
  color: string;
  location: {
    text: string;
    mapUrl: string;
  };
  setRsvpPopup: (value: boolean) => void;
  setCommentPopup: (value: boolean) => void;
  setLocationPopup: (value: boolean) => void;
  setContactPopup: (value: boolean) => void;
  setGiftPopup: (value: boolean) => void;
}

const LocationPopup: React.FC<LocationPopupProps> = ({
  iconColor,
  title,
  color,
  location,
  setRsvpPopup,
  setCommentPopup,
  setLocationPopup,
  setContactPopup,
  setGiftPopup,
}) => {
  return (
    <Box
      sx={{
        bottom: "60px",
        width: "100%",
        height: "100vh",
        position: "absolute",
      }}
    >
      <Box
        className="animate__animated animate__backInUp"
        sx={{
          background: "#FFF",
          bottom: "0",
          position: "absolute",
          height: "296px",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", p: 2 }}>
          <p style={{ fontSize: "20px", fontWeight: "700", color: iconColor }}>
            {title} | <span style={{ fontWeight: "300"}}>Location</span>
          </p>
          <Box
            sx={{ m: "0 0 0 auto" }}
            onClick={() => {
              setRsvpPopup(false);
              setCommentPopup(false);
              setContactPopup(false);
              setLocationPopup(false);
              setGiftPopup(false)
            }}
          >
            <CloseIcon color="#333" />
          </Box>
        </Box>
        <Box sx={{ textAlign: "left", p: "0 16px" }}>
          <p style={{ color: "#333" }}>{location?.text}</p>
          <a
            style={{ color: "unset", textDecoration: "none" }}
            href={location?.mapUrl}
            target="__blank"
          >
            <Box
              mt={4}
              sx={{
                border: `1px solid ${color}`,
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                p: 2,
                justifyContent: "center",
              }}
              gap={2}
            >
              Location <span style={{fontSize: "12px"}}>Google / Waze</span> <MapIcon />
            </Box>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default LocationPopup;
