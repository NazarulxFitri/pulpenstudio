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
        border: "1px solid #DDD0C8",
        background: "#fff",
        boxShadow: "1px 1px 10px #DDD0C8",
        borderRadius: "24px",
        p: 2,
        position: "fixed",
        bottom: "0",
        right: "0",
        m: 4,
      }}
    >
      <a
        style={{ color: "#333" }}
        target="__blank"
        href="https://wa.link/nz0n3u"
      >
        <LiveSupportIcon size={"32"} />
      </a>
    </Box>
  );
};

export default LiveSupport;
