// React Imports
import { useState, useEffect, createContext, useContext } from "react";

// Firebase Auth
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Firebase Firestore
import { doc, getDoc, setDoc } from "firebase/firestore";

// Firebase Config
import { auth } from "../firebase/firebase";
import { db } from "../firebase/firebase";
import { useRouter } from "next/router";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    setUser(null);
    await signOut(auth);
  };

  const getUserData = async (user) => {
    const docRef = doc(db, "users", user?.uid);

    try {
      const res = await getDoc(docRef);
      setUser(res.data());

      if (res.data() === undefined) {
        const newUser = {
          uID: user.uid,
          rol: "T",
          username: user.displayName || user.email.split("@")[0],
          email: user.email,
          avatar: user.photoURL || "",
        };
        await setDoc(docRef, newUser, { merge: true });
        setUser(newUser);
      }
    } catch (error) {
      console.log("Error Login", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getUserData(user);
        // router.push("/");
      } else {
        setUser(null);
        router.push("/login");
      }
      setLoadingUser(false);
    });

    return () => unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, logIn, logOut, loadingUser }}>
      {loadingUser ? null : children}
    </AuthContext.Provider>
  );
};
