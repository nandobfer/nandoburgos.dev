import { createContext, useState, useRef, Dispatch, SetStateAction } from "react"
import React from "react"

interface TerminalContextValue {
    modal: boolean
    setModal: (modal: boolean) => void
    shell: string
    setShell: (shell: string) => void
    searchFieldRef: React.RefObject<HTMLInputElement>
    inputType: string
    setInputType: (type: string) => void
    placeholder: string
    setPlaceholder: (type: string) => void
    password: boolean
    setPassword: (login: boolean) => void
}

interface TerminalProviderProps {
    children: React.ReactNode
}

const TerminalContext = createContext<TerminalContextValue>({} as TerminalContextValue)

export default TerminalContext

export const TerminalProvider: React.FC<TerminalProviderProps> = ({ children }) => {
    const [modal, setModal] = useState(false)
    const [shell, setShell] = useState("")
    const [inputType, setInputType] = useState("text")
    const [placeholder, setPlaceholder] = useState("")
    const [login, setLogin] = useState(false)
    const searchFieldRef = useRef<HTMLInputElement>(null)

    return (
        <TerminalContext.Provider
            value={{
                modal,
                setModal,
                shell,
                setShell,
                searchFieldRef,
                inputType,
                setInputType,
                placeholder,
                setPlaceholder,
                password: login,
                setPassword: setLogin,
            }}
        >
            {children}
        </TerminalContext.Provider>
    )
}
