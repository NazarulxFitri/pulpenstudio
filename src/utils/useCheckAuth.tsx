import { useEffect, useState } from "react";

export default function useCheckauth() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    !!sessionStorage.getItem("authToken") && setIsAuth(true);
    setLoading(false);
  }, []);

  return { isAuth, loading };
}
