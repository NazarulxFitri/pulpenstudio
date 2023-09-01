import { Box } from "@mui/material";
import React from "react";

interface NextButtonProps {
  disabled: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ disabled }) => {
  return (
    <Box
      sx={{
        background: disabled ? "#efefef" : "#eeece1",
        borderRadius: "8px",
        color: disabled ? "#d0d0d0" : "unset",
        cursor: "pointer",
        p: "8px 16px",
        margin: "0 auto",
        width: "fit-content",
      }}
    >
      Next
    </Box>
  );
};

export default NextButton;
