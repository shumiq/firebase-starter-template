import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

export default function useAuth() {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  useEffect(() => auth.onAuthStateChanged((user) => setUser(user)), []);

  return {
    user: user,
    signIn: (email, password) =>
      setPersistence(auth, browserLocalPersistence)
        .then(() =>
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              setUser(userCredential.user);
              return true;
            })
            .catch(() => false)
        )
        .catch(() => false),
    signOut: () =>
      signOut(auth)
        .then(() => {
          setUser(null);
          return true;
        })
        .catch(() => false),
  };
}
