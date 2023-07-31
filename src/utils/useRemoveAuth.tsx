import Cookies from "universal-cookie";

export default function useRemoveAuth() {
  const cookies = new Cookies();
  cookies.remove("authToken", { path: "/" });
  window.location.reload();
}
