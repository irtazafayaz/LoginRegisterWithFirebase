import "bootstrap/dist/css/bootstrap.css";
import Nav from "../components/nav";
import { Provider } from "../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FirebaseAuthState from "../components/FirebaseAuthState";
import "antd/dist/reset.css";

export default function MyApp({ Component, pageProps }) {
  return (
      <Provider>
        <FirebaseAuthState>
        <Nav />
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Component {...pageProps} />
        </FirebaseAuthState>
      </Provider>
  );
}
