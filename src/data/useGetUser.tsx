import { ref, get, child } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import db from "../../services/firebaseApp";

export default function useGetUser() {
  const [isLoading, setIsLoading] = useState(false);
  const snapshot = useRef(null);
  const error = useRef(null);

  const getValue = async () => {
    setIsLoading(true);
    try {
      const root = ref(db);
      const dbGet = await get(child(root, "user"));
      const dbValue = dbGet.val();
      snapshot.current = dbValue;
    } catch (getError) {
      // @ts-ignore
      error.current = getError.message;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getValue();
  }, [snapshot]);

  const data = snapshot.current;

  return { data, isLoading };
}
