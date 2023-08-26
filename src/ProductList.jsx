import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ProductListContext } from "./context/ProductContext";

const ProductList = () => {
  const [products, setProducts] = useContext(ProductListContext);

  const [currentProduct, setCurrentProduct] = useState({});

  const onChangeForProduct = (key, value) => {
    setCurrentProduct((prev) => ({...prev, [key]: value}));
  }

  const addProduct = () => {
    if(currentProduct.name && currentProduct.price) {
        setProducts((prev) => [...prev, currentProduct])
    }
  }
  React.useEffect(() => {
    setCurrentProduct({});
  }, [products.length])
  return <div>
    ProductList Page
    {products.map((product) => <p>{product.name}</p>)}
    <h4>Product input</h4>
    <input placeholder="name" value={currentProduct?.name || ''} onChange={(e) => onChangeForProduct('name', e.target.value) } />
    <input placeholder="price" value={currentProduct?.price || ''} onChange={(e) => onChangeForProduct('price', e.target.value) }/>
    <button onClick={addProduct}>Add product</button>

  </div>;
};

export default ProductList;
