import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { Context } from "../context";
import { auth } from "../firebase";

const FireBaseAuthState = ({children}) => {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      if (!user) {
        dispatch({
          type: "LOGOUT",
        });
      } else {
        dispatch({
          type: "LOGIN",
          payload: user,
        });
      }
    });
  }, []);
  return <>{children}</>
};

export default FireBaseAuthState;
