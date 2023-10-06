import { Box, Checkbox, Grid, styled } from "@mui/material";
import BoxContainer from "../../components/BoxContainer";
import { layoutConfig } from "@/utils/LayoutConfig";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbModule from "../BreadcrumbModule";
import { useRouter } from "next/router";

interface ColorSelectionsConfig {
  blue: string;
  orange: string;
  gold: string;
  black: string;
  red: string;
  pink: string;
  brown: string;
  purple: string;
  green: string;
}

export const Text = styled("p")(() => ({
  background: "#FFF",
  margin: "8px 0",
  textAlign: "center",
}));

export const CategoryText = styled("p")(() => ({
  background: "#eeece1",
  fontSize: "12px",
  margin: "8px 0",
  padding: "4px 12px",
  width: "fit-content",
  borderRadius: "8px",
}));

export const Button2 = styled(Link)(() => ({
  border: "1px solid #eeece1",
  borderRadius: "24px",
  color: "#333",
  cursor: "pointer",
  display: "block",
  textDecoration: "none",
  padding: "8px 24px",
  maxWidth: "100%",
  "&:hover": {
    background: "#eeece1",
  },
}));

const CatalogueModule: React.FC = ({}) => {
  const listLayout = layoutConfig;
  const router = useRouter();

  // @ts-ignore
  const selectedColor = router?.query?.colors?.split(",");
  const selectedCard =
    !!selectedColor && selectedColor?.[0] !== ""
      ? listLayout?.filter((i) => selectedColor?.includes(i.color))
      : listLayout;

  const colorArr = [
    "purple",
    "black",
    "brown",
    "blue",
    "green",
    "orange",
    "gold",
    "pink",
    "red",
  ];
  const colorSelections: ColorSelectionsConfig = {
    purple: "#8A2BE2",
    black: "#131313",
    brown: "#DEB887",
    blue: "#6495ED",
    green: "#006400",
    orange: "#FF7F50",
    gold: "#B8860B",
    pink: "#FF69B4",
    red: "#DC143C",
  };

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
        <Grid container>
          <Grid item md={2}>
            <p
              style={{ fontSize: "16px", fontWeight: "700" }}
              dangerouslySetInnerHTML={{ __html: "Filter" }}
            />
            <Box mt={2}>
              <p
                style={{ fontSize: "16px" }}
                dangerouslySetInnerHTML={{ __html: "Colors" }}
              />
              <Box
                mt={1}
                display="inline-flex"
                sx={{ flexWrap: "wrap", whiteSpace: "break-spaces" }}
                gap={1}
              >
                {colorArr?.map((color) => {
                  return (
                    <Checkbox
                      id={color}
                      onChange={() => {
                        // @ts-ignore
                        const splited = router?.query?.colors?.split(",");

                        if (!splited?.includes(color)) {
                          router.push({
                            query: {
                              colors:
                                color +
                                (!!router.query.colors
                                  ? `,${router.query.colors}`
                                  : ""),
                            },
                          });
                        } else {
                          router.push({
                            query: {
                              colors: splited
                                .filter((e: string) => !e.includes(color))
                                .join(),
                            },
                          });
                        }
                      }}
                      sx={{
                        background: "#EEECE1",
                        color:
                          colorSelections[
                            color as keyof typeof colorSelections
                          ],
                        "&.Mui-checked": {
                          color:
                            colorSelections[
                              color as keyof typeof colorSelections
                            ],
                        },
                      }}
                    />
                  );
                })}
              </Box>
            </Box>
          </Grid>
          <Grid item md={10}>
            <Grid container rowGap={6} columnSpacing={2}>
              {selectedCard?.map((item) => (
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
                    <Box
                      sx={{
                        display: "flex",
                        mx: "auto",
                        border: "1px solid #d9d9d9",
                        width: "fit-content",
                      }}
                    >
                      <Box
                        sx={{
                          width: "16px",
                          height: "16px",
                          background:
                            colorSelections[
                              item.color as keyof typeof colorSelections
                            ],
                        }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ width: "fit-content", margin: "24px auto 0" }}>
                    <Button2 href={`/detail?layoutid=${item.layoutid}`}>
                      More Info
                    </Button2>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </BoxContainer>
  );
};

export default CatalogueModule;
