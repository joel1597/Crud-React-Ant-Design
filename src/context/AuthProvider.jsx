import { createContext, useState } from 'react'

const ValueContext = createContext();

export const AuthProvider = ({ children }) => {

    const [lastname, setLastName] = useState('joel sandoval campos')

    return (
        <ValueContext.Provider
            value={{
                lastname,
                setLastName
            }}
        >
            {children}
        </ValueContext.Provider>
    )
}

export default ValueContext
