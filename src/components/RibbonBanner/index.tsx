import { Box } from "@mui/material";

interface RibbonBannerProps {
  message: string;
}

const RibbonBanner: React.FC<RibbonBannerProps> = ({ message }) => {
  return (
    <Box
      sx={{
        background: "#DDD0C8",
        borderRadius: "8px",
        fontWeight: "500",
        p: 2,
      }}
    >
      {message}
    </Box>
  );
};

export default RibbonBanner;
