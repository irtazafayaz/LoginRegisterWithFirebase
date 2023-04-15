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
import { Button } from "antd";
import { GoogleOutlined, SyncOutlined } from "@ant-design/icons";
import Link from "next/link";

const Login = () => {
  const router = useRouter();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((user) => {
        router.push("/");
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
      });
  };
  const register = async () => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((user) => {
        router.push("/");
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
      });
  };

  const onGoogleButtonTapped = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        router.push("/");
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center pt-4 display-4">
        {" "}
        {loading ? <SyncOutlined spin /> : "Login/Register"}{" "}
      </h2>

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


    <Link href="/reset-password" className = "btn btn-outline-danger btn-sm mt-5"> Reset Password </Link>

    </div>
  );
};

export default Login;
