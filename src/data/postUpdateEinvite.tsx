import db from "../../services/firebaseApp";

import { ref, update } from "firebase/database";

export default function usePostUpdateEinvite(layoutId: any, eInviteId: string) {
  const action = async (cms: any) => {
    try {
      update(ref(db, `eInviteApp/${eInviteId}`), {
        data: cms,
        layout: layoutId,
        flag: "updated",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    action,
  };
}
