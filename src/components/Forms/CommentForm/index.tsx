import usePostUpdateComment from "@/data/postUpdateComment";
import useGetEinvite from "@/data/useGetEinvite";
import { Box, TextField, styled } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

interface CommentFormProps {
  textName: string;
  textComment: string;
  textButton: string;
  themeColor: string;
}

const Input = styled(TextField)(() => ({
  margin: "4px 0",
}));

const CommentForm: React.FC<CommentFormProps> = ({
  textName,
  textComment,
  textButton,
  themeColor,
}) => {
  const router = useRouter();
  const id = router.query.eInviteId;

  const { commentsLength } = useGetEinvite(id as string);
  const { action } = usePostUpdateComment(id as string);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  async function handleClick() {
    if (!name || !message) {
      setErrorMessage(true);
      return null;
    }
    await action(name, message, commentsLength!);
    router.reload();
  }

  return (
    <Box>
      <Input
        InputLabelProps={{ shrink: true }}
        sx={{
          "& label.Mui-focused": {
            color: "#333",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: themeColor,
          },
        }}
        error={errorMessage && !name}
        label={`${textName} | Name`}
        multiline
        variant="standard"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        InputLabelProps={{ shrink: true }}
        sx={{
          "& label.Mui-focused": {
            color: "#333",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: themeColor,
          },
          mt: 2,
        }}
        error={errorMessage && !message}
        label={`${textComment} | Write wishes here`}
        fullWidth
        multiline
        variant="standard"
        onChange={(e) => setMessage(e.target.value)}
      />
      <Box
        sx={{
          background: themeColor,
          boxShadow: "1px 1px solid #EFEFEF",
          width: "fit-content",
          borderRadius: "8px",
          mt: 2,
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <p
          style={{
            cursor: "pointer",
            padding: "12px 32px",
            fontWeight: "bolder",
          }}
          dangerouslySetInnerHTML={{ __html: `${textButton} | Submit` }}
        />
      </Box>
    </Box>
  );
};

export default CommentForm;
