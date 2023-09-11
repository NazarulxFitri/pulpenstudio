import { BoxContainer } from "@/components";
import { layoutConfig } from "@/utils/LayoutConfig";
import { Box, Grid, styled } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button2, CategoryText } from "../CatalogueModule";
import BreadcrumbModule from "../BreadcrumbModule";

export const Text = styled("p")(() => ({
  background: "#FFF",
  fontWeight: "700",
  margin: "8px 0",
}));

const DetailModule = ({}) => {
  const router = useRouter();
  const qlayoutId = router.query.layoutid;
  const listLayout = layoutConfig;
  const selectedLayout = listLayout.find((i) => i.layoutid === qlayoutId);

  return (
    <BoxContainer>
      <h1 style={{ fontSize: "24px", marginTop: "40px" }}>Detail</h1>
      <Box mt={2}>
        <BreadcrumbModule
          text1="Home"
          cta1="/"
          text2="Catalogue"
          cta2="/catalogue"
          level="three"
          text3={selectedLayout?.name}
        />
      </Box>
      <Grid container mt={8} gap={4}>
        <Grid item xs={12} md={4} sx={{ borderRight: "1px solid #eeece1" }}>
          <Box sx={{ display: "flex", overflow: "scroll" }}>
            {selectedLayout?.images.map((image, idx) => (
              <Image
                key={idx}
                src={image}
                alt={`Pulpen Studio | ${selectedLayout?.name}`}
                width={288}
                height={496}
                style={{ marginRight: "24px" }}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex">
            <p style={{ fontSize: "24px", fontWeight: "700" }}>
              {selectedLayout?.name}
            </p>
          </Box>
          <CategoryText>{selectedLayout?.category}</CategoryText>
          <Text style={{ fontSize: "24px" }}>
            {selectedLayout?.discountedPrice}{" "}
            <span style={{ color: "#909090", fontSize: "12px" }}>
              <s>{selectedLayout?.originalPrice}</s>
            </span>
          </Text>
          <Box my={6}>
            {selectedLayout?.layoutid !== "000" ? (
              <Button2
                style={{ padding: "12px 16px" }}
                href={`/e-invite?layoutid=${selectedLayout?.layoutid}`}
              >
                Try now for free
              </Button2>
            ) : (
              <Button2
                style={{ padding: "12px 16px" }}
                href={`https://api.whatsapp.com/send?phone=601156271776&text=Hi%20%2C%20saya%20datang%20dari%20e-invite%20!%20#CustomizeDesign%20`}
              >
                Proceed with Admin
              </Button2>
            )}
          </Box>
          <p style={{ margin: "12px 0" }}>{selectedLayout?.description}</p>
          <p style={{ margin: "12px 0", fontWeight: "700" }}>
            Features included :
          </p>
          {selectedLayout?.features.map((feat, idx) => (
            <p key={idx} style={{ margin: "8px 0" }}>
              - {feat}
            </p>
          ))}
          <Box
            sx={{
              background: "#eeece1",
              borderRadius: "8px",
              p: { xs: 2, md: 6 },
              my: 2,
            }}
          >
            <p style={{ margin: "12px 0", fontWeight: "700" }}>
              Do you know that you can try all our examples here for free ? Now
              you know !
            </p>
            <p style={{ margin: "12px 0" }}>
              Choose any design that you like. Follow the steps provided you.
              And tha&apos;s it, your card is ready and can be viewed for free
            </p>
            <p style={{ margin: "12px 0" }}>
              Our policy : User can create card and feel it first for free. If
              you like it , can proceed with payment and we will make it ready
              for your event day !
            </p>
          </Box>
        </Grid>
      </Grid>
    </BoxContainer>
  );
};

export default DetailModule;
