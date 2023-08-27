import { BoxContainer, RibbonBanner } from "@/components";
import Login from "@/modules/Login";
import EInviteModule from "@/modules/eInviteModule";
import useCheckauth from "@/utils/useCheckAuth";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const EInvite = () => {
  const { auth } = useCheckauth();
  const router = useRouter();
  const layout = router.query.layoutid;

  if (!layout)
    return (
      <Box m={{ xs: 4, md: 12 }} textAlign="center" minHeight="68vh">
        <Typography
          sx={{ fontSize: { xs: "16px", md: "24px" }, fontWeight: "700" }}
        >
          Please choose your design from our catalogue. Click below to visit our
          catalogue
        </Typography>
        <Box mt={4}>
          <Link
            style={{
              borderRadius: "24px",
              color: "#333",
              textDecoration: "none",
              fontSize: "24px",
              boxShadow: "1px 1px 10px #333",
              padding: "4px 12px",
            }}
            href="/catalogue"
          >
            Catalogue
          </Link>
        </Box>
      </Box>
    );

  if (!auth)
    return (
      <Box sx={{ minHeight: "76vh" }}>
        <Login />
      </Box>
    );

  return <EInviteModule />;
};
export default EInvite;
