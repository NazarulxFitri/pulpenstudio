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
        xs: fullWidth ? 0 : 1,
        md: fullWidth ? 0 : 2,
        lg: fullWidth ? 0 : 6,
      }}
      sx={{ my: 2, position: "relative" }}
    >
      {children}
    </Box>
  );
};

export default BoxContainer;
