import db from "../../services/firebaseApp";
import { useState } from "react";
import { ref, set } from "firebase/database";
import useGetUserId from "@/utils/useGetUserId";

export default function usePostAddEinvite(name: string, layout: string) {
  const [loading, setLoading] = useState(false);
  const userId = useGetUserId();

  const action = async (cms: Object, currDate: string) => {
    try {
      console.log("xxx cms", cms);
      setLoading(true);
      set(ref(db, "eInviteApp/" + name), {
        userId: userId,
        name: name,
        layout: layout,
        data: cms,
        flag: "new",
        paid: false,
        createdAt: currDate,
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
