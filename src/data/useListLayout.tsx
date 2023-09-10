import {
  Layout1,
  Layout2,
  Layout3,
  Layout4,
  Layout5,
  Layout6,
  Layout7,
  Layout8,
  Layout9,
} from "@/assets";

export default function useListLayout() {
  const listLayout = {
    "001": <Layout1 />,
    "002": <Layout2 />,
    "003": <Layout3 />,
    "004": <Layout4 />,
    "005": <Layout5 />,
    "006": <Layout6 />,
    "007": <Layout7 />,
    "008": <Layout8 />,
    "009": <Layout9 />,
  };

  return listLayout;
}
