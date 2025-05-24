import CloseIcon from "@/components/Icons/CloseIcon";
import { Box } from "@mui/material";
import Image from "next/image";

interface GiftPopupProps {
  iconColor?: string;
  title: string;
  color: string;
  giftImage?: string;
  setRsvpPopup: (value: boolean) => void;
  setCommentPopup: (value: boolean) => void;
  setLocationPopup: (value: boolean) => void;
  setContactPopup: (value: boolean) => void;
  setGiftPopup: (value: boolean) => void;
  textInsideColor?: string;
}

const GiftPopup: React.FC<GiftPopupProps> = ({
  giftImage,
  iconColor,
  title,
  color,
  setRsvpPopup,
  setCommentPopup,
  setLocationPopup,
  setContactPopup,
  setGiftPopup,
  textInsideColor
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
          height: "480px",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", p: 2 }}>
          <p style={{ fontSize: "20px", fontWeight: "700", color: textInsideColor || iconColor }}>
            {title} | <span style={{ fontWeight: "300" }}>Gift</span>
          </p>
          <Box
            sx={{ m: "0 0 0 auto" }}
            onClick={() => {
              setRsvpPopup(false);
              setCommentPopup(false);
              setContactPopup(false);
              setLocationPopup(false);
              setGiftPopup(false);
            }}
          >
            <CloseIcon color="#333" />
          </Box>
        </Box>
        <Box>
          <p style={{ fontSize: "14px", marginBottom: "10px", color: textInsideColor || iconColor }}>
            Sumbangan ikhlas boleh disalurkan ke sini :
          </p>
          <Image
            src={giftImage!}
            width={300}
            alt={"Money gift - Pulpen Studio"}
            height={450}
            style={{ width: "280px", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GiftPopup;
