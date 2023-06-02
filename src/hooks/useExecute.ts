import { useCommands } from "./useCommands"
import { useEffect, useState } from "react"
import { useTerminal } from "./useTerminal"

export const useExecute = () => {
    const commands = useCommands()
    const terminal = useTerminal()

    const [login, setLogin] = useState(false)

    const checkFocus = () => {
        if (document.activeElement === terminal.searchFieldRef.current) return true
    }

    const execute = (shell: string) => {
        const command = commands.filter((item) => item.command == shell.split(" ")[0])[0]
        if (command) {
            command.callback(shell)
            terminal.setModal(false)
            terminal.setShell("")
        }
    }

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            const focused_search = checkFocus()

            if (!focused_search && event.key === "/") {
                terminal.setModal(true)
            }

            if (terminal.modal) {
                if (event.key === "Enter") {
                    execute(terminal.shell.trim())
                }
            }
        }

        window.addEventListener("keydown", onKeyDown)

        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [terminal.modal, terminal.shell])

    return execute
}
