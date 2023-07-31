import Cookies from "universal-cookie";

export default function useGetUserId() {
  const cookies = new Cookies();
  const userId = cookies.get("authToken");
  return userId;
}
