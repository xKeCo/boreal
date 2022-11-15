import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjI5sczZMqiSgEyT9BAuzI6ODntW1CJbc",
  authDomain: "boreal-3f05e.firebaseapp.com",
  projectId: "boreal-3f05e",
  storageBucket: "boreal-3f05e.appspot.com",
  messagingSenderId: "356627381596",
  appId: "1:356627381596:web:ca2042c6459a05fefc1599",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();
