import db from "../../services/firebaseApp";
import { useState } from "react";
import { ref, update } from "firebase/database";

export default function usePostUpdateComment(eInviteId: string) {
  const [loading, setLoading] = useState(false);

  const action = async (
    name: string,
    message: string,
    commentsLength: number
  ) => {
    try {
      const key = commentsLength;
      setLoading(true);
      update(ref(db, `eInviteApp/${eInviteId}/comments`), {
        [key]: {
          name,
          message,
        },
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
