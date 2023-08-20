import { Great_Vibes, Poiret_One, Ubuntu } from "next/font/google";
import { Box, Container, Grid, List, Paper, styled } from "@mui/material";

interface CommentListProps {
  comment: any;
  idx: string;
}

const poiretOne = Poiret_One({ subsets: ["latin"], weight: "400" });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: "700" });

const UbuntuText = styled("p")(({ theme }) => ({
  fontFamily: `${ubuntu.style.fontFamily} !important` || "auto",
  fontWeight: "700",
  fontSize: "16px",
  textAlign: "center",
}));

const MiniText = styled("p")(({ theme }) => ({
  fontFamily: `${poiretOne.style.fontFamily} !important` || "auto",
  fontSize: "16px",
  textAlign: "center",
}));

const CommentList: React.FC<CommentListProps> = ({ comment, idx }) => {
  return (
    <Box
      key={comment}
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
      <UbuntuText
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
  );
};
export default CommentList;
