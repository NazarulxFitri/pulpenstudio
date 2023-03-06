import { Box } from "@mui/material";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const Header = () => {
  return (
    <Box px={2} display="flex" sx={{ boxShadow: "0 4px 8px #00e4ff" }}>
      <Box>
        <h1
          className={montserrat.className}
          style={{ textShadow: "1px 4px #898999", margin: "8px 0" }}
        >
          <span style={{ color: "#FFF" }}>D</span>
          <span style={{ color: "#D413D4" }}>O</span>
          <span style={{ color: "#00E4FF" }}>C</span>
          <span style={{ color: "#FFF" }}>K</span>
          <span style={{ color: "#D413D4" }}>E</span>
          <span style={{ color: "#00E4FF" }}>T</span>
        </h1>
      </Box>
    </Box>
  );
};

export default Header;
