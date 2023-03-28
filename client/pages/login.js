import { async } from "@firebase/util";
import { useRouter } from "next/router";
import { useState } from "react";
import LoginRegisterForm from "../components/LoginRegisterForm";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const login = async () => {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((user) => {
        console.log(user);
      })
      .catch((e) => toast.error(e.message));
  };
  const register = async () => {
    await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((user) => {
        console.log(user);
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="container">
      <h2 className="text-center pt-4 display-4">Login / Register</h2>
      <div className="row">
        
        <LoginRegisterForm
          email={loginEmail}
          setEmail={setLoginEmail}
          password={loginPassword}
          setPassword={setLoginPassword}
          buttonName="Login"
          handleSubmit={login}
        />

        <LoginRegisterForm
          email={registerEmail}
          setEmail={setRegisterEmail}
          password={registerPassword}
          setPassword={setRegisterPassword}
          buttonName="Register"
          handleSubmit={register}
        />
      </div>
    </div>
  );
};

export default Login;
