import { onIdTokenChanged } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { auth } from "../firebase";
import { Context } from "../context";

/**
 * create a component that will keep track of user's auth state
 * then wrap _app.js so that entire app knows if the user is logged in or not
 */

const FirebaseAuthState = ({ children }) => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    return onIdTokenChanged(auth, async (user) => {
      if (!user) {
        dispatch({
          type: "LOGOUT",
        });
      } else {
        const token = await user.getIdTokenResult();
        console.log("TOKEN",token);
      }
    });
  }, []);

  return <>{children}</>;
};

export default FirebaseAuthState;
