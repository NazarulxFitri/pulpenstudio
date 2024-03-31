import db from "../../services/firebaseApp";
import { useState } from "react";
import { ref, update } from "firebase/database";

export default function usePostUpdateRsvp(eInviteId: string) {
  const [loading, setLoading] = useState(false);

  const action = async (
    name: string,
    phoneNumber: string,
    attendance: boolean,
    pax: number,
    kidPax: number,
    rsvpLength: number,
    guestSide: string
  ) => {
    try {
      const key = rsvpLength;
      setLoading(true);
      update(ref(db, `eInviteApp/${eInviteId}/rsvp`), {
        [key]: {
          name,
          phoneNumber,
          attendance: attendance ? "true" : "false",
          pax: attendance ? pax : 0,
          kidPax: kidPax,
          guestSide: guestSide,
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
