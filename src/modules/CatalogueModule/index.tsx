import { Box, Grid, styled } from "@mui/material";
import BoxContainer from "../../components/BoxContainer";
import { layoutConfig } from "@/utils/LayoutConfig";
import Image from "next/image";
import Link from "next/link";

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
  padding: "8px 24px",
  margin: "8px 0",
  textDecoration: "none",
}));

const CatalogueModule: React.FC<CatalogueModuleProps> = ({}) => {
  const listLayout = layoutConfig;

  return (
    <BoxContainer>
      <h1 style={{ fontSize: "32px", marginTop: "32px" }}>Catalogue</h1>
      <Box mt={4}>
        <Grid container>
          {listLayout?.map((item) => (
            <Grid item xs={12} md={3} key={item.name}>
              <Image
                src={item.images?.[0]!}
                width={288}
                height={496}
                alt={item.layoutid}
                style={{ display: "block", margin: "auto" }}
              />
              <Box>
                <CategoryText>{item.category}</CategoryText>
                <Text>{item.name}</Text>
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
              >
                <Button1 href={`/e-invite?layoutid=${item.layoutid}`}>
                  Select
                </Button1>
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
