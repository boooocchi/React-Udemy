import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return (
    <>
      <div>ProductDetails</div>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          back
        </Link>
      </p>
    </>
  );
};

export default ProductDetails;
