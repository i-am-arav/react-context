import React from 'react'
import User from './User';
import UserClassComponent from './UserClassComponent';

export const UserContext = React.createContext();
const user = {name : 'John', city:'NY'}

const App = () => {
  return (
    <UserContext.Provider value={user}>
      <User />
      <UserClassComponent />
    </UserContext.Provider>
  )
}

export default App