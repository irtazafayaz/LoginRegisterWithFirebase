import Link from "next/link";
import { useContext } from "react";
import { Context } from "../context";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

const Nav = () => {
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const router = useRouter();

  const handleLogoutButton = async () => {
    await signOut(auth);
    dispatch({
      type: "LOGOUT",
    });
    router.push("/login");
  };

  return (
    <nav className="nav bg-light d-flex justify-content-between">
      <Link className="nav-link" href="/">
        {" "}
        Home
      </Link>
      {user ? (
        <Link className="nav-link" href="/logout" onClick={handleLogoutButton}>
          {" "}
          Logout
        </Link>
      ) : (
        <Link className="nav-link" href="/login">
          {" "}
          Login
        </Link>
      )}
    </nav>
  );
};
export default Nav;
