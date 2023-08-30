import { SvgIcon } from "@mui/material";

interface TickIconProps {
  color?: string;
  size?: string;
}

const TickIcon: React.FC<TickIconProps> = ({ color, size }) => {
  return (
    <SvgIcon viewBox="0 0 512 512" sx={{ fontSize: `${size}px` }}>
      <path
        fill={color}
        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
      />
    </SvgIcon>
  );
};

export default TickIcon;
