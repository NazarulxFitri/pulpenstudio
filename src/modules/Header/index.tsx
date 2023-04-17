import { Box, styled } from "@mui/material";
import Link from "next/link";

const LinkMenu = styled(Link)(({ theme }) => ({
  alignSelf: "center",
  color: "#333",
  fontWeight: 800,
  margin: "0 8px",
  textDecoration: "none",
}));

const Header = () => {
  return (
    <Box
      display="flex"
      px={{ xs: 1, md: 2, lg: 6 }}
      sx={{ boxShadow: "1px 1px 10px #E0E0E0" }}
    >
      <span
        style={{ fontSize: "48px", fontWeight: "800" }}
        dangerouslySetInnerHTML={{ __html: "Lumie" }}
      />
      <Box display="flex" sx={{ margin: "0 0 0 auto" }}>
        <LinkMenu href="/e-invite">e-Invite</LinkMenu>
        <LinkMenu href="/e-card">e-Card</LinkMenu>
      </Box>
    </Box>
  );
};

export default Header;
