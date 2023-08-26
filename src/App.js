import React from 'react'
import User from './User';
import UserClassComponent from './UserClassComponent';
import ProductContextProvider from './context/ProductContext';
import Product from './Product';

export const UserContext = React.createContext();
const user = {name : 'John', city:'NY'}

const App = () => {
  return (
    <>
    <UserContext.Provider value={user}>
      <User />
      <UserClassComponent />
    </UserContext.Provider>
    <ProductContextProvider>
      <Product />
    </ProductContextProvider>
    </>
  )
}

export default App