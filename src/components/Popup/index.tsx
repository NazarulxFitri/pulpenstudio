import { Box } from "@mui/material";
import Link from "next/link";

interface PopupProps {
  title: string;
  message: string;
  disclaimer: string;
  itemName: string;
}

const Popup: React.FC<PopupProps> = ({
  title,
  message,
  disclaimer,
  itemName,
}) => {
  return (
    <Box
      sx={{
        background: "#FFF",
        borderRadius: "16px",
        boxShadow: "1px 1px 1000px #333",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        padding: "16px",
        margin: "16px",
        textAlign: "center",
      }}
    >
      <Box>
        <p style={{ fontSize: "48px", fontWeight: 800 }}>{title}</p>
      </Box>
      <Box mt={2}>
        <p style={{ fontSize: "16px", fontWeight: 600 }}>{message}</p>
      </Box>
      <Box mt={2}>
        Please find your link here :{" "}
        <Link
          style={{ color: "#1976d2", fontWeight: 800, textDecoration: "none" }}
          href={`/e-invite/${itemName}`}
        >
          lumie/eInvite/{itemName}
        </Link>
      </Box>
      <Box mt={2}>
        <p style={{ fontSize: "16px", fontWeight: 600 }}>{disclaimer}</p>
      </Box>
    </Box>
  );
};

export default Popup;
