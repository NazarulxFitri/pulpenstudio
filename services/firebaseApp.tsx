import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDw7H-zIt5UMFRuSJYOs4Wv9aXu4KUhKPU",
  authDomain: "lumie-6cb4c.firebaseapp.com",
  projectId: "lumie-6cb4c",
  storageBucket: "lumie-6cb4c.appspot.com",
  messagingSenderId: "770513594285",
  appId: "1:770513594285:web:88a5e4eb12d6e00d8c2324",
  measurementId: "G-H9R8P5MHMG",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
