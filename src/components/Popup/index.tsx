import { Box } from "@mui/material";
import Link from "next/link";

interface PopupProps {
  title: string;
  message: string;
  disclaimer: string;
  itemName: string;
  live?: boolean;
}

const Popup: React.FC<PopupProps> = ({
  title,
  message,
  disclaimer,
  itemName,
  live,
}) => {
  return (
    <>
      <Box
        id="overlay"
        sx={{
          background: "rgba(0,0,0,0.8)",
          position: "absolute",
          width: "100vw",
          height: "100vh",
          left: "0",
          top: "0",
        }}
      />
      <Box
        sx={{
          background: "#FFF",
          borderRadius: "16px",
          position: "absolute",
          top: "20%",
          left: 0,
          right: 0,
          padding: "16px 72px",
          textAlign: "center",
          width: "fit-content",
          margin: "0 auto",
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
            style={{
              color: "#1976d2",
              fontWeight: 800,
              textDecoration: "none",
            }}
            href={
              live ? `/e-invite/live/${itemName}` : `/e-invite/edit/${itemName}`
            }
          >
            lumie/eInvite/edit/{itemName}
          </Link>
        </Box>
        <Box mt={2}>
          <p style={{ fontSize: "16px", fontWeight: 600 }}>{disclaimer}</p>
        </Box>
      </Box>
    </>
  );
};

export default Popup;
