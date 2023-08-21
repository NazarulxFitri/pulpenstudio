import { Box, Tooltip, styled } from "@mui/material";
import Link from "next/link";
import { Sacramento } from "next/font/google";
import { CloseIcon, MenuIcon } from "@/components";
import { useState } from "react";
import useGetUserId from "@/utils/useGetUserId";
import useGetEinvite from "@/data/useGetEinvite";

const sacramento = Sacramento({ subsets: ["latin"], weight: ["400"] });

const LinkMenu = styled(Link)(({ theme }) => ({
  alignSelf: "center",
  color: "#333",
  fontWeight: 800,
  margin: "16px 0",
  textDecoration: "none",
  "&:hover": {
    color: "#DDD0C8",
  },
  display: "block",
  fontSize: "16px",
  [theme.breakpoints.up("md")]: {
    margin: "0 8px",
  },
}));

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const userId = useGetUserId();
  const { data: items } = useGetEinvite();
  const userAssets: any = [];

  //   @ts-ignore
  for (const key in items) {
    //   @ts-ignore
    if (items[key].userId === userId) userAssets.push(items[key]);
  }

  const needAttention = !!userAssets?.find((i: any) => i.paid === false);

  return (
    <Box
      display={{ xs: "block", md: "flex" }}
      px={{ xs: 1, md: 2, lg: 6 }}
      py={0.5}
      sx={{
        boxShadow: "1px 1px 10px #DDD0C8",
        textAlign: { xs: "center", md: "unset" },
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
      <Box
        my={2}
        display={{ xs: "block", md: "none" }}
        onClick={() => {
          menuOpen ? setMenuOpen(false) : setMenuOpen(true);
        }}
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </Box>
      <Box display={{ xs: "none", md: "flex" }} sx={{ margin: "0 0 0 auto" }}>
        <LinkMenu href="/catalogue">Catalogue</LinkMenu>
        <LinkMenu href="/e-invite">e-Invite</LinkMenu>
        <LinkMenu href="/account">
          My Account
          {needAttention && (
            <Tooltip title="Need attention">
              <span
                style={{
                  background: "#DDD0C8",
                  color: "#333",
                  borderRadius: "24px",
                  fontSize: "12px",
                  padding: "4px 10px",
                  marginLeft: "4px",
                  verticalAlign: "super",
                }}
              >
                i
              </span>
            </Tooltip>
          )}
        </LinkMenu>
      </Box>
      {menuOpen && (
        <Box
          display={{ xs: "block", md: "none" }}
          sx={{ margin: "0 0 0 auto" }}
        >
          <LinkMenu href="/catalogue">Catalogue</LinkMenu>
          <LinkMenu href="/e-invite">e-Invite</LinkMenu>
          <LinkMenu href="/account">My Account</LinkMenu>
        </Box>
      )}
    </Box>
  );
};

export default Header;
