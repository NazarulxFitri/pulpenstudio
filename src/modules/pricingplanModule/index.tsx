import { BoxContainer } from "@/components";
import { Box } from "@mui/material";

interface PricingPlanModuleProps {}

const PricingPlanModule: React.FC<PricingPlanModuleProps> = () => {
  return (
    <BoxContainer>
      <h1>Pricing Plan</h1>
      <Box mt={4} sx={{ display: "flex", justifyContent: "center" }} gap={2}>
        <Box
          sx={{
            borderRadius: "24px",
            boxShadow: "1px 1px 10px #DDD0C8",
            px: 2,
            py: 4,
            width: "400px",
          }}
        >
          <Box>
            <p style={{ fontSize: "24px", fontWeight: "700" }}>
              eInvite Card Standard
            </p>
            <p style={{ fontSize: "16px", fontWeight: "700" }}>RM65.00 </p>
          </Box>
          <Box mt={2}>
            <p>Services included :</p>
            <p>- 1 eInvite card online website (90 days expiry)</p>
            <p>- 1 eInvite card in PDF format</p>
            <p>
              - Support during event day & 1 backup website copied from original
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: "24px",
            boxShadow: "1px 1px 10px #DDD0C8",
            px: 2,
            py: 4,
            width: "400px",
          }}
        >
          <Box>
            <p style={{ fontSize: "24px", fontWeight: "700" }}>
              eInvite Card Custom Edition
            </p>
            <p style={{ fontSize: "16px", fontWeight: "700" }}>RM75.00</p>
          </Box>
          <Box mt={2}>
            <p>Services included :</p>
            <p>
              - 1 eInvite card online website (90 days expiry) with custom
              design
            </p>
            <p>- 1 eInvite card in PDF format</p>
            <p>
              - Support during event day & 1 backup website copied from original
            </p>
          </Box>
        </Box>
      </Box>
    </BoxContainer>
  );
};

export default PricingPlanModule;
