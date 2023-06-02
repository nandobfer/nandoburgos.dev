import { useContext, useEffect, useState } from "react"
import TerminalContext from "../contexts/terminalContext"

export const useTerminal = () => {
    const terminal = useContext(TerminalContext)

    const close = () => {
        terminal.setModal(false)
        terminal.setShell("")
        terminal.setInputType("text")
        terminal.setPlaceholder("")
    }

    return { ...terminal, close }
}
