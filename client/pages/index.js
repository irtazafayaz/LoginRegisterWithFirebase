import { useContext } from "react";
import { Context } from "../context";

const Home = () => {
  const { state, dispatch } = useContext(Context); 
  return (
    <div className="container">
        <h2>Home Page</h2>
        {JSON.stringify(state)}
    </div>
  );
};

export default Home;
