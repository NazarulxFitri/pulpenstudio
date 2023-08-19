import CommentForm from "@/components/Forms/CommentForm";
import CloseIcon from "@/components/Icons/CloseIcon";
import { Box } from "@mui/material";

interface CommentPopupProps {
  title: string;
  color: string;
  setCommentPopup: (value: boolean) => void;
  setLocationPopup: (value: boolean) => void;
  setContactPopup: (value: boolean) => void;
}

const CommentPopup: React.FC<CommentPopupProps> = ({
  title,
  color,
  setCommentPopup,
  setLocationPopup,
  setContactPopup,
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
            }}
          >
            <CloseIcon />
          </Box>
        </Box>
        <Box sx={{ display: "flex", textAlign: "left", p: "0 16px" }}>
          <CommentForm
            textName="Nama"
            textComment="Tulis ucapan di sini"
            textButton="Hantar"
            themeColor={color}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CommentPopup;
