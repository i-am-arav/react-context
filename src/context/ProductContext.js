import React from "react";
import { useState } from "react";

export const ProductContext = React.createContext();
export const ProductListContext = React.createContext();

const product = { id: 1, name: "Charger", price: "$120" };

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([{ ...product }]);
  return (
    <ProductContext.Provider value={product}>
      <ProductListContext.Provider value={[products,setProducts]}>
        {children}
      </ProductListContext.Provider>
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
