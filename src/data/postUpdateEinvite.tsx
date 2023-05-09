import db from "../../services/firebaseApp";
import { useState } from "react";
import { ref, update } from "firebase/database";

export default function usePostUpdateEinvite(
  data: Array<string>,
  layoutId: string,
  eInviteId: string
) {
  const [loading, setLoading] = useState(false);
  const action = async () => {
    try {
      setLoading(true);
      update(ref(db, "eInviteApp/" + eInviteId), {
        data,
        layout: layoutId,
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
