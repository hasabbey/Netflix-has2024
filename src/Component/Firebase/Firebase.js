
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyArgmrFwevaoSHGyyt_p6Jqyzjgxo73gtw",
  authDomain: "netflex-clone-project-128c8.firebaseapp.com",
  projectId: "netflex-clone-project-128c8",
  storageBucket: "netflex-clone-project-128c8.appspot.com",
  messagingSenderId: "986824675371",
  appId: "1:986824675371:web:7fd4efac487da3e2299a6e"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
