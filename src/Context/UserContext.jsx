import { createContext, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    return(
        <UserContext.Provider value={{ name, setName, location, setLocation }}>
            {children}
        </UserContext.Provider>
    )
}