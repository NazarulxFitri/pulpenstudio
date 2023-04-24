import db from "../../services/firebaseApp";
import { useState } from "react";
import { ref, set } from "firebase/database";

export default function usePostAddEinvite(name: string, layout: string) {
  const [loading, setLoading] = useState(false);

  const action = async () => {
    try {
      setLoading(true);
      set(ref(db, "eInviteApp/" + name), {
        name: name,
        layout: layout,
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
