import { Box } from "@mui/material";

interface RibbonBannerProps {
  message: string;
}

const RibbonBanner: React.FC<RibbonBannerProps> = ({ message }) => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        px: 2,
        py: 1,
      }}
    >
      {message}
    </Box>
  );
};

export default RibbonBanner;
