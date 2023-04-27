import { Layout1, Layout2, Layout3 } from "@/assets";
import { FontFamilyConfig } from "@/pages/e-invite/[eInviteId]";

export default function useListLayout(
  fontFamily?: FontFamilyConfig,
  title1?: string,
  title1Color?: string,
  title1Size?: string,
  title1Shadow?: string,
  title2?: string,
  title2Color?: string,
  title2Size?: string,
  title2Shadow?: string,
  description1?: string,
  description1Color?: string,
  description1Size?: string,
  description2?: string,
  description2Color?: string,
  description2Size?: string,
  description3?: string,
  description3Color?: string,
  description3Size?: string
) {
  const listLayout = {
    "001": (
      <Layout1
        {...{
          fontFamily,
          title1,
          title1Color,
          title1Size,
          title1Shadow,
          title2,
          title2Color,
          title2Size,
          title2Shadow,
          description1,
          description1Color,
          description1Size,
          description2,
          description2Color,
          description2Size,
          description3,
          description3Color,
          description3Size,
        }}
      />
    ),
    "002": (
      <Layout2
        {...{
          fontFamily,
          title1,
          title1Color,
          title1Size,
          title2,
          title2Color,
          title2Size,
          description1,
          description1Color,
          description1Size,
          description2,
          description2Color,
          description2Size,
          description3,
          description3Color,
          description3Size,
        }}
      />
    ),
    "003": (
      <Layout3
        {...{
          fontFamily,
          title1,
          title1Color,
          title1Size,
          title2,
          title2Color,
          title2Size,
          description1,
          description1Color,
          description1Size,
          description2,
          description2Color,
          description2Size,
          description3,
          description3Color,
          description3Size,
        }}
      />
    ),
  };

  return listLayout;
}
