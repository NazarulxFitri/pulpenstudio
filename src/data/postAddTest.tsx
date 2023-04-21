import { collection, addDoc } from "firebase/firestore";
import db from "../../services/firebaseApp";
import { useState } from "react";

export default function usePostAddTest(itemName: string, itemLayout: string) {
  const [loading, setLoading] = useState(false);
  const dbInstance = collection(db, "eInviteApp");

  const action = async () => {
    try {
      setLoading(true);
      const result = addDoc(dbInstance, {
        itemName: itemName,
        itemLayout: itemLayout,
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
