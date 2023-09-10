import CommentForm from "@/components/Forms/CommentForm";
import CloseIcon from "@/components/Icons/CloseIcon";
import { locale } from "@/utils/Locale";
import { Box } from "@mui/material";

interface CommentPopupProps {
  language: string;
  title: string;
  color: string;
  setRsvpPopup: (value: boolean) => void;
  setCommentPopup: (value: boolean) => void;
  setLocationPopup: (value: boolean) => void;
  setContactPopup: (value: boolean) => void;
}

const CommentPopup: React.FC<CommentPopupProps> = ({
  language,
  title,
  color,
  setRsvpPopup,
  setCommentPopup,
  setLocationPopup,
  setContactPopup,
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
          <p style={{ fontSize: "24px", fontWeight: "700", color: color }}>
            {title}
          </p>
          <Box
            sx={{ m: "0 0 0 auto" }}
            onClick={() => {
              setRsvpPopup(false);
              setCommentPopup(false);
              setContactPopup(false);
              setLocationPopup(false);
            }}
          >
            <CloseIcon color="#333" />
          </Box>
        </Box>
        <Box sx={{ display: "flex", textAlign: "left", p: "0 16px" }}>
          <CommentForm
            textName={locale?.[language]?.WIDGET_WISH_PLACEHOLDER_FIRST}
            textComment={locale?.[language]?.WIDGET_WISH_PLACEHOLDER_SECOND}
            textButton={locale?.[language]?.WIDGET_WISH_BUTTON}
            themeColor={color}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CommentPopup;
