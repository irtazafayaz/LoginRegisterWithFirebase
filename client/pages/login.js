import { async } from "@firebase/util";
import { useRouter } from "next/router";
import { useState } from "react";
import LoginRegisterForm from "../components/LoginRegisterForm";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";
import { Button, Space } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

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

  const onGoogleButtonTapped = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("USER GOOGLE",user);
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center pt-4 display-4">Login / Register</h2>

      <Button
        onClick={onGoogleButtonTapped}
        className="mb-3 mt-3 col-md-4 offset-md-4"
        type="primary"
        danger="true"
        icon={<GoogleOutlined />}
        shape="round"
      >
        Login With Google
      </Button>

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
