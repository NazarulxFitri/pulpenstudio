import { Layout1, Layout2, Layout3, Layout4, Layout5 } from "@/assets";

export default function useListLayout() {
  const listLayout = {
    "001": <Layout1 />,
    "002": <Layout2 />,
    "003": <Layout3 />,
    "004": <Layout4 />,
    "005": <Layout5 />,
  };

  return listLayout;
}
