import db from "../../services/firebaseApp";
import { useState } from "react";
import { ref, set } from "firebase/database";
import useGetUser from "./useGetUser";

export default function usePostAddUser() {
  const [loading, setLoading] = useState(false);
  const { data } = useGetUser();

  //   @ts-ignore
  const id = !data?.length ? 0 : data?.length;

  const action = async (
    name: string,
    password: string,
    contactNumber: string,
    emailAddress: string
  ) => {
    try {
      setLoading(true);
      set(ref(db, "user/" + id), {
        id: id,
        name: name,
        password: password,
        contactNumber: contactNumber,
        emailAddress: emailAddress,
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
