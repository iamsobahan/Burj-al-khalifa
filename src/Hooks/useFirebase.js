import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import firebaseInit from "../Firebase/Firebase.init";
firebaseInit();

const useFirebase = () => {
  const [user, setuser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth).then((result) => {
      setuser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
      }
    });
  }, []);

  return {
    logOut,
    googleLogIn,
    user,
  };
};

export default useFirebase;
