import { useContext, useEffect, useState } from "react"
import TerminalContext from "../contexts/terminalContext"

export const useTerminal = () => {
    const terminal = useContext(TerminalContext)

    const close = () => {
        terminal.setModal(false)
        terminal.setShell("")
        terminal.setInputType("text")
        terminal.setPlaceholder("")

        terminal.stdout.setContent([])
        terminal.stdout.setContentTitle("")
        terminal.stdout.setOpen(false)
    }

    return { ...terminal, close }
}
