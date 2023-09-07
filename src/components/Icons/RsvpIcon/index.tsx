import { Box } from "@mui/material";

interface RsvpIconProps {
  color?: string;
  size?: string;
}

const RsvpIcon: React.FC<RsvpIconProps> = ({ color, size }) => {
  return <Box sx={{ fontWeight: "700" }}>RSVP</Box>;
};

export default RsvpIcon;
