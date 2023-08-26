import React from 'react'

export const ProductContext = React.createContext();

const product = {id:1, name:'Charger', price: '$120'}

const ProductContextProvider = ({children}) => {
  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider