import React from "react";
import User from "./components/User";
import UserClassComponent from "./components/UserClassComponent";
import ProductContextProvider from "./context/ProductContext";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import UserContextProvider from "./context/UserContext";

const App = () => {
  return (
    <>
      <UserContextProvider>
        <ProductContextProvider>
          <User />
          <UserClassComponent />
          <Product />
          <ProductList />
        </ProductContextProvider>
      </UserContextProvider>
    </>
  );
};

export default App;
