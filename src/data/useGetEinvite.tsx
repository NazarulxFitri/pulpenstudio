import { ref, get, child } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import db from "../../services/firebaseApp";

export interface EInviteConfig {
  data?: any;
  layout: string;
  name: string;
  flag: "new" | "updated";
  paid: boolean;
  userId: string;
  createdAt: string;
}

export default function useGetEinvite(id?: string) {
  const [isLoading, setIsLoading] = useState(true);
  const snapshot = useRef(null);
  const error = useRef(null);

  const getValue = async () => {
    try {
      const root = ref(db);
      const dbGet = await get(child(root, "eInviteApp"));
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

  if (!id) {
    const data = snapshot.current;
    return { data, isLoading };
  } else {
    const rawData = snapshot.current;
    const data: EInviteConfig | undefined = rawData?.[id];
    // @ts-ignores
    const commentsLength = data?.comments?.length || 0;
    // @ts-ignores
    const layout = data?.layout;

    return { data, layout, commentsLength, isLoading };
  }
}
