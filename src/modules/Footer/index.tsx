import { Box, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#333",
        color: "#FFF",
        textAlign: "center",
        mt: 8,
        py: 2,
      }}
    >
      <Container>
        <p style={{ fontSize: "12px", fontWeight: "700" }}>
          Copyright © 2023 Pulpen Studio . All rights reserved
        </p>
      </Container>
    </Box>
  );
};

export default Footer;