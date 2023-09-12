import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box } from "@mui/material";

interface ContainerProps {
  children: any;
  fullWidth?: boolean;
}

const BoxContainer: React.FC<ContainerProps> = ({ children, fullWidth }) => {
  return (
    <Box
      px={{
        xs: fullWidth ? 0 : 2,
        md: fullWidth ? 0 : 2,
        lg: fullWidth ? 0 : 6,
      }}
      mx={{
        xs: "unset",
        md: 8,
      }}
      sx={{ my: 2, position: "relative", minHeight: "100vh" }}
    >
      {children}
    </Box>
  );
};

export default BoxContainer;
