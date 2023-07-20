import { Box, styled } from "@mui/material";
import Link from "next/link";
import { Rubik_Puddles, Press_Start_2P } from "next/font/google";

const rubikPuddles = Rubik_Puddles({ subsets: ["latin"], weight: "400" });
const pressStart2p = Press_Start_2P({ subsets: ["latin"], weight: "400" });

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
      py={2}
      sx={{ boxShadow: "1px 1px 10px #E0E0E0" }}
    >
      <span
        id="n"
        style={{
          fontFamily: pressStart2p.style.fontFamily,
          fontSize: "48px",
          fontWeight: "800",
        }}
        dangerouslySetInnerHTML={{
          __html: `<span style="text-shadow: 1px 1px 1px #0F0C24; color: ">L</span><span style="color:#A350A3">U</span><span style="color:#C1436D">M</span><span style="color:#11ABC1">i</span><span style="color:#FA2742">E</span>`,
        }}
      />
      <Box display="flex" sx={{ margin: "0 0 0 auto" }}>
        <LinkMenu href="/e-invite">e-Invite</LinkMenu>
      </Box>
    </Box>
  );
};

export default Header;
