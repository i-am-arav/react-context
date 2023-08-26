import React, {useContext} from 'react'
import { UserContext } from './App'

const User = () => {
  const user = useContext(UserContext);
  return (
    <div style={{padding: '20px'}}>
        <h4>User Page</h4>
       <p>name: {user.name}</p>
       <p>city: {user.city}</p>
    </div>
  )
}

export default User