import axios from "axios";
import { parseCookies } from "nookies";

const AddBooking = () => {
  return (
    <div className="container">
      <h2 className="pt-30">Hope you have a great time using our website ❤️</h2>
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const cookies = parseCookies(context);
    //   console.log("NOOKIES SENDING TOKEN", cookies);
    const { data } = await axios.get(`http://localhost:8000/api/private-route`, {
      headers: {
        token: cookies.token,
      },
    });
    if (data.ok) {
      return { props: {} };
    } else {
      console.log("/client/bookme/serverSideProps - data returned false \n");
    }
  } catch (err) {
    console.log("/client/bookme/serverSideProps - Caught an error \n", err);    
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
}

export default AddBooking;
