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
}));

export const CategoryText = styled("p")(() => ({
  background: "rgb(221, 208, 200)",
  fontSize: "12px",
  fontWeight: "700",
  margin: "8px 0",
  padding: "4px 12px",
  width: "fit-content",
  borderRadius: "24px",
}));

export const Button1 = styled(Link)(() => ({
  border: "1px solid #DDD0C8",
  borderRadius: "24px",
  cursor: "pointer",
  color: "#333",
  textDecoration: "none",
  fontWeight: "700",
  padding: "8px 24px",
  margin: "8px 0",
  width: "fit-content",
  "&:hover": {
    background: "#DDD0C8",
  },
}));

const Button2 = styled(Link)(() => ({
  color: "#333",
  cursor: "pointer",
  fontWeight: "700",
  textDecoration: "none",
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
        <Grid container rowGap={6}>
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
                  width={288}
                  height={496}
                  alt={item.layoutid}
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
                  width={144}
                  height={248}
                  alt={item.layoutid}
                />
              </Box>
              <Box>
                <CategoryText>{item.category}</CategoryText>
                <Text sx={{ height: { xs: "40px", md: "unset" } }}>
                  {item.name}
                </Text>
                <Text>
                  {item.discountedPrice}{" "}
                  <span style={{ color: "#909090", fontSize: "12px" }}>
                    <s>{item.originalPrice}</s>
                  </span>
                </Text>
              </Box>
              <Box
                display={"flex"}
                justifyContent={{ xs: "center", md: "left" }}
                flexDirection={{ xs: "column", md: "row" }}
              >
                <Button1 href={`/e-invite?layoutid=${item.layoutid}`}>
                  Select
                </Button1>
                <Button2
                  sx={{
                    padding: { xs: "0", md: "8px 24px" },
                    margin: { xs: "0 24px", md: "8px 0" },
                  }}
                  href={`/detail?layoutid=${item.layoutid}`}
                >
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
