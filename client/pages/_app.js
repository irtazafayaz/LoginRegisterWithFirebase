import "bootstrap/dist/css/bootstrap.css";
import Nav from "../components/nav";
import { Provider } from "../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FireBaseAuthState from "../components/FireBaseAuthState";

export default function MyApp({ Component, pageProps }) {
  return (
    <FireBaseAuthState>
      <Provider>
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
      </Provider>
    </FireBaseAuthState>
  );
}
