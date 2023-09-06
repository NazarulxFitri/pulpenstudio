import { Box } from "@mui/material";

interface RibbonBannerProps {
  message: string;
}

const RibbonBanner: React.FC<RibbonBannerProps> = ({ message }) => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        p: 2,
      }}
    >
      {message}
    </Box>
  );
};

export default RibbonBanner;
