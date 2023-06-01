import { useContext, useEffect } from "react"
import TerminalContext from "../contexts/terminalContext"
import { useNavigate } from "react-router-dom"


export const useTerminal = () => {
    const terminal = useContext(TerminalContext)
    const navigate = useNavigate()
    
    const checkFocus = () => {
        if (document.activeElement === terminal.searchFieldRef.current) return true
    }

    const execute = () => {
        console.log(terminal.shell)
        const splited = terminal.shell.split(" ")

        if (splited.length == 1) {
            navigate(terminal.shell)
        } else if (splited.length == 2) {
            const command = splited[0]
            const argument = splited[1]

            if (command == "navigate") navigate(argument)
        }

        terminal.setModal(false)
        terminal.setShell("")
    }

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            const focused_search = checkFocus()

            if (!focused_search && event.key === "/") {
                terminal.setModal(true)
            }

            if (terminal.modal) {
                if (event.key === "Enter") {
                    execute()
                }
            }
        }

        window.addEventListener("keydown", onKeyDown)

        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [terminal.modal, terminal.shell])

    return terminal
}
