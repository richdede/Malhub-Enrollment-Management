import { useState, createContext, useContext } from "react";

const Context = createContext()

export const UserContext = ({children}) => {
    const [user, setUser] = useState(null)
    
    // const ourUser = user ? user : 'no user'

    return (
        <Context.Provider
            value={{
                user,
                setUser
            }} >{children}</Context.Provider>
    )
}


export const contextUser = () => useContext(Context)

