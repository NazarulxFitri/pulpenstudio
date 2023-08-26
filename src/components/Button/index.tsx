import { Box } from "@mui/material";

interface ButtonProps {
  children: string;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, disabled }) => {
  return (
    <Box
      sx={{
        background: disabled ? "#EFEFEF" : "#eeece1",
        borderRadius: "24px",
        boxShadow: "1px 1px 10px #E0E0E0",
        color: "#FFF",
        cursor: disabled ? "unset" : "pointer",
        fontWeight: "600",
        display: "block",
        margin: "32px auto",
        padding: "16px 96px",
        textAlign: "center",
        width: "fit-content",
      }}
    >
      {children}
    </Box>
  );
};

export default Button;
