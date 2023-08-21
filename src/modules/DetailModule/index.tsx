import { BoxContainer } from "@/components";
import { layoutConfig } from "@/utils/LayoutConfig";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button1, CategoryText, Text } from "../CatalogueModule";

const DetailModule = ({}) => {
  const router = useRouter();
  const qlayoutId = router.query.layoutid;
  const listLayout = layoutConfig;
  const selectedLayout = listLayout.find((i) => i.layoutid === qlayoutId);

  return (
    <BoxContainer>
      <h1 style={{ fontSize: "32px", marginTop: "32px" }}>Detail</h1>
      <Grid container mt={8} gap={4}>
        <Grid item xs={12} md={4} sx={{ borderRight: "4px solid #DDD0C8" }}>
          <Box sx={{ display: "flex", overflow: "scroll" }}>
            {selectedLayout?.images.map((image, idx) => (
              <Image
                key={idx}
                src={image}
                alt={selectedLayout?.layoutid!}
                width={288}
                height={496}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex">
            <p style={{ fontSize: "24px", fontWeight: "700" }}>
              {selectedLayout?.name}
            </p>
            <Button1
              style={{ margin: "0 0 0 auto" }}
              href={`/e-invite?layoutid=${selectedLayout?.layoutid}`}
            >
              Try now for free
            </Button1>
          </Box>
          <CategoryText>{selectedLayout?.category}</CategoryText>
          <Text style={{ fontSize: "24px" }}>
            {selectedLayout?.discountedPrice}{" "}
            <span style={{ color: "#909090", fontSize: "12px" }}>
              <s>{selectedLayout?.originalPrice}</s>
            </span>
          </Text>
          <p style={{ margin: "8px 0" }}>{selectedLayout?.description}</p>
          <p style={{ fontWeight: "700" }}>Fonts used :</p>
          {selectedLayout?.font.map((font, idx) => (
            <p key={idx} style={{ margin: "8px 0" }}>
              - {font}
            </p>
          ))}
          <p style={{ fontWeight: "700" }}>Features included :</p>
          {selectedLayout?.features.map((feat, idx) => (
            <p key={idx} style={{ margin: "8px 0" }}>
              - {feat}
            </p>
          ))}
          <Box
            sx={{ background: "#DDD0C8", borderRadius: "24px", p: 2, my: 2 }}
          >
            <p style={{ margin: "8px 0", fontWeight: "700" }}>
              Do you know that you can try all our examples here for free ? Now
              you know !
            </p>
            <p style={{ margin: "8px 0" }}>
              Choose any design that you like. Follow the steps provided you.
              And tha&aposs it, your card is ready and can be viewed for free
            </p>
            <p style={{ margin: "8px 0" }}>
              Our policy : User can create card and feel it first for free. If
              you like it , can proceed with payment and we will make it ready
              for your event day !
            </p>
          </Box>
          <Box my={4}>
            <Button1 href={`/e-invite?layoutid=${selectedLayout?.layoutid}`}>
              Try now for free
            </Button1>
          </Box>
        </Grid>
      </Grid>
    </BoxContainer>
  );
};

export default DetailModule;
