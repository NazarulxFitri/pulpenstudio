import { Great_Vibes, Poiret_One, Ubuntu } from "next/font/google";
import { Box, Container, Grid, List, Paper, styled } from "@mui/material";

interface CommentListProps {
  comment: any;
  idx: string;
  bgColor: string;
  textColor: string;
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

const CommentList: React.FC<CommentListProps> = ({
  bgColor,
  textColor,
  comment,
  idx,
}) => {
  return (
    <Box
      key={comment}
      sx={{
        borderRadius: "8px",
        color: textColor,
        p: "16px 16px",
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
