import { Layout1 } from "@/assets";
import Layout2 from "@/assets/einvite/layout-2";

export default function useListLayout() {
  const listLayout = {
    "001": <Layout1 />,
    "002": <Layout2 />,
  };

  return listLayout;
}
