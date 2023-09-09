import { Box } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      id="footer"
      mt={8}
      sx={{
        background: "#eeece1",
        position: "absolute",
        width: "100%",
        zIndex: { xs: "3", md: "unset" },
      }}
    >
      <Box sx={{ display: "flex", mx: "auto", py: 2, width: "fit-content" }}>
        <Link
          href="https://instagram.com/pulpenstudio?utm_source=qr&igshid=MThlNWY1MzQwNA=="
          target="__blank"
          style={{ color: "#333", textDecoration: "none" }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "12px",
              fontWeight: "700",
            }}
          >
            Follow us at Instagram{" "}
            <span style={{ fontSize: "24px" }}>@pulpenstudio</span>
          </p>
        </Link>
      </Box>

      <Box
        sx={{
          backgroundColor: "#d0d0d0",
          m: "auto",
          height: "1px",
          width: "50%",
        }}
      />

      <Box sx={{ mx: 8, py: 2 }}>
        <p
          style={{
            color: "#909090",
            textAlign: "center",
            fontSize: "12px",
            fontWeight: "700",
          }}
        >
          Copyright © 2023 Pulpen Studio . All rights reserved
        </p>
      </Box>
    </Box>
  );
};

export default Footer;
