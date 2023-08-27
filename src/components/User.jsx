import React, {useContext} from 'react'
import { ProductContext } from '../context/ProductContext';
import { UserContext } from '../context/UserContext';

const User = () => {
  const user = useContext(UserContext);
  const product = useContext(ProductContext);
  console.log('product', product)
  return (
    <div style={{padding: '20px'}}>
        <h4>User Page</h4>
       <p>name: {user.name}</p>
       <p>city: {user.city}</p>
       <p>product: {product?.name}</p>
    </div>
  )
}

export default User