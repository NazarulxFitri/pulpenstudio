import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function useCheckauth() {
  const cookies = new Cookies();
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState();

  useEffect(() => {
    setAuth(cookies.get("authToken"));
    setLoading(false);
  }, [2000]);

  return { auth, loading };
}
