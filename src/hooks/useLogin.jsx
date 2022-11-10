import { signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { createUserDocument } from "../firebase/createUserDocument";

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (provider) => {
    setIsPending(true);

    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error("Could not complete signup");
      }

      const user = res.user;

      console.log(user);
      setIsPending(false);
      createUserDocument(user);
      dispatch({ type: "LOGIN", payload: user });
    } catch (error) {
      console.error(error);
      setIsPending(false);
    }
  };

  return { login, isPending };
};
