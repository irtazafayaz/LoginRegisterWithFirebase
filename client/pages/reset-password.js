import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Context } from "../context";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const {
    state: { user },
  } = useContext(Context);
  const router = useRouter();

  // redirect to the home page if user is logged in and trying to access the page
  useEffect(() => {
    if (user !== null) {
      router.push("/");
    }
  }, [user]);

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      url: process.env.passwordResetEmail,
      handleCodeInApp: true,
    };

    await sendPasswordResetEmail(auth, email, config)
      .then(() => {
        setEmail("");
        setLoading(false);
        toast.success("Check your email please.");
      })
      .catch((err) => {
        toast.error(err.message);
        console.log("ERROR SEND EMAIl");
        setLoading(false);
      });
  };

  return (
    <div className="container col-md-6 offset-md-3 p5">
      <h2> Reset Password </h2>
      <p className="lead"> Enter your email if you have already registered.</p>

      <form onSubmit={handleSubmitButton}>
        <input
          type="email"
          className="form-control"
          value={email}
          autoFocus
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-primary mt-3" disabled={!email || loading}>
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>

      {loading ? <SyncOutlined spin /> : ""}
    </div>
  );
};

export default ResetPassword;
