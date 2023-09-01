import { Box } from "@mui/material";
import React from "react";

interface PrevButtonProps {
  disabled: boolean;
}

const PrevButton: React.FC<PrevButtonProps> = ({ disabled }) => {
  return (
    <Box
      sx={{
        background: disabled ? "#efefef" : "#eeece1",
        borderRadius: "8px",
        color: disabled ? "#d0d0d0" : "unset",
        cursor: "pointer",
        p: "8px 16px",
      }}
    >
      Prev
    </Box>
  );
};

export default PrevButton;
