import { collection, addDoc } from "firebase/firestore";
import db from "../../services/firebaseApp";

export default function useAddTest(itemName: string, itemLayout: string) {
  const dbInstance = collection(db, "eInviteApp");

  try {
    const result = addDoc(dbInstance, {
      itemName: itemName,
      itemLayout: itemLayout,
    });
  } catch (err) {
    console.log(err);
  }
}
