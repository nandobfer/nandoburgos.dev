import { useContext, useEffect } from "react"
import TerminalContext from "../contexts/terminalContext"

export const useTerminal = () => {
    const terminal = useContext(TerminalContext)
    const { modal, setModal } = terminal

    const checkFocus = () => {
        if (document.activeElement === terminal.searchFieldRef.current) return true
    }

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            const focused_search = checkFocus()

            if (!focused_search && event.key === "/") {
                terminal.setModal(true)
            }
        }

        window.addEventListener("keydown", onKeyDown)

        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [terminal.modal])

    return terminal
}
