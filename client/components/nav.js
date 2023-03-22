import Link from "next/link";

const Nav = () => {
    return (
        <nav className="nav bg-light d-flex justify-content-between">
        <Link className="nav-link" href= "/" > Home</Link>
        <Link className="nav-link" href= "/login" > Login</Link>
      </nav>
    );
};
export default Nav;