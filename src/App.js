import React from "react";
import User from "./User";
import UserClassComponent from "./UserClassComponent";
import ProductContextProvider from "./context/ProductContext";
import Product from "./Product";
import ProductList from "./ProductList";

export const UserContext = React.createContext();
const user = { name: "John", city: "NY" };

const App = () => {
  return (
    <>
      <UserContext.Provider value={user}>
        <ProductContextProvider>
          <User />
          <UserClassComponent />
          <Product />
          <ProductList />
        </ProductContextProvider>
      </UserContext.Provider>
    </>
  );
};

export default App;
