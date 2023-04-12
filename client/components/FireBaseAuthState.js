import { onIdTokenChanged } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { auth } from "../firebase";
import { Context } from "../context";
import { axiosAuth } from "../actions/axios";
import { destroyCookie, setCookie } from "nookies";

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

        destroyCookie(null, "token", {
          path: "/booking",
        });
        destroyCookie(null, "token", {
          path: "/",
        });
        setCookie(null, "token", "", { path: "/booking" });
        console.log(
          "/client/firebaseauth/onIdTokenChanged - Cookies Destroyed \n"
        );
      } else {
        const { token } = await user.getIdTokenResult();
        destroyCookie(null, "token", { path: "/booking" });
        destroyCookie(null, "token", { path: "/" });
        setCookie(null, "token", token, { path: "/booking" });
        console.log("/client/firebaseauth/onIdTokenChanged - Cookies Set \n");
        axiosAuth.post("/current-user", {}).then((res) => {
          dispatch({
            type: "LOGIN",
            payload: res.data,
          });
        });
      }
    });
  }, []);

  return <>{children}</>;
};

export default FirebaseAuthState;
