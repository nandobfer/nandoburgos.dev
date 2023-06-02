import { createContext, useState, useRef, Dispatch, SetStateAction } from "react"
import React from "react"

interface Stdout {
    open: boolean
    setOpen: (open: boolean) => void
    content: string[]
    setContent: (content: string[]) => void
    contentTitle: string
    setContentTitle: (content: string) => void
}

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
    stdout: Stdout
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
    const [placeholder, setPlaceholder] = useState("help")
    const [login, setLogin] = useState(false)
    const searchFieldRef = useRef<HTMLInputElement>(null)

    const [openStdout, setOpenStdout] = useState(false)
    const [contentStdout, setContentStdout] = useState<string[]>([])
    const [contentTitleStdout, setContentTitleStdout] = useState("")
    const stdout: Stdout = {
        open: openStdout,
        setOpen: setOpenStdout,
        content: contentStdout,
        setContent: setContentStdout,
        contentTitle: contentTitleStdout,
        setContentTitle: setContentTitleStdout,
    }

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
                stdout,
            }}
        >
            {children}
        </TerminalContext.Provider>
    )
}
