import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdcLgxO0CXmeupY4RVqG1YlK8aTen1PIs",
  authDomain: "docket-d51a8.firebaseapp.com",
  projectId: "docket-d51a8",
  storageBucket: "docket-d51a8.appspot.com",
  messagingSenderId: "937895280950",
  appId: "1:937895280950:web:6969ac8ee08235c7ca7397",
  measurementId: "G-TXJ628T5X7",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
