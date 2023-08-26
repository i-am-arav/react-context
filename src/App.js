import React from 'react'
import User from './User';

export const UserContext = React.createContext();
const user = {name : 'John', city:'NY'}

const App = () => {
  return (
    <UserContext.Provider value={user}>
      <User />
    </UserContext.Provider>
  )
}

export default App