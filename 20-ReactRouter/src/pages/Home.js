import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  // const navigate = useNavigate();
  return (
    <>
      <h1>Home Page</h1>
      <p style={{ color: "white" }}>
        Go to <Link to="/Products">the List of Products</Link>
      </p>
    </>
  );
};

export default HomePage;
