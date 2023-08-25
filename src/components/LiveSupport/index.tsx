import { Box } from "@mui/material";
import LiveSupportIcon from "../Icons/LiveSupportIcon";
import { useRouter } from "next/router";

const LiveSupport = () => {
  const router = useRouter();
  const currentUrl = router.pathname;
  const isLive = currentUrl.includes("live");

  if (isLive) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "0",
        right: "0",
        textAlign: "center",
        m: { xs: 1, md: 4 },
      }}
    >
      <a
        style={{ color: "#FFF", textDecoration: "none" }}
        target="__blank"
        href="https://wa.link/nz0n3u"
      >
        <Box
          sx={{
            background: "#333",
            width: "fit-content",
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
            mx: "auto",
            p: "8px 8px 0",
          }}
        >
          <LiveSupportIcon size={"32"} />
        </Box>
        <Box
          sx={{
            background: "#333",
            borderRadius: "24px",
            px: 2,
            py: 1,
          }}
        >
          Need help ?
        </Box>
      </a>
    </Box>
  );
};

export default LiveSupport;
