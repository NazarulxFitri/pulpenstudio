import Cookies from "universal-cookie";

export function useRemoveAuth() {
  const cookies = new Cookies();
  cookies.remove("authToken", { path: "/" });
  window.location.reload();
}
