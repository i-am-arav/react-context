import React from 'react'

export const UserContext = React.createContext();

const UserContextProvider = ({children}) => {
    const user = {name: 'John', city:'NY'}
  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider