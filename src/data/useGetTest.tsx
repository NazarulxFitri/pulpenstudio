import { collection, getDocs } from "firebase/firestore";
import db from "../../services/firebaseApp";
import { useEffect, useState } from "react";

interface GetTestProps {
  itemLayout: string;
  itemName: string;
  id: string;
}
[];

export default function useGetTest() {
  const [data, setData] = useState<GetTestProps>();
  const dbInstance = collection(db, "eInviteApp");

  const getValue = async () => {
    await getDocs(dbInstance).then((data) => {
      setData(
        // @ts-ignore
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  useEffect(() => {
    getValue();
  });

  return {
    data,
  };
}
