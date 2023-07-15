import usePostUpdateComment from "@/data/postUpdateComment";
import useGetEinvite from "@/data/useGetEinvite";
import { Box, Grid, TextField, styled } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface CommentFormProps {
  textName: string;
  textComment: string;
  textButton: string;
  themeColor: string;
  font: string;
}

const Input = styled(TextField)(() => ({
  background: "transparent",
  margin: "4px 0",
}));

const CommentForm: React.FC<CommentFormProps> = ({
  textName,
  textComment,
  textButton,
  themeColor,
  font,
}) => {
  const router = useRouter();
  const id = router.query.eInviteId;

  const isEditting = router.pathname.includes("edit");
  const { commentsLength } = useGetEinvite(id as string);
  const { action } = usePostUpdateComment(id as string);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function handleClick() {
    if (isEditting) return null;
    await action(name, message, commentsLength);
    router.reload();
  }

  return (
    <Box>
      <Input
        InputLabelProps={{ shrink: true }}
        sx={{
          "& .MuiInput-input": {
            fontFamily: `${font} !important` || "auto",
            fontSize: "24px",
          },
        }}
        label={textName}
        multiline
        variant="standard"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        InputLabelProps={{ shrink: true }}
        sx={{
          "& .MuiInput-input": {
            fontFamily: `${font} !important` || "auto",
            fontSize: "24px",
          },
        }}
        label={textComment}
        fullWidth
        multiline
        variant="standard"
        onChange={(e) => setMessage(e.target.value)}
      />
      <Box
        sx={{
          background: !isEditting ? themeColor : "grey",
          boxShadow: "1px 1px solid #EFEFEF",
          width: "fit-content",
          borderRadius: "24px",
          mt: 2,
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <p
          style={{
            cursor: "pointer",
            padding: "12px 32px",
            fontFamily: `${font} !important` || "auto",
            fontWeight: "bolder",
          }}
          dangerouslySetInnerHTML={{ __html: textButton }}
        />
      </Box>
    </Box>
  );
};

export default CommentForm;
