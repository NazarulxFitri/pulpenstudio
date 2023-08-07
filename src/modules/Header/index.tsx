import { Box, styled } from "@mui/material";
import Link from "next/link";
import { Sacramento } from "next/font/google";

const sacramento = Sacramento({ subsets: ["latin"], weight: ["400"] });

const LinkMenu = styled(Link)(({ theme }) => ({
  alignSelf: "center",
  color: "#333",
  fontWeight: 800,
  margin: "0 8px",
  textDecoration: "none",
  "&:hover": {
    color: "#DDD0C8",
  },
}));

const Header = () => {
  return (
    <Box
      display="flex"
      px={{ xs: 1, md: 2, lg: 6 }}
      py={0.5}
      sx={{
        boxShadow: "1px 1px 10px #DDD0C8",
      }}
    >
      <LinkMenu href="/">
        <span
          id="n"
          style={{
            fontFamily: sacramento.style.fontFamily,
            fontSize: "48px",
            fontWeight: "800",
          }}
          dangerouslySetInnerHTML={{
            __html: `Pulpen Studio`,
          }}
        />
      </LinkMenu>
      <Box display="flex" sx={{ margin: "0 0 0 auto" }}>
        <LinkMenu href="/account">My Account</LinkMenu>
        <LinkMenu href="/e-invite">e-Invite</LinkMenu>
        <LinkMenu href="/pricingPlan">Pricing Plan</LinkMenu>
      </Box>
    </Box>
  );
};

export default Header;
