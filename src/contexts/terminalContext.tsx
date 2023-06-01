import { createContext, useState, useRef } from "react"
import React from "react"

interface TerminalContextValue {
    modal: boolean
    setModal: (modal: boolean) => void
    shell: string
    setShell: (shell: string) => void
    searchFieldRef: React.RefObject<HTMLInputElement>
    inputType: string
    setInputType: (type: string) => void
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
    const searchFieldRef = useRef<HTMLInputElement>(null)

    return (
        <TerminalContext.Provider value={{ modal, setModal, shell, setShell, searchFieldRef, inputType, setInputType }}>
            {children}
        </TerminalContext.Provider>
    )
}