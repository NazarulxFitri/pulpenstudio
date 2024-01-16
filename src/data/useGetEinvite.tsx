import { ref, get, child } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import db from "../../services/firebaseApp";

export interface EInviteConfig {
  data?: {
    dateTime: string;
    itemName: string;
    language: string;
    location: string;
    mapUrl: string;
    musicUrl: string;
    namePerson1: string;
    namePerson2: string;
    namePerson3: string;
    namePerson4: string;
    phonePerson1: string;
    phonePerson2: string;
    phonePerson3: string;
    phonePerson4: string;
    title1Bride: string;
    title1Groom: string;
    fullNameGroom: string;
    fullNameBride: string;
    title2: string;
  };
  layout: string;
  name: string;
  flag: "new" | "updated";
  paid: boolean;
  userId: string;
  createdAt: string;
  rsvp?: {
    attendance: string;
    name: string;
    phoneNumber: string;
    pax: number;
  }[];
  comments?: {
    message: string;
    name: string;
  }[];
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
    const data: EInviteConfig = rawData?.[id]!;
    const commentsLength = data?.comments?.length || 0;
    const rsvpLength = data?.rsvp?.length || 0;
    const layout = data?.layout;

    return { data, layout, commentsLength, rsvpLength, isLoading };
  }
}
