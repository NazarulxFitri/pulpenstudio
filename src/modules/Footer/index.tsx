import { InstagramIcon, TiktokIcon } from "@/components";
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
      <Box
        sx={{
          display: "flex",
          mx: "auto",
          py: { xs: 2, md: 8 },
          width: "fit-content",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          mr={{ xs: 0, md: 6 }}
          sx={{
            display: "flex",
            textAlign: { xs: "center", md: "unset" },
            flexDirection: "column",
            pr: { xs: 0, md: 6 },
            py: { xs: 6, md: 0 },
            borderRight: { xs: "none", md: "1px solid #D0D0D0" },
          }}
        >
          <Link
            href="/account"
            style={{
              color: "#333333",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            My Account
          </Link>
          <Link
            style={{
              color: "#333333",
              fontSize: "16px",
              textDecoration: "none",
              marginTop: "12px",
            }}
            href="/customize"
          >
            Customize
          </Link>
          <Link
            style={{
              color: "#333333",
              fontSize: "16px",
              textDecoration: "none",
              marginTop: "12px",
            }}
            href="/catalogue"
          >
            Catalogue
          </Link>
          <Link
            style={{
              color: "#333333",
              fontSize: "16px",
              textDecoration: "none",
              marginTop: "12px",
            }}
            href="/faq"
          >
            FAQ
          </Link>
        </Box>
        <Box sx={{ height: "fit-content", my: "auto" }}>
          <Link
            href="https://instagram.com/pulpenstudio?utm_source=qr&igshid=MThlNWY1MzQwNA=="
            target="__blank"
            style={{ color: "#333", textDecoration: "none" }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              Follow us at Instagram
              <span style={{ fontSize: "24px", margin: "0 8px" }}>
                @pulpenstudio
              </span>
              <InstagramIcon />
            </p>
          </Link>
          <Link
            href="https://www.tiktok.com/@pulpen.studio?_t=8g9RBZ72Bhi&_r=1"
            target="__blank"
            style={{
              color: "#333",
              textDecoration: "none",
              marginTop: "8px",
              display: "block",
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              Follow us at Tiktok
              <span style={{ fontSize: "24px", margin: "0 8px" }}>
                @pulpen.studio
              </span>
              <TiktokIcon />
            </p>
          </Link>
        </Box>
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
          }}
        >
          Copyright © 2023 Pulpen Studio . All rights reserved
        </p>
      </Box>
    </Box>
  );
};

export default Footer;
