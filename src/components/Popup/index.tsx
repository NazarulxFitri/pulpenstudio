import { Box } from "@mui/material";
import Link from "next/link";

interface PopupProps {
  title: string;
  message: string;
  disclaimer: string;
  itemName: string;
  heightvh?: boolean;
  live?: boolean;
}

const Popup: React.FC<PopupProps> = ({
  title,
  message,
  disclaimer,
  itemName,
  live,
  heightvh,
}) => {
  return (
    <Box>
      <Box
        id="overlay"
        sx={{
          background: "rgba(0,0,0,0.8)",
          position: "absolute",
          mt: -5,
          width: "100vw",
          height: { xs: "100%", md: "100%" },
          left: "0",
          top: "0",
          ml: { xs: 0, md: -8 },
          pb: "104px",
        }}
      />
      <Box
        sx={{
          background: "#FFF",
          borderRadius: "16px",
          position: "absolute",
          top: "10%",
          left: 0,
          right: 0,
          padding: { xs: "16px 24px", md: "16px 72px" },
          textAlign: "center",
          width: "fit-content",
          margin: "0 auto",
        }}
      >
        <p style={{ fontSize: "24px", fontWeight: "700" }}>
          Congratz, your card is ready !
        </p>
        <p style={{ marginTop: "16px" }}>
          Disclaimer : Card creation is free of charge. You can view it for 48
          hours
        </p>
        <Box
          mt={4}
          mb={2}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent={"center"}
          rowGap={2}
        >
          <Link
            style={{
              background: "#eeece1",
              borderRadius: "8px",
              fontWeight: "700",
              textDecoration: "none",
              color: "#333",
              padding: "8px 16px",
              margin: "0 8px",
            }}
            href={`/e-invite/live/${itemName}` as string}
          >
            Check the card
          </Link>
          <Link
            style={{
              borderRadius: "8px",
              border: "1px solid #eeece1",
              fontWeight: "700",
              textDecoration: "none",
              color: "#333",
              padding: "8px 16px",
              margin: "0 8px",
            }}
            href={`/account?tab=mywork`}
          >
            Confirm order
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Popup;
