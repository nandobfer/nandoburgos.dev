import { createContext, useState } from "react"
import React from "react"

interface AuthenticationContextValue {
    value: boolean
    setValue: (value: boolean) => void
}

interface AuthenticationProviderProps {
    children: React.ReactNode
}

const AuthenticationContext = createContext<AuthenticationContextValue>({} as AuthenticationContextValue)

export default AuthenticationContext

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({ children }) => {
    const [value, setValue] = useState(false)

    return <AuthenticationContext.Provider value={{ value, setValue }}>{children}</AuthenticationContext.Provider>
}
