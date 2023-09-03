import { Box, Tooltip, styled } from "@mui/material";
import Link from "next/link";
import { Sacramento } from "next/font/google";
import { CloseIcon, MenuIcon } from "@/components";
import { useState } from "react";
import useGetUserId from "@/utils/useGetUserId";
import useGetEinvite from "@/data/useGetEinvite";
import { useRemoveAuth } from "@/utils/useRemoveAuth";
import useCheckauth from "@/utils/useCheckAuth";
import { useRouter } from "next/router";
import Image from "next/image";

const sacramento = Sacramento({ subsets: ["latin"], weight: ["400"] });

const LinkMenu = styled(Link)(({ theme }) => ({
  alignSelf: "center",
  color: "#333",
  fontWeight: 800,
  margin: "16px 0",
  textDecoration: "none",
  display: "block",
  fontSize: "16px",
  [theme.breakpoints.up("md")]: {
    margin: "0 8px",
  },
}));

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const userId = useGetUserId();
  const { data: items } = useGetEinvite();
  const userAssets: any = [];
  const { auth } = useCheckauth();
  const isLoggedIn = !!auth;

  //   @ts-ignore
  for (const key in items) {
    //   @ts-ignore
    if (items[key].userId === userId) userAssets.push(items[key]);
  }

  const needAttention = userAssets?.filter((i: any) => i.paid === false);

  return (
    <Box
      display={{ xs: "block", md: "flex" }}
      px={{ xs: 1, md: 2, lg: 6 }}
      py={0.5}
      sx={{
        backgroundImage:
          "linear-gradient(to top, #eeece1, #f8efe9, #fcf4f4, #fcf9fb, #ffffff)",
        boxShadow: "1px 1px 10px #eeece1",
        textAlign: { xs: "center", md: "unset" },
      }}
    >
      <LinkMenu href="/">
        <Image
          src="/media/general/pulpen_logo.png"
          alt="Pulpen Studio - Logo"
          width={175}
          height={89}
        />
      </LinkMenu>
      <Box
        my={2}
        display={{ xs: "block", md: "none" }}
        onClick={() => {
          menuOpen ? setMenuOpen(false) : setMenuOpen(true);
        }}
      >
        {menuOpen ? <CloseIcon color="#333" /> : <MenuIcon />}
      </Box>
      <Box display={{ xs: "none", md: "flex" }} sx={{ margin: "0 0 0 auto" }}>
        <LinkMenu href="/catalogue">Catalogue</LinkMenu>
        <LinkMenu href="/account">
          My Account
          {needAttention.length > 0 && (
            <Tooltip
              title={`You have ${needAttention.length} items in pending payment status`}
            >
              <span
                style={{
                  background: "#eeece1",
                  color: "#333",
                  borderRadius: "8px",
                  fontWeight: "500",
                  fontSize: "12px",
                  padding: "4px 10px",
                  marginLeft: "4px",
                  verticalAlign: "super",
                }}
              >
                {needAttention.length}
              </span>
            </Tooltip>
          )}
        </LinkMenu>
        <LinkMenu href="/faq">FAQ</LinkMenu>
        <p
          style={{
            background: "#eeece1",
            color: "#333",
            padding: "8px 12px",
            borderRadius: "8px",
          }}
        >
          {isLoggedIn ? (
            <p onClick={useRemoveAuth}>Logout</p>
          ) : (
            <LinkMenu href="/account">Login</LinkMenu>
          )}
        </p>
      </Box>
      {menuOpen && (
        <Box
          display={{ xs: "block", md: "none" }}
          sx={{ margin: "0 0 0 auto" }}
        >
          <LinkMenu href="/catalogue">Catalogue</LinkMenu>
          <LinkMenu href="/account">My Account</LinkMenu>
          <LinkMenu href="/faq">FAQ</LinkMenu>
          <p>
            {isLoggedIn ? (
              <p onClick={useRemoveAuth}>Logout</p>
            ) : (
              <LinkMenu href="/account">Login</LinkMenu>
            )}
          </p>
        </Box>
      )}
    </Box>
  );
};

export default Header;
