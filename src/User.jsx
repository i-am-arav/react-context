import React, {useContext} from 'react'
import { UserContext } from './App'
import { ProductContext } from './context/ProductContext';

const User = () => {
  const user = useContext(UserContext);
  const product = useContext(ProductContext);
  return (
    <div style={{padding: '20px'}}>
        <h4>User Page</h4>
       <p>name: {user.name}</p>
       <p>city: {user.city}</p>
       <p>product: {product.name}</p>
    </div>
  )
}

export default User