import { Box, Grid, styled } from "@mui/material";
import BoxContainer from "../../components/BoxContainer";
import { layoutConfig } from "@/utils/LayoutConfig";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbModule from "../BreadcrumbModule";

interface CatalogueModuleProps {}

export const Text = styled("p")(() => ({
  background: "#FFF",
  fontWeight: "700",
  margin: "8px 0",
  textAlign: "center",
}));

export const CategoryText = styled("p")(() => ({
  background: "rgb(221, 208, 200)",
  fontSize: "12px",
  fontWeight: "700",
  margin: "8px 0",
  padding: "4px 12px",
  width: "fit-content",
  borderRadius: "8px",
}));

export const Button2 = styled(Link)(() => ({
  border: "2px solid #eeece1",
  borderRadius: "24px",
  color: "#333",
  cursor: "pointer",
  fontWeight: "500",
  textDecoration: "none",
  padding: "8px 24px",
  margin: "8px 0",
  "&:hover": {
    background: "#eeece1",
  },
}));

const CatalogueModule: React.FC<CatalogueModuleProps> = ({}) => {
  const listLayout = layoutConfig;

  return (
    <BoxContainer>
      <h1 style={{ fontSize: "24px", marginTop: "40px" }}>Catalogue</h1>
      <Box mt={2}>
        <BreadcrumbModule
          text1="Home"
          cta1="/"
          text2="Catalogue"
          cta2="/catalogue"
          level="two"
        />
      </Box>
      <Box mt={4}>
        <Grid container rowGap={6} columnSpacing={2}>
          {listLayout?.map((item) => (
            <Grid item xs={6} md={4} lg={3} key={item.name}>
              <Box
                display={{
                  xs: "none",
                  md: "block",
                }}
                sx={{ width: "fit-content", mx: "auto" }}
              >
                <Image
                  src={item.images?.[0]!}
                  width={248}
                  height={480}
                  alt={`Pulpen Studio | ${item.name}`}
                />
              </Box>
              <Box
                display={{
                  xs: "block",
                  md: "none",
                }}
                sx={{ width: "fit-content", mx: "auto" }}
              >
                <Image
                  src={item.images?.[0]!}
                  width={128}
                  height={248}
                  alt={`Pulpen Studio | ${item.name}`}
                />
              </Box>
              <Box>
                <Text
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    maxHeight: "19.5px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.name}
                </Text>
                <Text>
                  {item.discountedPrice}{" "}
                  <span style={{ color: "#909090", fontSize: "12px" }}>
                    <s>{item.originalPrice}</s>
                  </span>
                </Text>
              </Box>
              <Box sx={{ width: "fit-content", margin: "24px auto 0" }}>
                <Button2 href={`/detail?layoutid=${item.layoutid}`}>
                  More Info
                </Button2>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </BoxContainer>
  );
};

export default CatalogueModule;
