import db from "../../services/firebaseApp";
import { useState } from "react";
import { ref, set } from "firebase/database";
import useGetUserId from "@/utils/useGetUserId";

export default function usePostAddEinvite(name: string, layout: string) {
  const [loading, setLoading] = useState(false);
  const userId = useGetUserId();

  const action = async () => {
    try {
      setLoading(true);
      set(ref(db, "eInviteApp/" + name), {
        userId: userId,
        name: name,
        layout: layout,
        flag: "new",
      });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return {
    action,
    loading,
  };
}
