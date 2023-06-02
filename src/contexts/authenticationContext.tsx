import { createContext, useState } from "react"
import React from "react"

interface AuthenticationContextValue {
    value: User | null
    setValue: (value: User | null) => void
}

interface AuthenticationProviderProps {
    children: React.ReactNode
}

const AuthenticationContext = createContext<AuthenticationContextValue>({} as AuthenticationContextValue)

export default AuthenticationContext

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({ children }) => {
    const [value, setValue] = useState<User | null>(null)

    return <AuthenticationContext.Provider value={{ value, setValue }}>{children}</AuthenticationContext.Provider>
}
