import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ProductContext } from "../context/ProductContext";

const Product = () => {
  const product = useContext(ProductContext);
  const user = useContext(UserContext);
  console.log('User',user)
  return (
    <div style={{ padding: "20px" }}>
      <h4>Product Page</h4>
      <p>name: {product.name}</p>
      <p>price: {product.price}</p>
      <p>product: {user?.name}</p>
    </div>
  );
};

export default Product;
