import React, { useContext } from "react";
import { ProductContext } from "./context/ProductContext";

const Product = () => {
  const product = useContext(ProductContext);
  return (
    <div style={{ padding: "20px" }}>
      <h4>Product Page</h4>
      <p>name: {product.name}</p>
      <p>price: {product.price}</p>
    </div>
  );
};

export default Product;
